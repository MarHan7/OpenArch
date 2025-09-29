import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FullViewer from "./pages/atlas/Atlas";
import Team from "./components/Team/Team"
import styles from "./App.module.css"
import HeaderNav from "./components/header/HeaderNav";
import teamData from "./data/teamData";
import KgText from "./components/KGEQCO2/KGEQCO";
import Protocol from "./components/Protocol/Protocol"
import Contact from "./components/Contact/contact";
function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className={styles.container}>
        <div className={`${styles.section} ${styles.leftSection}`}>
          <FullViewer />
        </div>
        <div className={styles.mobileNavbarContainer}>
          <HeaderNav className={styles.mobileNavbar} />
        </div>
        <div className={`${styles.section} ${styles.rightSection}`}>
          <Routes>
            <Route path="/" element={<FullViewer view='projectList' rightSection/>} />
            <Route path="/protocole" element={<Protocol />}/>
            <Route path="/kgeqco2" element={<KgText/>}/>
            <Route path="/communaute" element={<Team projectData={teamData} />}/> 
            <Route path="/contact" element={<Contact/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );  
}

export default App;
