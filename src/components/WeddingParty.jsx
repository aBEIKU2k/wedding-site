import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const getInitials = (name = '') => {
  const parts = String(name).trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase() || 'WP'
}

const WeddingParty = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Add your 10 wedding party members here.
  // For images: put the files in /public and set image: '/your_file_name.jpg'
  const weddingParty = [
    {
      name: 'Anthea',
      description: '',
      image: '/wed10.jpeg'
    },
    {
      name: 'Hilda',
      description: '',
      image: '/wed11.jpeg'
    },
    {
      name: 'Henry',
      description: '',
      image: '/wed6.jpeg'
    },
    {
      name: 'Nurudeen',
      description: '',
      image: '/wed4.jpeg'
    },
    {
      name: 'Barbara',
      description: '',
      image: '/wed90.jpeg'
    },
    {
      name: 'Harold',
      description: '',
      image: '/wed20.jpeg'
    },
    {
      name: 'Ellis',
      description: '',
      image: '/wed1.jpeg'
    },
    {
      name: 'Jesse',
      description: '',
      image: '/wed3.jpeg'
    },
    {
      name: 'Priscilla',
      description: '',
      image: '/wed30.jpeg'
    },
    {
      name: 'Kelly',
      description: '',
      image: '/wed5.jpeg'
    }
  ]

  return (
    <section id="wedding-party" className="py-20 md:py-32 px-4 bg-white">
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
              The
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block ml-3"
            >
              Wedding Party
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-burgundy mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {weddingParty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-champagne rounded-2xl p-4 md:p-5 shadow-lg text-center group flex flex-col"
            >
              {/* Photo - full image, preserved aspect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.15 + 0.05, duration: 0.5 }}
                className="mx-auto mb-4 w-full aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-burgundy/15 bg-white/60 flex items-center justify-center"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="auto"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-burgundy/10">
                    <span className="font-sans text-burgundy text-xl md:text-2xl font-semibold">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Name */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                className="font-sans text-lg md:text-xl text-burgundy mb-2 font-semibold leading-tight"
                whileHover={{ scale: 1.05 }}
              >
                {member.name}
              </motion.h3>

              {/* Description */}
              {member.description ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  className="text-gray-600 text-sm"
                >
                  {member.description}
                </motion.p>
              ) : null}

              {/* Decorative Element */}
              <motion.div
                className="mt-4 flex justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
              >
                <motion.div
                  className="w-12 h-0.5 bg-burgundy"
                  whileHover={{ scaleX: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingParty
