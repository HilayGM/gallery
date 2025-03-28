import Image from "next/image"
import styles from "./gallery.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function GalleryPage() {
  // Gallery images data with lighthouse and architecture images
  const galleryImages = [
    { src: "/mc1.jpg", alt: "Architecture placeholder" },
    { src: "/mc2.jpeg", alt: "Lighthouse at dusk with purple sky" },
    { src: "/mc1.jpg", alt: "Glass ceiling structure" },
    { src: "/mc2.jpeg", alt: "White and red lighthouse" },
    { src: "/mc1.jpg", alt: "Historic building with garden" },
    { src: "/mc2.jpeg", alt: "Arched entrance with ornate details" },
    { src: "/mc1.jpg", alt: "City street with historic tower" },
    { src: "/mc2.jpeg", alt: "Colonnade building with columns" },
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
                src={image.src || "/mc1.jpg"}
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

