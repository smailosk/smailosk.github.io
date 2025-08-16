# Contact Form & Calendar Setup Guide

## 📧 Contact Form Setup

The contact form is ready to use with either **Formspree** or **EmailJS**. Here's how to set them up:

### Option 1: Formspree (Recommended - Easiest)

1. **Sign up at [formspree.io](https://formspree.io)** (free tier: 50 submissions/month)

2. **Create a new form:**
   - Click "New Form"
   - Name it "Portfolio Contact"
   - You'll get a form ID like `mxyzabcd`

3. **Update your code:**
   ```javascript
   // In components/Contact.tsx, line 34
   // Replace 'YOUR_FORM_ID' with your actual form ID
   const response = await fetch('https://formspree.io/f/mxyzabcd', {
   ```

4. **That's it!** Forms will be sent to your email automatically.

### Option 2: EmailJS (More customization)

1. **Sign up at [emailjs.com](https://emailjs.com)** (free tier: 200 emails/month)

2. **Set up EmailJS:**
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

4. **Update Contact.tsx:**
   ```javascript
   import emailjs from '@emailjs/browser';

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_PUBLIC_KEY'
       );
       setSubmitStatus('success');
       // ... rest of the code
     }
   }
   ```

## 📅 Calendar Booking Setup

### Option 1: Calendly (Recommended)

1. **Sign up at [calendly.com](https://calendly.com)** (free tier available)

2. **Create an event type:**
   - Name: "15-minute Discovery Call"
   - Duration: 15 minutes
   - Platform: Google Meet or Zoom

3. **Get your link:**
   - Example: `https://calendly.com/ismailamor/15min`

4. **Update your code:**
   ```javascript
   // In components/Contact.tsx, line 64
   const calendlyUrl = "https://calendly.com/ismailamor/15min"
   ```

### Option 2: Cal.com (Open Source Alternative)

1. **Sign up at [cal.com](https://cal.com)** (free tier available)

2. **Create an event:**
   - Similar setup to Calendly
   - Get your booking link

3. **Update the URL in Contact.tsx**

### Option 3: Google Calendar Appointment Slots

1. **In Google Calendar:**
   - Click "Create" → "Appointment slots"
   - Set up 15-minute slots
   - Get the booking page link

2. **Update the URL in Contact.tsx**

## 🔐 Environment Variables (Optional but Recommended)

Create a `.env.local` file in your project root:

```env
# Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Or EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Calendar
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/15min
```

Then update Contact.tsx:
```javascript
// For Formspree
const formspreeUrl = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

// For Calendly
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/ismailamor/15min";
```

## ✅ Testing

1. **Test the form:**
   - Fill out all fields
   - Submit the form
   - Check your email for the submission

2. **Test the calendar:**
   - Click "Schedule a Call"
   - Book a test appointment
   - Check your calendar

## 🎨 Customization

### Form Fields
You can add/remove fields in the form. Common additions:
- Phone number
- Preferred contact method
- Timeline/Deadline
- How they heard about you

### Styling
- Colors are controlled by Tailwind config
- Animations use Framer Motion
- Card styles are in `globals.css`

## 📱 Mobile Testing

Make sure to test on mobile devices:
- Form should be easy to fill
- Calendar link should open properly
- Error messages should be visible

## 🚀 Going Live

Before deploying:
1. ✅ Set up form service (Formspree/EmailJS)
2. ✅ Set up calendar booking (Calendly/Cal.com)
3. ✅ Test form submissions
4. ✅ Test calendar bookings
5. ✅ Add environment variables to your hosting platform (Vercel/Netlify)

---

Need help? Contact me at ismailamor93@gmail.com