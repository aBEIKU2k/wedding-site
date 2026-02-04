import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const GiftRegistry = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copiedIndex, setCopiedIndex] = useState(null)

  const giftOptions = [
    {
      type: 'Mobile Money (MoMo)',
      name: 'Gettyberth Anointin',
      number: '0501106002',
    },
    {
      type: 'Bank Account',
      bankName: 'Ecobank',
      accountName: 'Gettyberth Anointin',
      accountNumber: '1441004717580',
    }
  ]

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="gifts" className="py-20 md:py-32 px-4" style={{ backgroundColor: '#5C0014' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.h2 
            className="font-sans text-4xl md:text-5xl lg:text-6xl mb-5 md:mb-6 text-white leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            Gift Registry
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-6 md:mb-7"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p 
            className="text-base md:text-lg max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your presence is the greatest gift, but if you wish to honor us with a monetary gift, 
            we would be deeply grateful.
          </motion.p>
        </motion.div>

        {/* Payment Cards */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {giftOptions.map((option, index) => {
            const isMoMo = option.type === 'Mobile Money (MoMo)'
            const copyText = isMoMo ? option.number : option.accountNumber

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-burgundy rounded-lg p-6 md:p-8 cursor-pointer"
                onClick={() => copyToClipboard(copyText, index)}
              >
                {/* Title */}
                <h3 
                  className="font-sans text-2xl md:text-3xl font-bold mb-6 text-white"
                >
                  {option.type}
                </h3>
                
                {/* Content */}
                <div className="space-y-4">
                  {isMoMo ? (
                    <>
                      <div>
                        <p className="text-sm mb-1 text-white/80">
                          Number:
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {option.number}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm mb-1 text-white/80">
                          Name:
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {option.name}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-sm mb-1 text-white/80">
                          Bank Name:
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {option.bankName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm mb-1 text-white/80">
                          Account Name:
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {option.accountName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm mb-1 text-white/80">
                          Account Number:
                        </p>
                        <p className="text-lg font-semibold font-mono text-white">
                          {option.accountNumber}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Copy Feedback */}
                {copiedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-center"
                  >
                    <p className="text-sm font-semibold text-white">
                      ✓ Copied!
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GiftRegistry
