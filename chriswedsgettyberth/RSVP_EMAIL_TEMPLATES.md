# RSVP Email Templates Setup

The RSVP form now uses **different email templates** for "Yes" and "No" responses.

## Current Configuration

- **Template ID for "Yes"**: `template_taaomyq` (already configured)
- **Template ID for "No"**: You need to create this in EmailJS

## Step 1: Create "No" Template in EmailJS

1. Go to your EmailJS Dashboard
2. Navigate to **Email Templates**
3. Click **Create New Template**
4. Name it: "RSVP - Cannot Attend"

## Step 2: Configure "No" Template

### Subject Line:
```
We'll Miss You - Chris OB & Gettyberth Wedding
```

### Content/Body:
```
Dear {{to_name}},

Thank you for letting us know that you won't be able to join us on our special day.

We understand and will miss having you there to celebrate with us. Your presence in our lives means the world to us, and we hope to celebrate with you another time.

Thank you for your kind response.

With love,
Chris OB & Gettyberth

P.S. We'd still love to hear from you and catch up soon!
```

### Template Variables:
- `{{to_name}}` - Guest's name
- `{{to_email}}` - Guest's email
- `{{attendance}}` - "No, I cannot attend"
- `{{dietary_notes}}` - Dietary notes (if any)
- `{{wedding_date}}` - "26th February 2026"

### Email Settings:
- **To Email**: `{{to_email}}`
- **From Name**: `Chris OB & Gettyberth`
- **From Email**: Your wedding email
- **Reply To**: `{{reply_to}}` or `{{to_email}}`

## Step 3: Get Template ID

1. After creating the template, copy the **Template ID**
2. It will look like: `template_xxxxxxx`
3. Share it with me or update it in `src/components/RSVP.jsx` at line 31

## Step 4: Update Code

Once you have the Template ID, update this line in `src/components/RSVP.jsx`:

```javascript
TEMPLATE_ID_NO: 'YOUR_NO_TEMPLATE_ID', // Replace with your actual Template ID
```

## Result

- **"Yes" responses** → Get the "RSVP Confirmation" email (excited, looking forward to celebrating)
- **"No" responses** → Get the "We'll Miss You" email (understanding, warm, still appreciative)

This provides a more personalized experience for your guests!
