# EmailJS Setup Instructions

To enable email confirmation functionality for the RSVP form, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)

### For Gmail Users (Important - Fix Authentication Scopes):

If you're using Gmail and getting "insufficient authentication scopes" error:

**Option A: Use Gmail with App Password (Recommended)**
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords (https://myaccount.google.com/apppasswords)
4. Generate a new app password for "Mail"
5. In EmailJS, when setting up Gmail service, use:
   - Email: your Gmail address
   - Password: the app password (not your regular password)

**Option B: Use Gmail OAuth (Alternative)**
1. In EmailJS, when adding Gmail service, make sure to:
   - Grant all requested permissions
   - Allow access to "Send email on your behalf"
   - Complete the full OAuth flow
2. If you see scope errors, try disconnecting and reconnecting the service

**Option C: Use a Different Email Service (Easiest)**
- Use **Outlook/Hotmail** instead (simpler setup)
- Or use **SendGrid** (more reliable for production)
- Or use **SMTP** with any email provider

4. Note down your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{to_name}}` - Guest's name
   - `{{to_email}}` - Guest's email
   - `{{attendance}}` - Attendance status
   - `{{dietary_notes}}` - Dietary notes
   - `{{wedding_date}}` - Wedding date

4. Example template:
```
Subject: RSVP Confirmation - Chris OB & Gettyberth Wedding

Dear {{to_name}},

Thank you for your RSVP!

Your Response:
- Attendance: {{attendance}}
- Dietary Notes: {{dietary_notes}}

We look forward to celebrating with you on {{wedding_date}}!

Best regards,
Chris OB & Gettyberth
```

5. Note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update the RSVP Component

1. Open `src/components/RSVP.jsx`
2. Find the `EMAILJS_CONFIG` object (around line 25)
3. Replace the placeholder values:
   ```javascript
   const EMAILJS_CONFIG = {
     PUBLIC_KEY: 'your_actual_public_key_here',
     SERVICE_ID: 'your_actual_service_id_here',
     TEMPLATE_ID: 'your_actual_template_id_here',
   }
   ```

## Step 6: Test the Form

1. Fill out the RSVP form with a test email
2. Submit the form
3. Check the email inbox to confirm the email was sent

## Optional: Send Notification to Couple

You can also set up a second template to notify the couple when someone RSVPs:

1. Create a second email template
2. Add a second `emailjs.send()` call in the `handleSubmit` function
3. Use different template variables to send RSVP details to the couple's email

## Troubleshooting

- Make sure all IDs are correct (no extra spaces)
- Check browser console for any error messages
- Verify your email service is properly connected
- Ensure you haven't exceeded the free tier limit (200 emails/month)
