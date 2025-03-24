import styles from "./certifications.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function CertificationsPage() {
  // Certifications data - you can add actual certifications here
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      year: "2022",
      validUntil: "2025",
    },
    {
      id: 2,
      title: "LEED Certification",
      description: "Leadership in Energy and Environmental Design",
      year: "2021",
      validUntil: "2024",
    },
    {
      id: 3,
      title: "WELL Building Standard",
      description: "Building standard focused on health and wellness",
      year: "2023",
      validUntil: "2026",
    },
  ]

  return (
    <div className={styles.container}>
      {/* Using the Navbar component with certifications page selected */}
      <Navbar currentPage="certifications" />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.certificationsHeader}>
          <h2 className={styles.certificationsSubtitle}>COMPANY</h2>
          <h1 className={styles.certificationsTitle}>Certifications</h1>
        </div>

        {/* Certifications List */}
        <div className={styles.certificationsList}>
          {certifications.map((certification) => (
            <div key={certification.id} className={styles.certificationItem}>
              <div className={styles.certificationTitle}>{certification.title}</div>
              <div className={styles.certificationDescription}>{certification.description}</div>
              <div className={styles.certificationMeta}>
                <span className={styles.certificationYear}>Issued: {certification.year}</span>
                <span className={styles.certificationValid}>Valid until: {certification.validUntil}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Using the Footer component */}
      <Footer />
    </div>
  )
}

