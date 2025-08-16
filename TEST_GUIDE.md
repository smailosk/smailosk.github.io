# Portfolio Test Guide

Your portfolio is now running at: **http://localhost:3000**

## Features to Test:

### 1. Dark/Light Mode Toggle
- Click the sun/moon icon in the navbar (top right)
- Watch all elements smoothly transition between themes
- Check that your preference is saved (refresh the page to verify)

### 2. Animations & Effects
- **Hero Section**: 
  - Typing animation for job titles
  - Floating profile image with animated border
  - Particle background effects
- **Custom Cursor** (desktop only):
  - Move your mouse around to see the custom cursor
  - Hover over links/buttons to see the cursor expand
- **3D Card Effects**:
  - Hover over project cards to see 3D transform
  - Hover over skill cards for glow effects
- **Scroll Animations**:
  - Scroll down to see sections fade in
  - Notice the navbar becomes glassy on scroll

### 3. Interactive Elements
- **Navigation**: Click navbar links for smooth scroll
- **Mobile Menu**: Resize window to mobile size and test hamburger menu
- **Social Links**: Test GitHub, LinkedIn, Email links
- **Contact Form**: Fill and submit (needs Formspree setup)
- **Calendar Booking**: Test Calendly integration button

### 4. Responsive Design
Test at different screen sizes:
- **Desktop**: 1920px, 1440px, 1024px
- **Tablet**: 768px
- **Mobile**: 375px, 390px, 428px

### 5. Content Sections
Verify all sections display correctly:
- Hero with your profile image
- About section with stats cards
- Experience timeline (Famedly, It-Objects, Fraunhofer)
- Projects showcase with live/GitHub links
- Skills grid with categories
- Contact form with calendar booking
- Footer with copyright and links

## Known Issues to Check:
- If page appears blank, check browser console (F12)
- If images don't load, verify /public/profile.png exists
- If animations lag, test in different browsers

## Browser Testing:
Test in:
- Chrome/Edge
- Firefox
- Safari (if on Mac)
- Mobile browsers

## Performance Check:
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

## Next Steps:
Once testing is complete and you're satisfied:
1. Fix any issues found
2. Commit changes to git
3. Push to GitHub
4. Deploy to GitHub Pages

The portfolio should be fully functional with all animations and theme switching working smoothly!