import Newsletter from "./newsletter";
import styles from "./Contact.module.css"
function Contact() {
    return <div className={styles.container}>
        <h2 className={styles.contactTitle}>Contact</h2> 
        <p>Operation supported by the French government as part of the “Heritage and Architecture Digitization” initiative under France 2030, managed by the Caisse des Dépôts, with additional support from HOLCIM France. 
        Founded and led by Philippe Rizzotti Architecte, in partnership with the Chair of Sustainable Construction ETH Zurich and Arcora</p>
        <div className={styles.addressBlock}>
            <p>openarchitecture.org</p>
            <p>32, rue de Paradis</p>
            <p>75010 Paris, France</p>
            <p>+33 1 55 32 97 08</p>
        </div>
        <div>
            <p  className={styles.contactTitle}>INQUIRIES</p>
            <a className={styles.email} href="mailto:contact@openarchitecture.org">contact@openarchitecture.org</a>
        </div>
        
        <Newsletter></Newsletter>
    </div>
}

export default Contact