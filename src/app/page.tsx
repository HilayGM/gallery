import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">tilines </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="#" className={styles.navLink}>Menu</Link>
          <Link href="#" className={styles.navLink}>Gallery</Link>
          <Link href="#" className={styles.navLink}>Projects</Link>
          <Link href="#" className={styles.navLink}>Certifications</Link>
          <Link href="#" className={styles.navLink}>Contacts</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Project</h2>
          <h1 className={styles.heroTitle}>Tilines corp</h1>
          
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
            src="/Rectangle.png" 
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
                  src="/3987.jpg" 
                  alt="Detalle arquitectónico" 
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageContainer}>
                <Image 
                  src="/3987.jpg" 
                  alt="Detalle arquitectónico" 
                  fill
                  className={styles.image}
                />
              </div>
              <div className={`${styles.imageContainer} ${styles.imageFull}`}>
                <Image 
                  src="/3987.jpg" 
                  alt="Detalle arquitectónico" 
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.aboutText}>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.featuredProject}>
            <Image 
              src="/placeholder.svg?height=200&width=300" 
              alt="Sample Project" 
              fill
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>Sample Project</h3>
              <Link href="#" className={styles.viewMore}>
                VIEW MORE →
              </Link>
            </div>
          </div>
          <div className={styles.largeProject}>
            <Image 
              src="/placeholder.svg?height=200&width=600" 
              alt="Proyecto arquitectónico" 
              fill
              className={styles.projectImage}
            />
          </div>
          <div className={styles.smallProject}>
            <Image 
              src="/placeholder.svg?height=150&width=300" 
              alt="Proyecto arquitectónico" 
              fill
              className={styles.projectImage}
            />
          </div>
          <div className={styles.smallProject}>
            <Image 
              src="/placeholder.svg?height=150&width=300" 
              alt="Proyecto arquitectónico" 
              fill
              className={styles.projectImage}
            />
          </div>
          <div className={styles.smallProject}>
            <Image 
              src="/placeholder.svg?height=150&width=300" 
              alt="Proyecto arquitectónico" 
              fill
              className={styles.projectImage}
            />
          </div>
        </div>
        <div className={styles.allProjectsContainer}>
          <button className={styles.allProjects}>
            ALL PROJECTS →
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Subject/Title" 
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  placeholder="Message" 
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <button className={styles.sendButton}>
                  SEND EMAIL →
                </button>
              </div>
            </form>
          </div>
          <div className={styles.contactImage}>
            <Image 
              src="/placeholder.svg?height=300&width=400" 
              alt="Contacto" 
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            <div>PA</div>
          </div>
          <div className={styles.footerLinks}>
            <h3 className={styles.footerTitle}>Information</h3>
            <ul className={styles.footerList}>
              <li><Link href="#">Main</Link></li>
              <li><Link href="#">Gallery</Link></li>
              <li><Link href="#">Projects</Link></li>
              <li><Link href="#">Certifications</Link></li>
              <li><Link href="#">Contacts</Link></li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <h3 className={styles.footerTitle}>Contacts</h3>
            <ul className={styles.footerList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                123 Sample Street<br />
                Austin, Texas 78701
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                512.333.2222
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                email@example.com
              </li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <h3 className={styles.footerTitle}>Social Media</h3>
            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialIcon}>
                <span>FB</span>
              </Link>
              <Link href="#" className={styles.socialIcon}>
                <span>TW</span>
              </Link>
              <Link href="#" className={styles.socialIcon}>
                <span>IG</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2023 All Rights Reserved
        </div>
      </footer>
    </div>
  )
}
