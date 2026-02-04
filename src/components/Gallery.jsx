import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, src: '/img_2.JPEG', alt: 'Wedding Photo 1' },
    { id: 2, src: '/img_4.JPEG', alt: 'Wedding Photo 2' },
    { id: 3, src: '/img_5.jpeg', alt: 'Wedding Photo 3' },
    { id: 4, src: '/img_6.jpeg', alt: 'Wedding Photo 4' },
    { id: 5, src: '/img_7.jpeg', alt: 'Wedding Photo 5' },
    { id: 6, src: '/img_8.jpeg', alt: 'Wedding Photo 6' },
    { id: 7, src: '/img_9.jpeg', alt: 'Wedding Photo 7' },
    { id: 8, src: '/img_10.jpeg', alt: 'Wedding Photo 8' },
    { id: 9, src: '/img_12.jpeg', alt: 'Wedding Photo 9' },
    { id: 10, src: '/img_13.jpeg', alt: 'Wedding Photo 10' },
    { id: 11, src: '/img_14.jpeg', alt: 'Wedding Photo 11' },
    { id: 12, src: '/img_15.jpeg', alt: 'Wedding Photo 12' },
    { id: 13, src: '/img_16.jpg', alt: 'Wedding Photo 13' },
    { id: 14, src: '/img_17.jpeg', alt: 'Wedding Photo 14' },
    { id: 15, src: '/img_18.jpeg', alt: 'Wedding Photo 15' },
    { id: 16, src: '/img_19.jpeg', alt: 'Wedding Photo 16' },
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const currentIndex = images.findIndex(img => img.id === selectedImage.id)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }
    setSelectedImage(images[newIndex])
  }

  return (
    <>
      <section id="gallery" className="py-20 md:py-32 px-4 bg-champagne">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="font-sans text-4xl md:text-5xl lg:text-6xl text-burgundy mb-4 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              Gallery
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-burgundy mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -8, zIndex: 10 }}
                className="cursor-pointer group relative overflow-hidden"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-80 object-contain transition-all duration-500 group-hover:scale-110"
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index < 6 ? "high" : "auto"}
                />
                {/* Elegant overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-burgundy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
