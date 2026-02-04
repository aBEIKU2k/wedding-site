import Navigation from './components/Navigation'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import EventDetails from './components/EventDetails'
import Programme from './components/Programme'
import Gallery from './components/Gallery'
import WeddingParty from './components/WeddingParty'
import GiftRegistry from './components/GiftRegistry'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <OurStory />
      <EventDetails />
      <WeddingParty />
      <Programme />
      <Gallery />
      <GiftRegistry />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App
