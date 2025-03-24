import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>PA</span>
            <span className={styles.logoSub}>DIGITAL PROJECT</span>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <h3 className={styles.footerTitle}>Information</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/">Main</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/certifications">Certifications</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerContacts}>
          <h3 className={styles.footerTitle}>Contacts</h3>
          <ul className={styles.contactInfo}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                1234 Sample Street
                <br />
                Austin Texas 78704
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>512.333.2222</div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div>example@digital.com</div>
            </li>
          </ul>
        </div>

        <div className={styles.footerSocial}>
          <h3 className={styles.footerTitle}>Social Media</h3>
          <div className={styles.socialIcons}>
            <Link href="#" className={styles.socialIcon}>
              f
            </Link>
            <Link href="#" className={styles.socialIcon}>
              t
            </Link>
            <Link href="#" className={styles.socialIcon}>
              in
            </Link>
            <Link href="#" className={styles.socialIcon}>
              p
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>© 2023 All Rights Reserved</div>
    </footer>
  )
}

