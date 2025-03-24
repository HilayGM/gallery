import Image from "next/image"
import Link from "next/link"
import styles from "./projects-section.module.css"

export default function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>Our Projects</h2>
      <div className={styles.projectsGrid}>
        {/* Featured Project - Top Left */}
        <div className={styles.featuredProject}>
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Sample Project - Skyscrapers"
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

        {/* Wide Project - Middle */}
        <div className={styles.wideProject}>
          <Image
            src="/placeholder.svg?height=200&width=800"
            alt="Architectural project panorama"
            fill
            className={styles.projectImage}
          />
        </div>

        {/* Left Small Project */}
        <div className={styles.smallProject}>
          <Image
            src="/placeholder.svg?height=150&width=300"
            alt="Urban architecture project"
            fill
            className={styles.projectImage}
          />
        </div>

        {/* Right Small Project */}
        <div className={styles.smallProject}>
          <Image
            src="/placeholder.svg?height=150&width=300"
            alt="Modern skyscraper project"
            fill
            className={styles.projectImage}
          />
        </div>

        {/* Bottom Project */}
        <div className={styles.bottomProject}>
          <Image
            src="/placeholder.svg?height=150&width=300"
            alt="Unique architectural structure"
            fill
            className={styles.projectImage}
          />
        </div>
      </div>

      <div className={styles.allProjectsContainer}>
        <button className={styles.allProjects}>ALL PROJECTS →</button>
      </div>
    </section>
  )
}

