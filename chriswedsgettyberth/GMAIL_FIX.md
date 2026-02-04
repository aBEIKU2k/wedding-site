# Fix Gmail API Authentication Scopes Error

If you're getting the error: **"Gmail_API: Request had insufficient authentication scopes"**, here's how to fix it:

## Quick Fix: Use App Password (Easiest Method)

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select app: **Mail**
3. Select device: **Other (Custom name)** → Type "EmailJS"
4. Click **Generate**
5. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update EmailJS Gmail Service
1. Go to your EmailJS dashboard
2. Navigate to **Email Services**
3. Click on your Gmail service (or create a new one)
4. Use these credentials:
   - **Email**: your Gmail address (e.g., `yourname@gmail.com`)
   - **Password**: Paste the app password you just generated (remove spaces)
5. Save the service

### Step 4: Test
1. Try submitting the RSVP form again
2. The error should be resolved

## Alternative: Use Outlook/Hotmail (No Scope Issues)

If Gmail continues to have issues, switch to Outlook:

1. In EmailJS dashboard, click **Add New Service**
2. Choose **Outlook**
3. Sign in with your Microsoft account
4. Grant permissions
5. Use the new Service ID in your code

## Alternative: Use SMTP (Most Reliable)

For production, consider using SMTP:

1. In EmailJS, choose **SMTP** service
2. Use your email provider's SMTP settings:
   - **Gmail SMTP**: smtp.gmail.com, Port 587
   - **Outlook SMTP**: smtp-mail.outlook.com, Port 587
3. Use your email and app password

## Still Having Issues?

1. **Disconnect and reconnect** the Gmail service in EmailJS
2. **Clear browser cache** and try again
3. **Check EmailJS status page** for service issues
4. **Contact EmailJS support** if the problem persists

## Recommended Setup for Production

For a wedding website, I recommend:
- **Outlook/Hotmail** - Easiest setup, no scope issues
- **SendGrid** - More reliable, better for high volume
- **SMTP** - Works with any email provider
