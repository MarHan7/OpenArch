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
import { useEffect, useRef, useState } from "react";
function App() {

  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const [leftSectionHeight, setLeftSectionHeight] = useState(null);

  useEffect(() => {
    const element = leftSectionRef.current;

    if (!element) {
      return undefined;
    }

    const updateHeight = () => {
      if (!leftSectionRef.current) {
        return;
      }

      const { height } = leftSectionRef.current.getBoundingClientRect();
      setLeftSectionHeight(height);
    };

    updateHeight();

    const resizeObserverSupported = typeof ResizeObserver !== 'undefined';
    const observer = resizeObserverSupported
      ? new ResizeObserver(() => updateHeight())
      : null;

    if (observer) {
      observer.observe(element);
    } else if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateHeight);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      } else if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateHeight);
      }
    };
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <div className={styles.container}>
        <div className={`${styles.section} ${styles.leftSection}`} ref={leftSectionRef}>
          <FullViewer />
        </div>
        <div className={styles.mobileNavbarContainer}>
          <HeaderNav className={styles.mobileNavbar} />
        </div>
        <div className={styles.mobileSectionSpacer}>
          <span className={styles.spacerArrow} aria-hidden="true">▼</span>
        </div>
        <div className={`${styles.section} ${styles.rightSection}`} ref={rightSectionRef}>
          <Routes>
            <Route
              path="/"
              element={
                <FullViewer
                  view='projectList'
                  rightSection
                  rightSectionRef={rightSectionRef}
                  pairedSectionRef={leftSectionRef}
                  pairedSectionHeight={leftSectionHeight}

                />
              }
            />
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
