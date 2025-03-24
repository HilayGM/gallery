import Image from "next/image"
import styles from "./gallery.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function GalleryPage() {
  // Gallery images data with lighthouse and architecture images
  const galleryImages = [
    { src: "/placeholder.svg?height=300&width=300", alt: "Architecture placeholder" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Lighthouse at dusk with purple sky" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Glass ceiling structure" },
    { src: "/placeholder.svg?height=300&width=300", alt: "White and red lighthouse" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Historic building with garden" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Arched entrance with ornate details" },
    { src: "/placeholder.svg?height=300&width=300", alt: "City street with historic tower" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Colonnade building with columns" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Waterfront building with white facade" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Modern architecture viewed from below" },
  ]

  return (
    <div className={styles.container}>
      {/* Using the Navbar component with gallery page selected */}
      <Navbar currentPage="gallery" />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.gallerySubtitle}>Photo</h2>
          <h1 className={styles.galleryTitle}>Gallery</h1>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className={styles.galleryImage}
              />
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

