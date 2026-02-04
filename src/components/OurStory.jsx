import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const OurStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const storyItems = [
    {
      year: '2017',
      title: 'The First Glance',
      description: 'It all began back in 2017, in a way that was more serendipitous than planned. Chris first spotted my picture on my cousin Dylan\'s phone and kept asking Dylan for my number. Dylan, of course, was not having it and kept refusing! But Chris was persistent, and each time he saw Dylan, he\'d ask again.',
      image: '/The First Glance.jpeg'
    },
    {
      year: '2017',
      title: 'The Meeting',
      description: 'Then, one day, as I was on my way home from class, Dylan called me over. Little did I know, Chris had already recognized me from the photos and eagerly asked Dylan to bring me over. When I approached, Chris politely asked for my number, and I, being open and easygoing, agreed. Little did I know that this simple exchange would lead to a beautiful journey.',
      image: '/img_4.JPEG'
    },
    {
      year: '2025',
      title: 'The Proposal',
      description: 'After seven years of growing together, loving intentionally, and building a life side by side, our journey took the most beautiful turn. Under the impression that we were attending a family wedding, I dressed up for what I thought was a simple celebration. Little did I know, every detail had already been thoughtfully planned. From the dress that was specially made for me to the destination I couldn\'t quite place, the surprise unfolded perfectly especially because I had no idea what was coming. When we arrived and I saw the words "Will You Marry Me?", time stood still. In that quiet, intimate moment, with just the two of us present, he asked the question that changed everything. And of course, I said yes. Just when I thought the surprises were over, our friends and loved ones appeared, turning an already perfect moment into an unforgettable celebration. We shared laughter, joy, and a beautiful dinner marking the moment our forever officially began.',
      image: '/img_7.jpeg'
    },
    {
      year: '2017 - 2026',
      title: 'Our Journey',
      description: 'After eight years of growing together, choosing each other, and building a love rooted in patience and intention, this moment marks the beginning of our forever. What started as a simple connection has blossomed into a lifelong commitment, and we are filled with gratitude as we step into this next chapter hand in hand, with love.',
      image: '/img_6.jpeg'
    }
  ]

  return (
    <section id="story" className="py-20 md:py-32 px-4 bg-champagne">
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
              Our
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block ml-3"
            >
              Story
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-burgundy mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <div ref={ref} className="space-y-16 md:space-y-24">
          {storyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.2 + 0.1, duration: 0.6 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-96 object-contain"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                />
              </motion.div>
              <motion.div 
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              >
                <motion.div 
                  className="text-burgundy font-sans text-2xl md:text-3xl mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                >
                  {item.year}
                </motion.div>
                <motion.h3 
                  className="font-sans text-3xl md:text-4xl text-gray-800 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurStory
