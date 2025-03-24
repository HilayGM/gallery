import Image from "next/image"
import Link from "next/link"
import styles from "./projects.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ProjectsPage() {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Sample Project",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "Sample Project 2",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      title: "Sample Project 3",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]

  return (
    <div className={styles.container}>
      {/* Using the Navbar component with projects page selected */}
      <Navbar currentPage="projects" />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsSubtitle}>Our</h2>
          <h1 className={styles.projectsTitle}>Projects</h1>
        </div>

        {/* Projects List */}
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectItem}>
              <div className={styles.projectImage}>
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className={styles.image} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.viewMoreContainer}>
                  <Link href={`/projects/${project.id}`} className={styles.viewMore}>
                    VIEW MORE <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <div className={styles.pageNumbers}>
            <span className={styles.currentPage}>01</span>
            <span className={styles.totalPages}>05</span>
          </div>
          <div className={styles.pageControls}>
            <button className={styles.pageButton}>←</button>
            <button className={styles.pageButton}>→</button>
          </div>
        </div>
      </main>

      {/* Using the Footer component */}
      <Footer />
    </div>
  )
}

