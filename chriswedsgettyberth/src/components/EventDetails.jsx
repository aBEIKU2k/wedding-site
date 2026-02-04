import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const EventDetails = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const venueAddress = "Tema Golf City Sasiewillis Rentals"
  const googleMapsUrl = "https://maps.app.goo.gl/vhxkKUYAoGR1Tn2F8"

  return (
    <section id="details" className="py-20 md:py-32 px-4 bg-white">
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
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              Event
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block ml-3"
            >
              Details
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-burgundy mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-champagne rounded-lg p-8 md:p-10 shadow-lg"
          >
            <motion.div 
              className="text-burgundy font-sans text-3xl md:text-4xl mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Ceremony
            </motion.div>
            <div className="space-y-4 text-gray-700">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <motion.svg 
                  className="w-6 h-6 text-burgundy" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
                <span className="text-lg font-semibold">10:30 AM - 1:00 PM</span>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <motion.svg 
                  className="w-6 h-6 text-burgundy mt-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </motion.svg>
                <div>
                  <span className="text-lg font-semibold block mb-1">Venue</span>
                  <span className="text-gray-600">{venueAddress}</span>
                </div>
              </motion.div>
            </div>
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 rounded-lg hover:bg-deep-burgundy transition-colors duration-200"
            >
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </motion.svg>
              Open in Google Maps
            </motion.a>
          </motion.div>

          {/* Dress Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: 15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: 15 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-champagne rounded-lg p-8 md:p-10 shadow-lg"
          >
            <motion.div 
              className="text-burgundy font-sans text-3xl md:text-4xl mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Dress Code
            </motion.div>
            <div className="space-y-4 text-gray-700">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ x: -5 }}
              >
                <motion.svg 
                  className="w-6 h-6 text-burgundy" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </motion.svg>
                <span className="text-lg font-semibold">Traditional Wear</span>
              </motion.div>
              <motion.div 
                className="mt-4 p-4 bg-burgundy/10 rounded-lg border border-burgundy/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(128, 0, 32, 0.4)' }}
              >
                <p className="text-gray-700">
                  <span className="font-semibold text-burgundy">Burgundy preferred</span> for a cohesive celebration
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
