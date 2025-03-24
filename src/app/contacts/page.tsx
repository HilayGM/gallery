import Link from "next/link"
import styles from "./contacts.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ContactsPage() {
  return (
    <div className={styles.container}>
      {/* Using the Navbar component with contacts page selected */}
      <Navbar currentPage="contact" />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactHeader}>
              <h2 className={styles.contactSubtitle}>Contact</h2>
              <h1 className={styles.contactTitle}>Information</h1>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <h3 className={styles.companyName}>Company Name</h3>
                <p className={styles.address}>1234 Sample Street Austin Texas 76401</p>
              </div>

              <div className={styles.contactItem}>
                <p className={styles.phone}>512.333.2222</p>
              </div>

              <div className={styles.contactItem}>
                <p className={styles.email}>sampleemail@gmail.com</p>
              </div>

              <div className={styles.contactButtonContainer}>
                <Link href="#contact-form" className={styles.contactButton}>
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13782.868269461372!2d-97.74455233022462!3d30.274459499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a014ac8dcf%3A0x8df2438a79231140!2sDowntown%20Austin%2C%20Austin%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1648132133122!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
              title="Company Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form (hidden by default, shown when clicking CONTACT US) */}
        <div id="contact-form" className={styles.contactFormSection}>
          <h2 className={styles.formTitle}>Send us a message</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Email" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Message" className={styles.formTextarea} rows={5} required></textarea>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitButton}>
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Using the Footer component */}
      <Footer />
    </div>
  )
}

