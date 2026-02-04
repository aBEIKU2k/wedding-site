import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans text-3xl md:text-4xl mb-4">
              Chris OB & Gettyberth
            </h3>
            <p className="text-white/80 mb-2 font-sans text-lg">
              26th February 2026
            </p>
            <p className="text-white/60 text-sm mb-8 max-w-2xl mx-auto">
              Thank you for being part of our special day. We look forward to celebrating with you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border-t border-white/20 pt-8 mt-8"
          >
            <p className="text-white/60 text-sm">
            © 2026 Chris OB & Gettyberth. Designed with care by FAJ TECHNOLOGIES.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
