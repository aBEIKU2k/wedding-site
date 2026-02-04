# Alternative Email Solutions for RSVP Form

Here are several alternatives to EmailJS for sending confirmation emails:

## Option 1: Formspree (Easiest - Recommended)

**Pros:** No backend needed, free tier available, very simple setup

### Setup:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free (50 submissions/month on free tier)
3. Create a new form
4. Get your form endpoint URL
5. Update the RSVP component to use Formspree

### Implementation:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        attendance: formData.attendance,
        dietaryNotes: formData.dietaryNotes,
        _replyto: formData.email, // Auto-reply to guest
      }),
    })

    if (response.ok) {
      setSubmitted(true)
      // Formspree can send auto-replies via their dashboard
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## Option 2: Web3Forms (Free & Simple)

**Pros:** Completely free, no signup required for basic use, simple API

### Setup:
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email and get an access key
3. Verify your email
4. Use the access key in your form

### Implementation:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY',
        subject: 'RSVP Confirmation - Chris OB & Gettyberth Wedding',
        from_name: formData.name,
        email: formData.email,
        message: `
          Name: ${formData.name}
          Email: ${formData.email}
          Attendance: ${formData.attendance === 'yes' ? 'Yes, attending' : 'No, cannot attend'}
          Dietary Notes: ${formData.dietaryNotes || 'None'}
        `,
      }),
    })

    if (response.ok) {
      setSubmitted(true)
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## Option 3: FormSubmit (Simplest - No Account Needed)

**Pros:** No account required, completely free, works immediately

### Setup:
1. No signup needed!
2. Just use their endpoint with your email

### Implementation:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('attendance', formData.attendance)
    formDataToSend.append('dietaryNotes', formData.dietaryNotes)
    formDataToSend.append('_to', 'your-email@example.com') // Your email
    formDataToSend.append('_subject', 'RSVP Confirmation')

    const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
      method: 'POST',
      body: formDataToSend,
    })

    if (response.ok) {
      setSubmitted(true)
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## Option 4: Netlify Forms (If Hosting on Netlify)

**Pros:** Built into Netlify, free, automatic spam filtering

### Setup:
1. Add `netlify` attribute to your form
2. Deploy to Netlify
3. Forms are automatically handled

### Implementation:
```jsx
<form 
  name="rsvp" 
  method="POST" 
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="rsvp" />
  <input type="hidden" name="bot-field" />
  {/* rest of form */}
</form>
```

---

## Option 5: Backend API with Nodemailer (Most Control)

**Pros:** Full control, can send custom HTML emails, no third-party limits

### Setup:
1. Create a simple Node.js/Express backend
2. Use Nodemailer to send emails
3. Deploy backend (Vercel, Railway, Render, etc.)

### Backend Example:
```javascript
// server.js
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD, // Gmail App Password
  },
})

app.post('/api/rsvp', async (req, res) => {
  const { name, email, attendance, dietaryNotes } = req.body

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'RSVP Confirmation - Chris OB & Gettyberth Wedding',
    html: `
      <h2>Thank you for your RSVP, ${name}!</h2>
      <p>Your Response:</p>
      <ul>
        <li>Attendance: ${attendance === 'yes' ? 'Yes, attending' : 'No, cannot attend'}</li>
        <li>Dietary Notes: ${dietaryNotes || 'None'}</li>
      </ul>
      <p>We look forward to celebrating with you on 26th February 2026!</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(3000)
```

---

## Recommendation

For a wedding website, I recommend:
1. **Formspree** - Easiest setup, reliable, good free tier
2. **Web3Forms** - Free, simple, no account needed for basic use
3. **FormSubmit** - Simplest, works immediately

Would you like me to update the RSVP component to use one of these alternatives?
