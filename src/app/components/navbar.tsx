import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar({ currentPage = "home" }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoText}>
            <span className={styles.logoMain}>PA</span>
            <span className={styles.logoSub}>DIGITAL PROJECT</span>
          </div>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navLink} ${currentPage === "menu" ? styles.active : ""}`}>
          MAIN
        </Link>
        <Link href="/gallery" className={`${styles.navLink} ${currentPage === "gallery" ? styles.active : ""}`}>
          GALLERY
        </Link>
        <Link href="/projects" className={`${styles.navLink} ${currentPage === "projects" ? styles.active : ""}`}>
          PROJECTS
        </Link>
        <Link
          href="/certifications"
          className={`${styles.navLink} ${currentPage === "certifications" ? styles.active : ""}`}
        >
          CERTIFICATIONS
        </Link>
        <Link href="/contacts" className={`${styles.navLink} ${currentPage === "contact" ? styles.active : ""}`}>
          CONTACTS
        </Link>
      </nav>
    </header>
  )
}

