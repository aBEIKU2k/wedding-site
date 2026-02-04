import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const RSVP = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    dietaryNotes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'at8Q9RkIF7E16XZxD',
    SERVICE_ID: 'service_wf5zkrk',
    // Owner notification templates (what only the couple sees)
    // Use your existing EmailJS template IDs here
    OWNER_TEMPLATE_ID_YES: 'template_9yfn4lr', // "RSVP Confirmation - Chris OB & Gettyberth Wedding" (edited for owners)
    OWNER_TEMPLATE_ID_NO: 'template_7x5rvms',  // "We'll Miss You - Chris OB & Gettyberth Wedding" (edited for owners)

    OWNER_EMAILS: ['ganointin@gmail.com'],
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Build attendance text once (used only for owner emails now)
        const attendanceText =
          formData.attendance === 'yes'
            ? 'Yes, I will be attending'
            : 'No, I cannot attend'

        // Special message for the couple depending on Yes / No
        const ownerMessage =
          formData.attendance === 'yes'
            ? `${formData.name} has CONFIRMED they are coming to the wedding.`
            : `${formData.name} has indicated they will NOT be able to attend the wedding.`

        // Send notification email to both owners so they can track RSVPs and see wishes
        const baseOwnerParams = {
          to_name: 'Chris OB & Gettyberth',
          from_name: 'RSVP Form',
          from_email: formData.email || 'no-reply@chriswedsgettyberth.com',
          attendance: attendanceText,
          guest_name: formData.name,
          guest_email: formData.email,
          dietary_notes: formData.dietaryNotes || 'None', // guest wishes / notes
          wedding_date: '26th February 2026',
          reply_to: formData.email,
          owner_message: ownerMessage,
        }

      // Choose a template just for owner notifications
      const ownerTemplateId =
        formData.attendance === 'yes'
          ? EMAILJS_CONFIG.OWNER_TEMPLATE_ID_YES
          : EMAILJS_CONFIG.OWNER_TEMPLATE_ID_NO

      // Send owner‑only notification emails (they see all RSVP details)
        for (const ownerEmail of EMAILJS_CONFIG.OWNER_EMAILS) {
          const ownerParams = {
            ...baseOwnerParams,
            to_email: ownerEmail,
          }

          await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
          ownerTemplateId,
            ownerParams,
            EMAILJS_CONFIG.PUBLIC_KEY
          )
        }

        console.log('Owner notification emails sent successfully!')

      // Here you could also send a notification email to the couple
      // using a different template

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', attendance: '', dietaryNotes: '' })
      }, 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      // Still show success message even if email fails
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', attendance: '', dietaryNotes: '' })
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-burgundy/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-burgundy/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-sans text-4xl md:text-5xl lg:text-6xl text-burgundy mb-5 md:mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, rotate: -20, y: -20 }}
              animate={isInView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0, rotate: -20, y: -20 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              R
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotate: -20, y: -20 }}
              animate={isInView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0, rotate: -20, y: -20 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              S
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotate: -20, y: -20 }}
              animate={isInView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0, rotate: -20, y: -20 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              V
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotate: -20, y: -20 }}
              animate={isInView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0, rotate: -20, y: -20 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              P
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-burgundy mx-auto mb-6 md:mb-7"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-600 text-lg md:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Please let us know if you'll be joining us on our special day
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-center py-16"
            >
              <motion.div 
                className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-burgundy/20 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.svg 
                  className="w-10 h-10 text-burgundy relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0, scale: 0 }}
                  animate={{ pathLength: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <motion.h3 
                className="font-sans text-3xl md:text-4xl text-burgundy mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Thank You!
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {"We've received your RSVP and look forward to celebrating with you!"}
              </motion.p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -50, rotateX: -15 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                whileHover={{ x: 5 }}
              >
                <motion.label 
                  htmlFor="name" 
                  className="block text-gray-800 font-semibold mb-3 text-lg relative"
                  animate={{
                    y: focusedField === 'name' ? [0, -2, 0] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    Name
                  </motion.span>
                  <motion.span 
                    className="text-burgundy ml-1"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    *
                  </motion.span>
                </motion.label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-all text-gray-800 placeholder-gray-400 relative z-10"
                    placeholder="Enter your full name"
                    whileFocus={{ 
                      borderColor: '#800020',
                      boxShadow: '0 0 0 3px rgba(128, 0, 32, 0.1)'
                    }}
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute inset-0 bg-burgundy/5 rounded-lg -z-0"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -50, rotateX: -15 }}
                transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
                whileHover={{ x: 5 }}
              >
                <motion.label 
                  htmlFor="email" 
                  className="block text-gray-800 font-semibold mb-3 text-lg relative"
                  animate={{
                    y: focusedField === 'email' ? [0, -2, 0] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    Email
                  </motion.span>
                  <motion.span 
                    className="text-burgundy ml-1"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    *
                  </motion.span>
                </motion.label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-all text-gray-800 placeholder-gray-400 relative z-10"
                    placeholder="Enter your email address"
                    whileFocus={{ 
                      borderColor: '#800020',
                      boxShadow: '0 0 0 3px rgba(128, 0, 32, 0.1)'
                    }}
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute inset-0 bg-burgundy/5 rounded-lg -z-0"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Attendance Field */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -50, rotateX: -15 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                whileHover={{ x: 5 }}
              >
                <motion.label 
                  className="block text-gray-800 font-semibold mb-4 text-lg"
                  animate={{
                    y: focusedField === 'attendance' ? [0, -2, 0] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    Will you be attending?
                  </motion.span>
                  <motion.span 
                    className="text-burgundy ml-1"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    *
                  </motion.span>
                </motion.label>
                <div className="grid grid-cols-2 gap-4">
                  <motion.label 
                    className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all relative overflow-hidden ${
                      formData.attendance === 'yes' 
                        ? 'border-burgundy bg-burgundy/5' 
                        : 'border-gray-200 hover:border-burgundy/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20, rotateY: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 20, rotateY: -90 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  >
                    {formData.attendance === 'yes' && (
                      <motion.div
                        className="absolute inset-0 bg-burgundy/10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      />
                    )}
                    <motion.input
                      type="radio"
                      name="attendance"
                      value="yes"
                      required
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('attendance')}
                      onBlur={() => setFocusedField(null)}
                      className="w-5 h-5 text-burgundy focus:ring-burgundy focus:ring-2 mr-3 relative z-10"
                      whileFocus={{ scale: 1.2 }}
                    />
                    <span className="text-gray-800 font-medium relative z-10">Yes, I'll be there!</span>
                    {formData.attendance === 'yes' && (
                      <motion.div
                        className="absolute top-1 right-1 w-3 h-3 bg-burgundy rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </motion.label>
                  <motion.label 
                    className={`flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all relative overflow-hidden ${
                      formData.attendance === 'no' 
                        ? 'border-burgundy bg-burgundy/5' 
                        : 'border-gray-200 hover:border-burgundy/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20, rotateY: 90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 20, rotateY: 90 }}
                    transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                  >
                    {formData.attendance === 'no' && (
                      <motion.div
                        className="absolute inset-0 bg-burgundy/10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      />
                    )}
                    <motion.input
                      type="radio"
                      name="attendance"
                      value="no"
                      required
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('attendance')}
                      onBlur={() => setFocusedField(null)}
                      className="w-5 h-5 text-burgundy focus:ring-burgundy focus:ring-2 mr-3 relative z-10"
                      whileFocus={{ scale: 1.2 }}
                    />
                    <span className="text-gray-800 font-medium relative z-10">Sorry, can't make it</span>
                    {formData.attendance === 'no' && (
                      <motion.div
                        className="absolute top-1 right-1 w-3 h-3 bg-burgundy rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </motion.label>
                </div>
              </motion.div>

              {/* Send us your wishes Field */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -50, rotateX: -15 }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                whileHover={{ x: 5 }}
              >
                <motion.label 
                  htmlFor="dietaryNotes" 
                  className="block text-gray-800 font-semibold mb-3 text-lg"
                  animate={{
                    y: focusedField === 'dietaryNotes' ? [0, -2, 0] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    Send us your wishes
                  </motion.span>
                </motion.label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <motion.textarea
                    id="dietaryNotes"
                    name="dietaryNotes"
                    value={formData.dietaryNotes}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('dietaryNotes')}
                    onBlur={() => setFocusedField(null)}
                    rows="5"
                    className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-burgundy transition-all resize-none text-gray-800 placeholder-gray-400 relative z-10"
                    placeholder="Share your wishes or blessings with us..."
                    whileFocus={{ 
                      borderColor: '#800020',
                      boxShadow: '0 0 0 3px rgba(128, 0, 32, 0.1)'
                    }}
                  />
                  {focusedField === 'dietaryNotes' && (
                    <motion.div
                      className="absolute inset-0 bg-burgundy/5 rounded-lg -z-0"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.03, y: -3 } : {}}
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                className={`w-full bg-burgundy text-white py-5 px-8 rounded-lg font-semibold text-lg hover:bg-deep-burgundy transition-all duration-200 shadow-lg relative overflow-hidden group ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -15 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </motion.svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Submit RSVP
                      </motion.span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        whileHover={{ x: 8, scale: 1.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </>
                  )}
                </span>
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default RSVP
