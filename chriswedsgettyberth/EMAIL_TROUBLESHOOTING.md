# Email Not Sending - Troubleshooting Guide

If guests aren't receiving RSVP confirmation emails, check these settings:

## Issue: "To Email" Field in EmailJS Template

The most common issue is that the "To Email" field in your EmailJS template is not set correctly.

### Fix Steps:

1. **Go to your EmailJS Dashboard**
2. **Navigate to Email Templates**
3. **Click on your template** (`template_taaomyq`)
4. **Go to the "Settings" or "Email Settings" tab**
5. **Check the "To Email" field**

### Correct Configuration:

**"To Email" field MUST be:**
```
{{to_email}}
```

**NOT:**
- ❌ A fixed email address (like `ernestgyedu3@gmail.com`)
- ❌ Empty
- ❌ `{{email}}` (wrong variable name)

### Other Template Settings:

- **From Name**: `Chris OB & Gettyberth` or `Wedding RSVP`
- **From Email**: Your wedding email (or leave default)
- **Reply To**: `{{reply_to}}` or `{{to_email}}`

## Additional Checks:

### 1. Check Browser Console
- Open browser DevTools (F12)
- Go to Console tab
- Submit the RSVP form
- Look for any error messages
- Should see: "Confirmation email sent successfully!"

### 2. Check EmailJS Dashboard
- Go to EmailJS Dashboard → Activity
- Check if emails are being sent
- Look for any error messages

### 3. Verify Email Service
- Go to Email Services
- Make sure `service_m2zuezc` is connected and active
- Test the service connection

### 4. Check Spam Folder
- Ask test users to check their spam/junk folder
- Emails might be filtered as spam

### 5. Verify Template Variables
Make sure your template uses these exact variable names:
- `{{to_name}}` - Guest's name
- `{{to_email}}` - Guest's email (MUST be in "To Email" field)
- `{{attendance}}` - Attendance status
- `{{dietary_notes}}` - Dietary notes
- `{{wedding_date}}` - Wedding date

## Quick Test:

1. Fill out the RSVP form with YOUR email
2. Submit it
3. Check your inbox (and spam folder)
4. Check browser console for errors
5. Check EmailJS Activity log

If you see errors in the console, share them and I can help fix the issue!
