# How to Create "No" Template in EmailJS - Step by Step

## Step 1: Log into EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Log into your account

## Step 2: Navigate to Email Templates
1. In your EmailJS dashboard, look for **"Email Templates"** in the left sidebar
2. Click on **"Email Templates"**

## Step 3: Create New Template
1. Click the **"+ Create New Template"** or **"Add New Template"** button
2. You'll see a new template form

## Step 4: Configure Template Settings

### Basic Settings:
- **Template Name**: `RSVP - Cannot Attend` (or any name you prefer)

### Email Settings Tab:
1. Click on the **"Settings"** or **"Email Settings"** tab
2. Configure these fields:

**To Email:**
```
{{to_email}}
```
⚠️ **IMPORTANT**: This MUST be `{{to_email}}` (not a fixed email address)

**From Name:**
```
Chris OB & Gettyberth
```

**From Email:**
- Either check "Use Default Email Address" (uses your service default)
- OR uncheck it and enter your wedding email address

**Reply To:**
```
{{reply_to}}
```
or
```
{{to_email}}
```

## Step 5: Configure Content Tab

1. Click on the **"Content"** tab

### Subject Line:
```
We'll Miss You - Chris OB & Gettyberth Wedding
```

### Message Body:
```
Dear {{to_name}},

Thank you for letting us know that you won't be able to join us on our special day.

We understand and will miss having you there to celebrate with us. Your presence in our lives means the world to us, and we hope to celebrate with you another time.

Thank you for your kind response.

With love,
Chris OB & Gettyberth

P.S. We'd still love to hear from you and catch up soon!
```

## Step 6: Save Template
1. Click **"Save"** or **"Create Template"** button
2. The template will be created and you'll see it in your templates list

## Step 7: Copy Template ID
1. After saving, you'll see your template in the list
2. Click on the template to open it
3. Look for the **Template ID** (it will be visible in the URL or template details)
4. The Template ID will look like: `template_xxxxxxx` or just a string of characters
5. **Copy this Template ID**

## Step 8: Share Template ID
Once you have the Template ID, share it with me and I'll update the code, or you can update it yourself in `src/components/RSVP.jsx` at line 31:

```javascript
TEMPLATE_ID_NO: 'YOUR_NO_TEMPLATE_ID', // Replace with your actual Template ID
```

## Quick Checklist:
- ✅ Template name: "RSVP - Cannot Attend"
- ✅ To Email: `{{to_email}}`
- ✅ Subject: "We'll Miss You - Chris OB & Gettyberth Wedding"
- ✅ Body: Contains `{{to_name}}` and other variables
- ✅ Template ID copied

## Template Variables Available:
- `{{to_name}}` - Guest's name
- `{{to_email}}` - Guest's email (use in "To Email" field)
- `{{attendance}}` - "No, I cannot attend"
- `{{dietary_notes}}` - Dietary notes (if any)
- `{{wedding_date}}` - "26th February 2026"
- `{{reply_to}}` - Guest's email (for reply-to)

That's it! Once you have the Template ID, the RSVP form will automatically send different emails for "Yes" and "No" responses.
