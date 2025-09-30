<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Valid email is required']);
    exit;
}

// Use absolute path and ensure directory exists
$csvFile = __DIR__ . '/../data/newsletter.csv';
$dataDir = dirname($csvFile);

if (!is_dir($dataDir)) {
    if (!mkdir($dataDir, 0755, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'Could not create data directory']);
        exit;
    }
}

// Check if email already exists
if (file_exists($csvFile)) {
    $handle = fopen($csvFile, 'r');
    if ($handle !== FALSE) {
        while (($row = fgetcsv($handle)) !== FALSE) {
            if ($row[0] === $email) {
                fclose($handle);
                http_response_code(409);
                echo json_encode(['error' => 'Email already subscribed']);
                exit;
            }
        }
        fclose($handle);
    }
}

// Add email to CSV
$handle = fopen($csvFile, 'a');
if ($handle === FALSE) {
    http_response_code(500);
    echo json_encode(['error' => 'Cannot open CSV file for writing']);
    exit;
}

if (fputcsv($handle, [$email, date('Y-m-d H:i:s')]) === FALSE) {
    fclose($handle);
    http_response_code(500);
    echo json_encode(['error' => 'Failed to write to CSV file']);
    exit;
}

fclose($handle);

echo json_encode(['success' => true, 'message' => 'Email subscribed successfully']);
?>
