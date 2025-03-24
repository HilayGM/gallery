import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import ProjectsSection from "./components/proyects-section"


export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header/Navigation - Now using the Navbar component */}
      <Navbar currentPage="menu" />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Project</h2>
          <h1 className={styles.heroTitle}>Lorum</h1>

          <div className={styles.navButtons}>
            <button className={styles.roundButton}>←</button>
            <button className={styles.roundButton}>→</button>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.roundButton}>↗</button>
            <button className={styles.roundButton}>↓</button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="/placeholder.svg?height=500&width=400"
            alt="Edificio moderno de arquitectura"
            fill
            className={styles.heroImage}
          />
          <div className={styles.viewProject}>
            <span>VIEW PROJECT</span>
            <span>→</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <h2 className={styles.sectionTitle}>About</h2>
            <div className={styles.imageGrid}>
              <div className={styles.imageContainer}>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Detalle arquitectónico"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Detalle arquitectónico"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={`${styles.imageContainer} ${styles.imageFull}`}>
                <Image
                  src="/placeholder.svg?height=100&width=300"
                  alt="Detalle arquitectónico"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.aboutText}>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link href="#" className={styles.readMore}>
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.mission}>
        <h2 className={styles.sectionTitle}>Main Focus/Mission Statement</h2>
        <div className={styles.missionGrid}>
          <div className={styles.missionItem}>
            <div className={styles.missionNumber}>1</div>
            <div className={styles.missionText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
              </p>
            </div>
          </div>
          <div className={styles.missionItem}>
            <div className={styles.missionNumber}>2</div>
            <div className={styles.missionText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat,
                magna mauris porttitor tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Using the component */}
      <ProjectsSection />

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Name" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="E-mail" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Subject/Title" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Message" className={styles.formTextarea}></textarea>
              </div>
              <div className={styles.formGroup}>
                <button className={styles.sendButton}>SEND EMAIL →</button>
              </div>
            </form>
          </div>
          <div className={styles.contactImage}>
            <Image src="/placeholder.svg?height=300&width=400" alt="Contacto" fill className={styles.image} />
          </div>
        </div>
      </section>

      {/* Footer - Now using the Footer component */}
      <Footer />
    </div>
  )
}

