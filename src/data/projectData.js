const projectsData = [
  {
    id: 1,
    name: "Maison démontable F 8 × 8 BCC",
    constructor: "Jean Prouvé, Pierre Jeanneret, Charlotte Perriand",
    collection: "L'empreinte d'un habitat",
    year: 1942,
    location: "France, Saint-Auban",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1942-M88/1942-M88_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1942-M88/1942-M88_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1942-M88/1942-M88_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1942-M88/1942-M88_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "7"],
        ["Metal", "11"],
        ["Biobased", "61"],
        ["Geobased", "0"],
        ["Glass", "3"],
        ["Plastic", "0"],
        ["Total", "82"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "1"],
        ["Metal", "29"],
        ["Biobased", "10"],
        ["Geobased", "0"],
        ["Glass", "3"],
        ["Plastic", "0"],
        ["Total", "43"],
      ]
    },
    footPrintMeaseure: {
      m2: 72,
      kgPerM2: 96,
      kgCO2PerM2: 55
    }
  },
   {
    id: 2,
    name: "Wichita House / Système Dymaxion",
    constructor: "Richard Buckminster Fuller",
    collection: "L'empreinte d'un habitat",
    year: 1947,
    location: "USA, Wichita",
    category: "Individual Housing",
    models: [],
    materialsData: null,
    footPrintMeaseure: {
      m2: 103,
      kgPerM2: 43,
      kgCO2PerM2: 137
    },
    models: [
      { id: 1, name: "Volumetry", path: "./models/1947-DMX/1947-DMX_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1947-DMX/1947-DMX_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1947-DMX/1947-DMX_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1947-DMX/1947-DMX_Materiality.glb', zoomValue: 1.5 },  
    ], 
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "4"],
        ["Metal", "26"],
        ["Biobased", "12"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "1"],
        ["Total", "43"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "1"],
        ["Metal", "118"],
        ["Biobased", "2"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "16"],
        ["Total", "137"],
      ]
    },
  },
  {
    id: 3,
    name: "Aluminaire House",
    constructor: "Albert Frey & A. Lawrence Kocher",
    collection: "L'empreinte d'un habitat",
    year: 1931,
    location: "New York, USA",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1931-ALU/1931-ALU-Volumetry.glb", zoomValue: 12 },
      { id: 4, name: "Frame", path: './models/1931-ALU/1931-ALU-Frame.glb', zoomValue: 12 },
      { id: 3, name: "System", path: './models/1931-ALU/1931-ALU-System.glb', zoomValue: 12 },
      { id: 2, name: "Materiality", path: './models/1931-ALU/1931-ALU-Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "203"],
        ["Metal", "66"],
        ["Biobased", "10"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "2"],
        ["Total", "285"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "31"],
        ["Metal", "140"],
        ["Biobased", "1"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "13"],
        ["Total", "189"],
      ]
    },
    footPrintMeaseure: {
      m2: 112,
      kgPerM2: 285,
      kgCO2PerM2: 189
    }
  },
{
    id: 4,
    name: "Refuge Tonneau",
    constructor: "Charlotte Perriand & Pierre Jeanneret",
    collection: "L'empreinte d'un habitat",
    year: 1938,
    location: "Alex, France",
    category: "Habitat de loisir",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1938-RFT/1938-RFT_Volumetry.glb", zoomValue: 6 },
      { id: 4, name: "Frame", path: './models/1938-RFT/1938-RFT_Frame.glb', zoomValue: 6 },
      { id: 3, name: "System", path: './models/1938-RFT/1938-RFT_System.glb', zoomValue: 6 },
      { id: 2, name: "Materiality", path: './models/1938-RFT/1938-RFT_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "27"],
        ["Biobased", "49"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "0"],
        ["Total", "80"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "55"],
        ["Biobased", "7"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "0"],
        ["Total", "66"],
      ]
    },
    footPrintMeaseure: {
      m2: 20,
      kgPerM2: 80,
      kgCO2PerM2: 66
    }
},
 {
    id: 6,
    name: "Packaged House",
    constructor: "Walter Gropius & Konrad Wachsmann",
    collection: "L'empreinte d'un habitat",
    year: 1952,
    location: "USA",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1952-GPS/1952-GPS_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1952-GPS/1952-GPS_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1952-GPS/1952-GPS_System.glb', zoomValue: 10 },
      { id: 2, name: "Materiality", path: './models/1952-GPS/1952-GPS_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "135"],
        ["Metal", "20"],
        ["Biobased", "129"],
        ["Geobased", "0"],
        ["Glass", "8"],
        ["Plastic", "0"],
        ["Total", "292"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "21"],
        ["Metal", "39"],
        ["Biobased", "16"],
        ["Geobased", "0"],
        ["Glass", "8"],
        ["Plastic", "0"],
        ["Total", "84"],
      ]
    },
    footPrintMeaseure: {
      m2: 65,
      kgPerM2: 292,
      kgCO2PerM2: 84
    }
},
{
    id: 7,
    name: "Case Study House N°8 / Eames House",
    constructor: "Charles & Ray Eames",
    collection: "L'empreinte d'un habitat",
    year: 1949,
    location: "Pacific Palisades, USA",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1949-CSH/1949-CSH_Volumetry.glb", zoomValue: 26 },
      { id: 4, name: "Frame", path: './models/1949-CSH/1949-CSH_Frame.glb', zoomValue: 26 },
      { id: 3, name: "System", path: './models/1949-CSH/1949-CSH_System.glb', zoomValue: 8 },
      { id: 2, name: "Materiality", path: './models/1949-CSH/1949-CSH_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "261"],
        ["Metal", "38"],
        ["Biobased", "1"],
        ["Geobased", "0"],
        ["Glass", "5"],
        ["Plastic", "1"],
        ["Total", "306"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "48"],
        ["Metal", "28"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "6"],
        ["Plastic", "11"],
        ["Total", "93"],
      ]
    },
    footPrintMeaseure: {
      m2: 232,
      kgPerM2: 306,
      kgCO2PerM2: 93
    }
},
{
    id: 8,
    name: "Maison Métropole",
    constructor: "Jean Prouvé & Henri Prouvé",
    collection: "L'empreinte d'un habitat",
    year: 1953,
    location: "Paris, France",
    category: "Individual Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/1952-MSM/1952-GLB_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/1952-MSM/1952-GLB_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/1952-MSM/1952-GLB_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/1952-MSM/1952-GLB_Materiality.glb', zoomValue: 0.01 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "52"],
        ["Biobased", "18"],
        ["Geobased", "0"],
        ["Glass", "3"],
        ["Plastic", "0"],
        ["Total", "73"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "117"],
        ["Biobased", "2"],
        ["Geobased", "0"],
        ["Glass", "3"],
        ["Plastic", "0"],
        ["Total", "122"],
      ]
    },
    footPrintMeaseure: {
      m2: 91,
      kgPerM2: 73,
      kgCO2PerM2: 122
    }
},

{
    id: 9,
    name: "Saishogen-Jukyo / Maison minimum",
    constructor: "Makoto Masuzawa",
    collection: "L'empreinte d'un habitat",
    year: 1952,
    location: "Shibuya, Japan",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1952-9TH/1952-9TH_Volumetry.glb", zoomValue: 7 },
      { id: 4, name: "Frame", path: './models/1952-9TH/1952-9TH_Frame.glb', zoomValue: 7 },
      { id: 3, name: "System", path: './models/1952-9TH/1952-9TH_System.glb', zoomValue: 8.2 },
      { id: 2, name: "Materiality", path: './models/1952-9TH/1952-9TH_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "234"],
        ["Metal", "22"],
        ["Biobased", "120"],
        ["Geobased", "0"],
        ["Glass", "12"],
        ["Plastic", "0"],
        ["Total", "388"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "39"],
        ["Metal", "40"],
        ["Biobased", "16"],
        ["Geobased", "0"],
        ["Glass", "14"],
        ["Plastic", "0"],
        ["Total", "109"],
      ]
    },
    footPrintMeaseure: {
      m2: 50,
      kgPerM2: 388,
      kgCO2PerM2: 109
    }
},
{
    id: 10,
    name: "Walker Guest House",
    constructor: "Paul Rudolph",
    collection: "L'empreinte d'un habitat",
    year: 1953,
    location: "Sanibel, USA",
    category: "Individual Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/1952-WGH/1952-WGH_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/1952-WGH/1952-WGH_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/1952-WGH/1952-WGH_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/1952-WGH/1952-WGH_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "28"],
        ["Metal", "10"],
        ["Biobased", "81"],
        ["Geobased", "0"],
        ["Glass", "20"],
        ["Plastic", "0"],
        ["Total", "139"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "5"],
        ["Metal", "22"],
        ["Biobased", "10"],
        ["Geobased", "0"],
        ["Glass", "23"],
        ["Plastic", "0"],
        ["Total", "60"],
      ]
    },
    footPrintMeaseure: {
      m2: 53,
      kgPerM2: 139,
      kgCO2PerM2: 60
    }
},
{
    id: 11,
    name: "Moduli 225",
    constructor: "Kristian Gullichsen & Juhani Pallasmaa",
    collection: "L'empreinte d'un habitat",
    year: 1974,
    location: "Helsinki, Finland",
    category: "Habitat de loisir",
    models: [
     { id: 1, name: "Volumetry", path: "./models/1968-MOD/1968-MOD_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/1968-MOD/1968-MOD_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/1968-MOD/1968-MOD_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/1968-MOD/1968-MOD_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "27"],
        ["Metal", "2"],
        ["Biobased", "80"],
        ["Geobased", "0"],
        ["Glass", "11"],
        ["Plastic", "1"],
        ["Total", "121"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "3"],
        ["Metal", "4"],
        ["Biobased", "47"],
        ["Geobased", "0"],
        ["Glass", "13"],
        ["Plastic", "4"],
        ["Total", "71"],
      ]
    },
    footPrintMeaseure: {
      m2: 41,
      kgPerM2: 121,
      kgCO2PerM2: 71
    }
},
{
    id: 12,
    name: "Espansiva",
    constructor: "Jørn Utzon",
    collection: "L'empreinte d'un habitat",
    year: 1969,
    location: "Hellebæk, Denmark",
    category: "Individual Housing",
    models: [
  { id: 4, name: "Frame",       path: "./models/1969-ESP/1969-ESP_Frame.glb",       zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/1969-ESP/1969-ESP_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1969-ESP/1969-ESP_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "404"],
        ["Metal", "9"],
        ["Biobased", "145"],
        ["Geobased", "0"],
        ["Glass", "9"],
        ["Plastic", "1"],
        ["Total", "568"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "108"],
        ["Metal", "30"],
        ["Biobased", "18"],
        ["Geobased", "0"],
        ["Glass", "11"],
        ["Plastic", "4"],
        ["Total", "171"],
      ]
    },
    footPrintMeaseure: {
      m2: 161,
      kgPerM2: 568,
      kgCO2PerM2: 171
    }
},
{
    id: 13,
    name: "Oriental Masonic Gardens",
    constructor: "Paul Rudolph",
    collection: "L'empreinte d'un habitat",
    year: 1970,
    location: "New Haven,USA",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/1970-OMG/1970-OMG_Volumetry.glb", zoomValue: 17},
     { id: 3, name: "System", path: './models/1970-OMG/1970-OMG_System.glb', zoomValue: 17},
     { id: 2, name: "Materiality", path: './models/1970-OMG/1970-OMG_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "166"],
        ["Metal", "28"],
        ["Biobased", "68"],
        ["Geobased", "0"],
        ["Glass", "2"],
        ["Plastic", "9"],
        ["Total", "273"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "28"],
        ["Metal", "87"],
        ["Biobased", "35"],
        ["Geobased", "0"],
        ["Glass", "2"],
        ["Plastic", "129"],
        ["Total", "281"],
      ]
    },
    footPrintMeaseure: {
      m2: 51,
      kgPerM2: 273,
      kgCO2PerM2: 281
    }
},
{
    id: 14,
    name: "Habitat industrialisé SIRH",
    constructor: "Claude Prouvé",
    collection: "L'empreinte d'un habitat",
    year: 1974,
    location: "Ludres, France",
    category: "Collective Housing",
    models: [
  { id: 4, name: "Frame",       path: "./models/1972-LUD/1972-LUD_Frame.glb",       zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1972-LUD/1972-LUD_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "135"],
        ["Biobased", "42"],
        ["Geobased", "0"],
        ["Glass", "5"],
        ["Plastic", "5"],
        ["Total", "187"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "281"],
        ["Biobased", "43"],
        ["Geobased", "0"],
        ["Glass", "6"],
        ["Plastic", "32"],
        ["Total", "362"],
      ]
    },
    footPrintMeaseure: {
      m2: 137,
      kgPerM2: 187,
      kgCO2PerM2: 362
    }
},
{
    id: 15,
    name: "Bulle Six Coques",
    constructor: "Jean Benjamin Maneval",
    collection: "L'empreinte d'un habitat",
    year: 1970,
    location: "Gripp, France",
    category: "Habitat de loisir",
    models: [
  { id: 1, name: "Volumetry",   path: "./models/1970-BUL/1970-BUL_Volumetry.glb",   zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/1970-BUL/1970-BUL_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1970-BUL/1970-BUL_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "126"],
        ["Biobased", "42"],
        ["Geobased", "0"],
        ["Glass", "22"],
        ["Plastic", "74"],
        ["Total", "264"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "53"],
        ["Biobased", "48"],
        ["Geobased", "3"],
        ["Glass", "0"],
        ["Plastic", "654"],
        ["Total", "758"],
      ]
    },
    footPrintMeaseure: {
      m2: 36,
      kgPerM2: 264,
      kgCO2PerM2: 758
    }
},
{
    id: 16,
    name: "Hexacube",
    constructor: "Georges Candilis & Anja Blomstedt",
    collection: "L'empreinte d'un habitat",
    year: 1972,
    location: "Port-Leucate, France",
    category: "Habitat de loisir",
    models: [
  { id: 3, name: "System",      path: "./models/1972-HEX/1972-HEX_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1972-HEX/1972-HEX_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "3"],
        ["Biobased", "3"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "82"],
        ["Total", "88"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "16"],
        ["Biobased", "4"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "727"],
        ["Total", "747"],
      ]
    },
    footPrintMeaseure: {
      m2: 27,
      kgPerM2: 88,
      kgCO2PerM2: 747
    }
},
{
    id: 17,
    name: "Zip-Up House",
    constructor: "Richard & Su Rogers",
    collection: "L'empreinte d'un habitat",
    year: 1969,
    location: "Unbuilt",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1969-ZIP/1969-ZIP_Volumetry.glb", zoomValue: 18 },
      { id: 3, name: "System", path: './models/1969-ZIP/1969-ZIP_System.glb', zoomValue: 0.3 },
      { id: 2, name: "Materiality", path: './models/1969-ZIP/1969-ZIP_Materiality.glb', zoomValue: 2 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "27"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "11"],
        ["Plastic", "66"],
        ["Total", "104"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "96"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "13"],
        ["Plastic", "305"],
        ["Total", "414"],
      ]
    },
    footPrintMeaseure: {
      m2: 269,
      kgPerM2: 104,
      kgCO2PerM2: 414
    }
},
{
    id: 18,
    name: "TBS - Tropical Building System",
    constructor: "Frank Huster & Peter Hübner",
    collection: "L'empreinte d'un habitat",
    year: 1977,
    location: "Neckartenzlingen, Germany",
    category: "Individual Housing",
    models: [
  { id: 3, name: "System",      path: "./models/1977-TBS/1977-TBS_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1977-TBS/1977-TBS_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "214"],
        ["Metal", "117"],
        ["Biobased", "3"],
        ["Geobased", "0"],
        ["Glass", "13"],
        ["Plastic", "90"],
        ["Total", "437"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "37"],
        ["Metal", "131"],
        ["Biobased", "4"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "435"],
        ["Total", "621"],
      ]
    },
    footPrintMeaseure: {
      m2: 216,
      kgPerM2: 437,
      kgCO2PerM2: 621
    }
},
{
    id: 19,
    name: "EH, Evolutive Housing",
    constructor: "Studio Piano & Rice",
    collection: "L'empreinte d'un habitat",
    year: 1982,
    location: "Perugia, Italy",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1978-EVO/1982-EVO_Volumetry.glb", zoomValue: 11 },
      { id: 3, name: "System", path: './models/1978-EVO/1982-EVO_System.glb', zoomValue: 11 },
      { id: 2, name: "Materiality", path: './models/1978-EVO/1982-EVO_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "659"],
        ["Metal", "20"],
        ["Biobased", "9"],
        ["Geobased", "0"],
        ["Glass", "14"],
        ["Plastic", "2"],
        ["Total", "704"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "119"],
        ["Metal", "18"],
        ["Biobased", "11"],
        ["Geobased", "0"],
        ["Glass", "15"],
        ["Plastic", "5"],
        ["Total", "168"],
      ]
    },
    footPrintMeaseure: {
      m2: 147,
      kgPerM2: 704,
      kgCO2PerM2: 168
    }
},
{
    id: 20,
    name: "Walters Way & Segal Close",
    constructor: "Walter Segal & Jon Broome",
    collection: "L'empreinte d'un habitat",
    year: 1987,
    location: "Lewisham, England",
    category: "Individual Housing",
    models: [
  { id: 1, name: "Volumetry",   path: "./models/1987-SEG/1987-SEG_Volumetry.glb",   zoomValue: 9 },
  { id: 4, name: "Frame",       path: "./models/1987-SEG/1987-SEG_Frame.glb",       zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/1987-SEG/1987-SEG_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1987-SEG/1987-SEG_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "235"],
        ["Metal", "0"],
        ["Biobased", "112"],
        ["Geobased", "0"],
        ["Glass", "10"],
        ["Plastic", "4"],
        ["Total", "361"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "87"],
        ["Metal", "2"],
        ["Biobased", "15"],
        ["Geobased", "0"],
        ["Glass", "10"],
        ["Plastic", "27"],
        ["Total", "141"],
      ]
    },
    footPrintMeaseure: {
      m2: 46,
      kgPerM2: 361,
      kgCO2PerM2: 141
    }
},
{
    id: 21,
    name: "Yacht House",
    constructor: "Richard Horden",
    collection: "L'empreinte d'un habitat",
    year: 1983,
    location: "Hampshire, England",
    category: "Individual Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/1983-YCH/1983-YCH_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/1983-YCH/1983-YCH_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/1983-YCH/1983-YCH_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/1983-YCH/1983-YCH_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "472"],
        ["Metal", "25"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "13"],
        ["Plastic", "4"],
        ["Total", "514"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "80"],
        ["Metal", "84"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "14"],
        ["Plastic", "38"],
        ["Total", "216"],
      ]
    },
    footPrintMeaseure: {
      m2: 342,
      kgPerM2: 514,
      kgCO2PerM2: 216
    }
},
{
    id: 22,
    name: "Benthem House",
    constructor: "Benthem Crouwel Architects",
    collection: "L'empreinte d'un habitat",
    year: 1983,
    location: "Almere, Netherlands",
    category: "Individual Housing",
    models: [
  { id: 1, name: "Volumetry",   path: "./models/1983-ALM/1983-ALM_Volumetry.glb",   zoomValue: 9 },
  { id: 4, name: "Frame",       path: "./models/1983-ALM/1983-ALM_Frame.glb",       zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/1983-ALM/1983-ALM_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1983-ALM/1983-ALM_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "134"],
        ["Metal", "46"],
        ["Biobased", "17"],
        ["Geobased", "0"],
        ["Glass", "45"],
        ["Plastic", "7"],
        ["Total", "249"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "16"],
        ["Metal", "40"],
        ["Biobased", "18"],
        ["Geobased", "0"],
        ["Glass", "49"],
        ["Plastic", "58"],
        ["Total", "181"],
      ]
    },
    footPrintMeaseure: {
      m2: 65,
      kgPerM2: 249,
      kgCO2PerM2: 181
    }
},
{
    id: 23,
    name: "Maison Serre",
    constructor: "Françoise-Hélène Jourda & Gilles Perraudin",
    collection: "L'empreinte d'un habitat",
    year: 1985,
    location: "Lyon, France",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1985-SER/1985-SER_Volumetry.glb", zoomValue: 11 },
      { id: 4, name: "Frame", path: './models/1985-SER/1985-SER_Frame.glb', zoomValue: 11 },
      { id: 3, name: "System", path: './models/1985-SER/1985-SER_System.glb', zoomValue: 8.5 },
      { id: 2, name: "Materiality", path: './models/1985-SER/1985-SER_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "192"],
        ["Metal", "27"],
        ["Biobased", "37"],
        ["Geobased", "0"],
        ["Glass", "48"],
        ["Plastic", "4"],
        ["Total", "308"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "21"],
        ["Metal", "72"],
        ["Biobased", "31"],
        ["Geobased", "0"],
        ["Glass", "53"],
        ["Plastic", "37"],
        ["Total", "214"],
      ]
    },
    footPrintMeaseure: {
      m2: 140,
      kgPerM2: 308,
      kgCO2PerM2: 214
    }
  },
  {
    id: 24,
    name: "20K Dave's Home",
    constructor: "Rural Studio",
    collection: "L'empreinte d'un habitat",
    year: 2018,
    location: "Newbern, USA",
    category: "Individual Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/2009-DAV/2009-DAV_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/2009-DAV/2009-DAV_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/2009-DAV/2009-DAV_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/2009-DAV/2009-DAV_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "112"],
        ["Metal", "26"],
        ["Biobased", "96"],
        ["Geobased", "0"],
        ["Glass", "6"],
        ["Plastic", "3"],
        ["Total", "243"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "15"],
        ["Metal", "71"],
        ["Biobased", "12"],
        ["Geobased", "0"],
        ["Glass", "6"],
        ["Plastic", "12"],
        ["Total", "116"],
      ]
    },
    footPrintMeaseure: {
      m2: 47,
      kgPerM2: 243,
      kgCO2PerM2: 116
    }
},
{
    id: 25,
    name: "Living.Box Luzein",
    constructor: "Architeam 4",
    collection: "L'empreinte d'un habitat",
    year: 2005,
    location: "Luzein, Switzerland",
    category: "Collective Housing",
    models: [
  { id: 4, name: "Frame",       path: "./models/2005-LBO/2005-LBO_Frame.glb",       zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/2005-LBO/2005-LBO_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/2005-LBO/2005-LBO_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "464"],
        ["Metal", "45"],
        ["Biobased", "249"],
        ["Geobased", "0"],
        ["Glass", "19"],
        ["Plastic", "0"],
        ["Total", "777"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "65"],
        ["Metal", "102"],
        ["Biobased", "55"],
        ["Geobased", "0"],
        ["Glass", "21"],
        ["Plastic", "0"],
        ["Total", "243"],
      ]
    },
    footPrintMeaseure: {
      m2: 89,
      kgPerM2: 777,
      kgCO2PerM2: 243
    }
},
{
    id: 26,
    name: "System 03",
    constructor: "Oskar Leo Kaufmann & Albert Rüf",
    collection: "L'empreinte d'un habitat",
    year: 2008,
    location: "New York, USA",
    category: "Collective Housing",
    models: [
  { id: 2, name: "Materiality", path: "./models/2008-S03/2008-S03_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "20"],
        ["Biobased", "216"],
        ["Geobased", "0"],
        ["Glass", "17"],
        ["Plastic", "0"],
        ["Total", "253"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "33"],
        ["Biobased", "243"],
        ["Geobased", "0"],
        ["Glass", "28"],
        ["Plastic", "0"],
        ["Total", "304"],
      ]
    },
    footPrintMeaseure: {
      m2: 49,
      kgPerM2: 253,
      kgCO2PerM2: 304
    }
},
{
    id: 27,
    name: "Factatory",
    constructor: "Philippe Rizzotti Architecte",
    collection: "L'empreinte d'un habitat",
    year: 2020,
    location: "Lyon, France",
    category: "Vacation Housing",
    models: [
  { id: 4, name: "Frame",       path: "./models/2020-FAC/2020-FAC_Frame.glb",       zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/2020-FAC/2020-FAC_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "29"],
        ["Metal", "29"],
        ["Biobased", "130"],
        ["Geobased", "0"],
        ["Glass", "12"],
        ["Plastic", "1"],
        ["Total", "200"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "3"],
        ["Metal", "22"],
        ["Biobased", "79"],
        ["Geobased", "0"],
        ["Glass", "13"],
        ["Plastic", "2"],
        ["Total", "119"],
      ]
    },
    footPrintMeaseure: {
      m2: 72,
      kgPerM2: 200,
      kgCO2PerM2: 119
    }
},
{
    id: 28,
    name: "Micro Compact Home",
    constructor: "Horden Cherry Lee Architects & Haack + Höpfner",
    collection: "L'empreinte d'un habitat",
    year: 2021,
    location: "Salzburg, Austria",
    category: "Collective Housing",
    models: [
  { id: 1, name: "Volumetry",   path: "./models/2021-MCH/2021-MCH_Volumetry.glb",   zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/2021-MCH/2021-MCH_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/2021-MCH/2021-MCH_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "110"],
        ["Biobased", "152"],
        ["Geobased", "0"],
        ["Glass", "7"],
        ["Plastic", "11"],
        ["Total", "280"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "288"],
        ["Biobased", "59"],
        ["Geobased", "0"],
        ["Glass", "8"],
        ["Plastic", "86"],
        ["Total", "441"],
      ]
    },
    footPrintMeaseure: {
      m2: 7,
      kgPerM2: 280,
      kgCO2PerM2: 441
    }
},
{
    id: 29,
    name: "Le Belvédère",
    constructor: "Hans-Walter Müller",
    collection: "L'empreinte d'un habitat",
    year: 2010,
    location: "La Ferté-Alais, France",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/2010-HWM/2010-HWM_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/2010-HWM/2010-HWM_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/2010-HWM/2010-HWM_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/2010-HWM/2010-HWM_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "62"],
        ["Biobased", "16"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "1"],
        ["Total", "79"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "45"],
        ["Biobased", "19"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "8"],
        ["Total", "72"],
      ]
    },
    footPrintMeaseure: {
      m2: 55,
      kgPerM2: 79,
      kgCO2PerM2: 72
    }
},
{
    id: 30,
    name: "Diogène",
    constructor: "Renzo Piano Building Workshop",
    collection: "L'empreinte d'un habitat",
    year: 2013,
    location: "Weil-am-Rhein, Germany",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2013-DIO/2013-DIO_Volumetry.glb", zoomValue: 4 },
      { id: 4, name: "Frame", path: './models/2013-DIO/2013-DIO_Frame.glb', zoomValue: 4},
      { id: 3, name: "System", path: './models/2013-DIO/2013-DIO_System.glb', zoomValue: 8 },
      { id: 2, name: "Materiality", path: './models/2013-DIO/2013-DIO_Materiality.glb', zoomValue: 2 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "36"],
        ["Biobased", "240"],
        ["Geobased", "0"],
        ["Glass", "22"],
        ["Plastic", "11"],
        ["Total", "309"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "94"],
        ["Biobased", "53"],
        ["Geobased", "0"],
        ["Glass", "24"],
        ["Plastic", "99"],
        ["Total", "270"],
      ]
    },
    footPrintMeaseure: {
      m2: 8,
      kgPerM2: 309,
      kgCO2PerM2: 270
    }
},
{
    id: 31,
    name: "Container Temporary Housing",
    constructor: "Shigeru Ban Architects & VAN",
    collection: "L'empreinte d'un habitat",
    year: 2011,
    location: "Onagawa, Japan",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/2011-CTH/2011-CTH_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/2011-CTH/2011-CTH_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/2011-CTH/2011-CTH_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/2011-CTH/2011-CTH_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "2"],
        ["Metal", "207"],
        ["Biobased", "6"],
        ["Geobased", "0"],
        ["Glass", "5"],
        ["Plastic", "0"],
        ["Total", "220"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "2"],
        ["Metal", "182"],
        ["Biobased", "1"],
        ["Geobased", "0"],
        ["Glass", "5"],
        ["Plastic", "0"],
        ["Total", "191"],
      ]
    },
    footPrintMeaseure: {
      m2: 637,
      kgPerM2: 220,
      kgCO2PerM2: 191
    }
},
{
    id: 32,
    name: "BBB Kvistgård",
    constructor: "Vandkunsten Architects",
    collection: "L'empreinte d'un habitat",
    year: 2008,
    location: "Helsingør, Denmark",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/2008-BBB/2008-BBB_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/2008-BBB/2008-BBB_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/2008-BBB/2008-BBB_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/2008-BBB/2008-BBB_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "385"],
        ["Metal", "6"],
        ["Biobased", "74"],
        ["Geobased", "0"],
        ["Glass", "13"],
        ["Plastic", "2"],
        ["Total", "480"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "118"],
        ["Metal", "13"],
        ["Biobased", "29"],
        ["Geobased", "0"],
        ["Glass", "14"],
        ["Plastic", "7"],
        ["Total", "181"],
      ]
    },
    footPrintMeaseure: {
      m2: 96,
      kgPerM2: 480,
      kgCO2PerM2: 181
    }
},
{
    id: 33,
    name: "La Promesse de l'Aube",
    constructor: "Moonarchitectures",
    collection: "L'empreinte d'un habitat",
    year: 2016,
    location: "Paris XVIe, France",
    category: "Collective Housing",
    models: [
  { id: 3, name: "System",      path: "./models/2016-AUB/2016-AUB_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/2016-AUB/2016-AUB_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "191"],
        ["Metal", "10"],
        ["Biobased", "152"],
        ["Geobased", "0"],
        ["Glass", "14"],
        ["Plastic", "5"],
        ["Total", "372"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "32"],
        ["Metal", "26"],
        ["Biobased", "71"],
        ["Geobased", "0"],
        ["Glass", "16"],
        ["Plastic", "10"],
        ["Total", "155"],
      ]
    },
    footPrintMeaseure: {
      m2: 470,
      kgPerM2: 372,
      kgCO2PerM2: 155
    }
},
{
    id: 34,
    name: "Aktivhaus - Siedlung Winnenden",
    constructor: "Werner Sobek",
    collection: "L'empreinte d'un habitat",
    year: 2016,
    location: "Winnenden, Germany",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/2016-AKT/2016-AKT_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/2016-AKT/2016-AKT_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/2016-AKT/2016-AKT_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/2016-AKT/2016-AKT_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "243"],
        ["Metal", "18"],
        ["Biobased", "258"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "3"],
        ["Total", "526"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "41"],
        ["Metal", "84"],
        ["Biobased", "108"],
        ["Geobased", "0"],
        ["Glass", "4"],
        ["Plastic", "14"],
        ["Total", "251"],
      ]
    },
    footPrintMeaseure: {
      m2: 347,
      kgPerM2: 526,
      kgCO2PerM2: 251
    }
},
{
    id: 35,
    name: "Architecture mineure parisienne",
    constructor: "Jacques Fredet",
    year: 1730,
    location: "Paris, France",
    category: "Collective Housing",
    models: [
  { id: 4, name: "Frame",       path: "./models/1730-PAR/1730-PAR_Frame.glb",       zoomValue: 9 },
  { id: 3, name: "System",      path: "./models/1730-PAR/1730-PAR_System.glb",      zoomValue: 9 },
  { id: 2, name: "Materiality", path: "./models/1730-PAR/1730-PAR_Materiality.glb", zoomValue: 1.5 },
],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "2622"],
        ["Metal", "0"],
        ["Biobased", "249"],
        ["Geobased", "0"],
        ["Glass", "2"],
        ["Plastic", "0"],
        ["Total", "2873"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "341"],
        ["Metal", "0"],
        ["Biobased", "31"],
        ["Geobased", "0"],
        ["Glass", "2"],
        ["Plastic", "0"],
        ["Total", "374"],
      ]
    },
    footPrintMeaseure: {
      m2: 587,
      kgPerM2: 2873,
      kgCO2PerM2: 374
    }
},
{
    id: 36,
    name: "Familistère de Guise",
    constructor: "Jean-Baptiste Andé Godin",
    year: 1859,
    location: "Guise, France",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/1859-FAM/1859-FAM_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/1859-FAM/1859-FAM_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/1859-FAM/1859-FAM_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/1859-FAM/1859-FAM_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "851"],
        ["Metal", "5"],
        ["Biobased", "23"],
        ["Geobased", "0"],
        ["Glass", "3"],
        ["Plastic", "0"],
        ["Total", "883"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "276"],
        ["Metal", "4"],
        ["Biobased", "3"],
        ["Geobased", "0"],
        ["Glass", "3"],
        ["Plastic", "0"],
        ["Total", "286"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 883,
      kgCO2PerM2: 286
    }
},
{
    id: 50,
    name: "Quinta Monroy",
    constructor: "Elemental",
    year: 2003,
    location: "Iquique, Chili",
    category: "Collective Housing",
    models: [
     { id: 1, name: "Volumetry", path: "./models/2003-QTM/2003-QTM_Volumetry.glb", zoomValue: 9 },
     { id: 4, name: "Frame", path: './models/2003-QTM/2003-QTM_Frame.glb', zoomValue: 9 },
     { id: 3, name: "System", path: './models/2003-QTM/2003-QTM_System.glb', zoomValue: 9 },
     { id: 2, name: "Materiality", path: './models/2003-QTM/2003-QTM_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "807"],
        ["Metal", "5"],
        ["Biobased", "22"],
        ["Geobased", "0"],
        ["Glass", "1"],
        ["Plastic", "0"],
        ["Total", "835"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "64"],
        ["Metal", "18"],
        ["Biobased", "8"],
        ["Geobased", "0"],
        ["Glass", "2"],
        ["Plastic", "4"],
        ["Total", "96"],
      ]
    },
    footPrintMeaseure: {
      m2: 53,
      kgPerM2: 835,
      kgCO2PerM2: 96
    }
},
{
    id: 51,
    name: "Saint-Véran Queyras",
    constructor: "Anonyme",
    year: 1900,
    location: "Saint-Véran, France",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1900-QRS/1900-QRS_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1900-QRS/1900-QRS_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1900-QRS/1900-QRS_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1900-QRS/1900-QRS_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE A",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 52,
    name: "Villa La Roche Jeanneret",
    constructor: "Le Corbusier",
    year: 1924,
    location: "Paris XVIe, France",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1924-LAR/1924-LAR_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1924-LAR/1924-LAR_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1924-LAR/1924-LAR_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1924-LAR/1924-LAR_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 53,
    name: "Bergpolderflat",
    constructor: "Brinkman & Van der Vlugt",
    year: 1934,
    location: "Rotterdam, Netherlands",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1934-BER/1934-BER_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1934-BER/1934-BER_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1934-BER/1934-BER_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1934-BER/1934-BER_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 54,
    name: "Le Tétrodon",
    constructor: "AUA",
    year: 1972,
    location: "Lège-Cap-Ferret, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1972-TDN/1972-TDN_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1972-TDN/1972-TDN_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1972-TDN/1972-TDN_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1972-TDN/1972-TDN_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 55,
    name: "Logements sociaux en pisé à l'Isle-d'Abeau",
    constructor: "Gilles Perraudin",
    year: 1982,
    location: "Villefontaine, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1982-LSP/1982-LSP_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/1982-LSP/1982-LSP_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/1982-LSP/1982-LSP_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/1982-LSP/1982-LSP_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 56,
    name: "Cité manifeste de Mulhouse",
    constructor: "Lacaton & Vassal",
    year: 2005,
    location: "Mulhouse, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2005-CML/2005-CML_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2005-CML/2005-CML_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2005-CML/2005-CML_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2005-CML/2005-CML_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 57,
    name: "Cité manifeste de Mulhouse",
    constructor: "Jean Nouvel",
    year: 2005,
    location: "Mulhouse, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2005-CMN/2005-CMN_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2005-CMN/2005-CMN_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2005-CMN/2005-CMN_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2005-CMN/2005-CMN_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 58,
    name: "Logement à Monterrey",
    constructor: "Elemental",
    year: 2009,
    location: "Monterrey, Chili",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2009-MTR/2009-MTR_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2009-MTR/2009-MTR_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2009-MTR/2009-MTR_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2009-MTR/2009-MTR_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 59,
    name: "Logement Lo Barnechea",
    constructor: "Elemental",
    year: 2010,
    location: "Santiago de Chile, Chili",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2010-LBH/2010-LBH_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2010-LBH/2010-LBH_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2010-LBH/2010-LBH_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2010-LBH/2010-LBH_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 60,
    name: "Logements sociaux à Cornebarrieu Lot G",
    constructor: "Gilles Perraudin",
    year: 2011,
    location: "Cornebarrieu, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2011-CRB/2011-CRB_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2011-CRB/2011-CRB_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2011-CRB/2011-CRB_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2011-CRB/2011-CRB_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 61,
    name: "Logement Villa verde",
    constructor: "Elemental",
    year: 2013,
    location: "Constitucion, Chili",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2013-VVD/2013-VVD_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2013-VVD/2013-VVD_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2013-VVD/2013-VVD_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2013-VVD/2013-VVD_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 62,
    name: "Logements à Cornebarrieu Lot F",
    constructor: "Gilles Perraudin",
    year: 2014,
    location: "Cornebarrieu, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2014-CRF/2014-CRF_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2014-CRF/2014-CRF_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2014-CRF/2014-CRF_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2014-CRF/2014-CRF_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 63,
    name: "Laborda",
    constructor: "Lacol",
    year: 2018,
    location: "Barcelona, Spain",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2018-LCL/2018-LCL_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2018-LCL/2018-LCL_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2018-LCL/2018-LCL_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2018-LCL/2018-LCL_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 64,
    name: "Logements participatif à Lille",
    constructor: "Atelier Hart Bertoloot",
    year: 2018,
    location: "Lille, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2018-LPL/2018-LPL_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2018-LPL/2018-LPL_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2018-LPL/2018-LPL_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2018-LPL/2018-LPL_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 65,
    name: "CROUS de Champs-sur-Marne",
    constructor: "Atelier Villemard Associés",
    year: 2019,
    location: "Champs-sur-Marne, France",
    category: "Student residence",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2019-CCT/2019-CCT_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2019-CCT/2019-CCT_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2019-CCT/2019-CCT_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2019-CCT/2019-CCT_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 66,
    name: "Ferme du Rail",
    constructor: "Grand Huit",
    year: 2019,
    location: "Paris XIXe, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2019-FDR/2019-FDR_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2019-FDR/2019-FDR_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2019-FDR/2019-FDR_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2019-FDR/2019-FDR_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 67,
    name: "La Semblada",
    constructor: "Atelier du Rouget Simon Teyssou & associés",
    year: 2019,
    location: "Clermont-Ferrand, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2019-LSB/2019-LSB_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2019-LSB/2019-LSB_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2019-LSB/2019-LSB_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2019-LSB/2019-LSB_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 68,
    name: "Le Mesnil de Stains",
    constructor: "OBOH",
    year: 2020,
    location: "Stains, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2020-MNS/2020-MNS_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2020-MNS/2020-MNS_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2020-MNS/2020-MNS_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2020-MNS/2020-MNS_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 69,
    name: "Quatre cheminées",
    constructor: "Dechelette Architecture",
    year: 2023,
    location: "Boulogne-Billancourt, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2023-4CM/2023-4CM_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2023-4CM/2023-4CM_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2023-4CM/2023-4CM_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2023-4CM/2023-4CM_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 70,
    name: "5 Logements de Le Rheu",
    constructor: "Cécile Gaudoin",
    year: 2023,
    location: "Le Rheu, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2023-LSP/2023-LSP_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2023-LSP/2023-LSP_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2023-LSP/2023-LSP_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2023-LSP/2023-LSP_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 71,
    name: "56 Logements d'Arpajon",
    constructor: "Harari architectes",
    year: 2024,
    location: "Arpajon, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2024-LAP/2024-LAP_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2024-LAP/2024-LAP_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2024-LAP/2024-LAP_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2024-LAP/2024-LAP_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 72,
    name: "24 logements sociaux",
    constructor: "Jean-Christophe Quinton",
    year: 2024,
    location: "Boulogne-Billancourt, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2024-LBB/2024-LBB_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2024-LBB/2024-LBB_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2024-LBB/2024-LBB_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2024-LBB/2024-LBB_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 73,
    name: "32 Logements d'Ormesson-sur-Marne",
    constructor: "Boris Bouchet Architectes",
    year: 2025,
    location: "Ormesson-sur-Marne, France",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2025-LOM/2025-LOM_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2025-LOM/2025-LOM_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2025-LOM/2025-LOM_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2025-LOM/2025-LOM_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 74,
    name: "Tuinwoningen",
    constructor: "Collectief Noord",
    year: 2011,
    location: "Antwerp, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2011-TUI/2011-TUI_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2011-TUI/2011-TUI_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2011-TUI/2011-TUI_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2011-TUI/2011-TUI_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 75,
    name: "Elisabeth",
    constructor: "AgwA",
    year: 2014,
    location: "Schaerbeek, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2014-ELI/2014-ELI_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2014-ELI/2014-ELI_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2014-ELI/2014-ELI_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2014-ELI/2014-ELI_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
},
{
    id: 76,
    name: "Five compact houses Antwerp",
    constructor: "Bovenbouw",
    year: 2016,
    location: "Antwerp, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2016-FIV/2016-FIV_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2016-FIV/2016-FIV_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2016-FIV/2016-FIV_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2016-FIV/2016-FIV_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 77,
    name: "Buurschap de Blokskens",
    constructor: "Happel Cornrelisse Verhoeven",
    year: 2017,
    location: "Zandhoven, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2017-BUU/2017-BUU_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2017-BUU/2017-BUU_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2017-BUU/2017-BUU_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2017-BUU/2017-BUU_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 78,
    name: "Maison Vignette",
    constructor: "Karbon' architecture et urbanisme",
    year: 2018,
    location: "Auderghem, Belgium",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2018-VIG/2018-VIG_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2018-VIG/2018-VIG_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2018-VIG/2018-VIG_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2018-VIG/2018-VIG_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 79,
    name: "Karper !",
    constructor: "Hé-architectuur",
    year: 2019,
    location: "Molenbeek, Belgium",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2019-KAR/2019-KAR_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2019-KAR/2019-KAR_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2019-KAR/2019-KAR_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2019-KAR/2019-KAR_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 80,
    name: "Herderin",
    constructor: "BC Architects",
    year: 2020,
    location: "Antwerp, Belgium",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2020-HER/2020-HER_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2020-HER/2020-HER_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2020-HER/2020-HER_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2020-HER/2020-HER_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 81,
    name: "Onafhankelijk",
    constructor: "BC Architects",
    year: 2020,
    location: "Koekelberg, Belgium",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2020-ONA/2020-ONA_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2020-ONA/2020-ONA_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2020-ONA/2020-ONA_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2020-ONA/2020-ONA_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 82,
    name: "Sijs",
    constructor: "OfficeU",
    year: 2021,
    location: "Leuven, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2021-SIJ/2021-SIJ_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2021-SIJ/2021-SIJ_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2021-SIJ/2021-SIJ_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2021-SIJ/2021-SIJ_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 83,
    name: "Jolly",
    constructor: "Epoc architecture",
    year: 2022,
    location: "Schaerbeek, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2022-JOL/2022-JOL_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2022-JOL/2022-JOL_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2022-JOL/2022-JOL_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2022-JOL/2022-JOL_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 84,
    name: "Saint Servais co-housing",
    constructor: "Specimen architects",
    year: 2022,
    location: "Saint Servais, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2022-SAI/2022-SAI_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2022-SAI/2022-SAI_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2022-SAI/2022-SAI_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2022-SAI/2022-SAI_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 85,
    name: "Habitat groupé Temploux",
    constructor: "Epoc architecture + Karbon",
    year: 2023,
    location: "Temploux, Belgium",
    category: "Collective Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/2023-TEM/2023-TEM_Volumetry.glb", zoomValue: 9 },
      { id: 4, name: "Frame", path: './models/2023-TEM/2023-TEM_Frame.glb', zoomValue: 9 },
      { id: 3, name: "System", path: './models/2023-TEM/2023-TEM_System.glb', zoomValue: 9 },
      { id: 2, name: "Materiality", path: './models/2023-TEM/2023-TEM_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "0"],
        ["Metal", "0"],
        ["Biobased", "0"],
        ["Geobased", "0"],
        ["Glass", "0"],
        ["Plastic", "0"],
        ["Total", "0"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 0,
      kgCO2PerM2: 0
    }
  },
  {
    id: 38,
    name: "Maison Lilloise",
    constructor: "Anonyme",
    year: 1930,
    location: "Lille, France",
    category: "Individual Housing",
    models: [
      { id: 1, name: "Volumetry", path: "./models/1930-LIL/1930-LIL_Volumetry.glb", zoomValue: 16 },
      { id: 4, name: "Frame", path: './models/1930-LIL/1930-LIL_Frame.glb', zoomValue: 16 },
      { id: 3, name: "System", path: './models/1930-LIL/1930-LIL_System.glb', zoomValue: 16 },
      { id: 2, name: "Materiality", path: './models/1930-LIL/1930-LIL_Materiality.glb', zoomValue: 1.5 },  
    ],
    materialsData: {
      title: "SURFACE AREA MASS",
      meassure: "kg/m²",
      materials: [
        ["Mineral", "1039"],
        ["Metal", "0"],
        ["Biobased", "22"],
        ["Geobased", "0"],
        ["Glass", "1"],
        ["Plastic", "0"],
        ["Total", "1072"],
      ]
    },
    footPrintData: {
      title: "CARBON FOOT PRINT OF SURFACE AREA",
      meassure: "kg.eq.CO2/m²",
      materials: [
        ["Mineral", "143"],
        ["Metal", "0"],
        ["Biobased", "4"],
        ["Geobased", "0"],
        ["Glass", "1"],
        ["Plastic", "0"],
        ["Total", "148"],
      ]
    },
    footPrintMeaseure: {
      m2: 0,
      kgPerM2: 1072,
      kgCO2PerM2: 148
    }
  },
]

export default projectsData;
