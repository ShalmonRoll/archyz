# Archyz - Premium Snacks Website

A complete, professional, multi-page business website for **Archyz**, a premium snacks brand based in Bengaluru, India.

## 🎯 Overview

This website is built with modern web technologies and features a clean, minimalist design with professional color scheme and fully responsive layout. It helps customers learn about the business, browse the product portfolio, and easily contact the company.

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Navy Blue (#1e3a8a)
- **Accent Color**: Green (#10b981)
- **White**: #ffffff
- **Light Gray**: #f8fafc

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Key Design Elements
- ✅ Modern, clean, minimalist design
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Smooth scrolling navigation
- ✅ Subtle hover effects and animations
- ✅ Professional business aesthetics
- ✅ Accessibility features (ARIA labels, semantic HTML)
- ✅ SEO-friendly structure

## 📁 File Structure

```
archyz-website/
├── index.html          # Home page
├── about.html          # About us page
├── products.html       # Product portfolio page
├── contact.html        # Contact page
├── style.css           # Shared stylesheet
└── script.js           # Shared JavaScript
```

## 📄 Pages

### 1. Home Page (index.html)
- **Hero Section**: Eye-catching header with business tagline and "Learn More" CTA
- **About Preview**: Brief company introduction with image
- **Why Choose Us**: 3-column grid featuring Quality, Reliability, and Innovation
- **Featured Products**: Showcase of 3 bestselling products
- **Call-to-Action**: "Contact Us" button linking to contact page

### 2. About Page (about.html)
- **Our Story**: Comprehensive 200+ word company narrative
- **Mission & Vision**: Two-column layout with bullet points
- **Core Values**: 4 value cards (Quality, Customer Centricity, Sustainability, Innovation)
- **Team Section**: 4 team member profiles with photos, names, roles, and social links

### 3. Products Page (products.html)
- **Page Header**: Professional header with tagline
- **Product Filter**: Category buttons (All, Chips, Namkeen, Sweet Treats)
- **Product Grid**: 9 product cards with images and descriptions
- **Product Modals**: Click "View Details" to see full specifications
- **Call-to-Action**: "Request a Quote" button

### 4. Contact Page (contact.html)
- **Contact Information**: Address, phone, email, business hours
- **Contact Form**: Full validation with Name, Email, Phone, Subject, Message
- **Social Media Links**: LinkedIn, Twitter/X, Facebook
- **Google Maps Embed**: Location map for Koramangala, Bengaluru

## 🎯 Features

### Navigation Bar (All Pages)
- Sticky navigation that stays at top while scrolling
- Logo on left side
- Navigation links: Home, About, Products, Contact
- Social media icons on right
- Responsive hamburger menu for mobile devices

### Footer (All Pages)
- Business name and description
- Quick links to all pages
- Complete contact information
- Social media links
- Copyright notice: © 2025 Archyz

### Interactive Features

#### 1. Mobile Hamburger Menu
- Animated hamburger icon
- Smooth slide-in menu
- Auto-closes when link is clicked

#### 2. Product Filtering (Products Page)
```javascript
// Filter by: All Products, Chips, Namkeen, Sweet Treats
// Smooth fade animations when switching categories
```

#### 3. Product Modals
- Click any "View Details" button
- Modal popup with full product information
- Includes specifications, ingredients, shelf life
- "Request a Quote" CTA button
- Close via X button, overlay click, or ESC key

#### 4. Contact Form Validation
- Real-time validation for all fields
- Email format validation
- Phone number format validation
- Minimum character requirements
- Success message on submission
- Form reset after successful submission

#### 5. Smooth Scrolling
- Smooth scroll to sections via anchor links
- "Learn More" button scrolls to about section
- Adjusts for sticky navbar height

#### 6. Scroll-to-Top Button
- Appears after scrolling 300px
- Smooth scroll back to top
- Hover effects

#### 7. Scroll Animations
- Fade-in animations for cards and sections
- Intersection Observer API for performance
- Elements animate as they come into viewport

## 🚀 How to Use

### 1. Basic Setup
1. Download all files to a single folder
2. Ensure all 6 files are in the same directory
3. Open `index.html` in any modern web browser

### 2. Customization

#### Update Business Information
**Contact Details** (in all HTML files' footer):
```html
<!-- Update these in footer section -->
<span>YOUR ADDRESS HERE</span>
<a href="tel:+919876543210">YOUR PHONE</a>
<a href="mailto:your@email.com">YOUR EMAIL</a>
```

#### Change Colors
**In style.css** (lines 10-20):
```css
:root {
    --primary-color: #1e3a8a;  /* Change primary color */
    --accent-color: #10b981;   /* Change accent color */
}
```

#### Update Images
Replace image URLs in HTML files with your own images:
```html
<!-- Current format -->
<img src="https://images.unsplash.com/photo-..." alt="Description">

<!-- Replace with -->
<img src="images/your-image.jpg" alt="Description">
```

#### Modify Products
**In script.js** (lines 10-120):
```javascript
const productData = {
    'product-id': {
        title: 'Product Name',
        category: 'Category',
        image: 'image-url',
        description: 'Product description',
        specs: ['Spec 1', 'Spec 2']
    }
};
```

#### Update Social Media Links
Find and replace in all HTML files:
```html
<!-- Current -->
<a href="https://linkedin.com/company/archyz">

<!-- Replace with your handles -->
<a href="https://linkedin.com/company/YOUR-COMPANY">
<a href="https://twitter.com/YOUR-HANDLE">
<a href="https://facebook.com/YOUR-PAGE">
```

#### Change Google Maps Location
**In contact.html** (line ~150):
```html
<!-- Update the src URL with your location -->
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

To get your embed URL:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code

### 3. Adding New Products

**Step 1**: Add product data in `script.js`:
```javascript
'new-product-id': {
    title: 'New Product Name',
    category: 'chips', // or 'namkeen' or 'sweet'
    image: 'image-url',
    description: 'Description here',
    specs: ['Spec 1', 'Spec 2', 'Spec 3']
}
```

**Step 2**: Add product card in `products.html`:
```html
<article class="product-card" data-category="chips">
    <div class="product-image">
        <img src="IMAGE_URL" alt="Product Name">
    </div>
    <div class="product-content">
        <h3 class="product-title">Product Name</h3>
        <p class="product-description">Short description</p>
        <button class="btn btn-outline view-details-btn" data-product="new-product-id">
            View Details
        </button>
    </div>
</article>
```

### 4. Form Submission

The contact form currently shows a success message without actually sending data. To connect to a backend:

**Option 1**: Use a form service (FormSpree, Netlify Forms)
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2**: Connect to your backend API
```javascript
// In script.js, modify submitForm function
function submitForm(name, email, phone, subject, message) {
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
    })
    .then(response => response.json())
    .then(data => showSuccessMessage(name))
    .catch(error => console.error('Error:', error));
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: 767px and below (stacked layout, hamburger menu)
- **Small Mobile**: 480px and below (optimized spacing)

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions on all pages
- Alt text for all images
- Descriptive page titles
- Proper heading hierarchy (H1, H2, H3)
- Schema markup ready
- Fast loading times

## ♿ Accessibility Features

- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Proper color contrast ratios
- Screen reader friendly
- Alt text on all images

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📦 External Dependencies

### CDN Links (included in HTML):
1. **Google Fonts** - Inter font family
2. **Font Awesome 6.4.0** - Icons throughout the site

No npm installation required! Everything works out of the box.

## 🎓 Code Structure

### HTML
- Semantic HTML5 markup
- BEM-inspired class naming
- Accessible form elements
- SEO-optimized meta tags

### CSS
- CSS Custom Properties (variables)
- Mobile-first responsive design
- Flexbox and CSS Grid layouts
- Smooth animations and transitions
- Print-friendly styles

### JavaScript
- Vanilla JavaScript (no jQuery)
- ES6+ features
- Event delegation
- Intersection Observer API
- Form validation
- Modal management

## 📊 Performance Optimization

- Lazy loading images with `loading="lazy"`
- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- No unnecessary libraries or frameworks
- Fast-loading fonts with `preconnect`

## 🛠️ Troubleshooting

### Issue: Images not loading
**Solution**: Check image URLs are valid and accessible

### Issue: Hamburger menu not working
**Solution**: Ensure script.js is loaded correctly and file path is correct

### Issue: Form not validating
**Solution**: Check that all input IDs match those referenced in JavaScript

### Issue: Modal not opening
**Solution**: Verify product data-product attribute matches key in productData object

### Issue: Smooth scroll not working
**Solution**: Ensure HTML has `scroll-behavior: smooth` and anchor links are correct

## 📞 Support & Contact

For questions about this website:
- **Email**: hello@archyz.in
- **Phone**: +91 80 1234 5678
- **Location**: Koramangala, Bengaluru, Karnataka 560095, India

## 📄 License

This website template is created for Archyz. Feel free to customize as needed for your business.

---

**Built with ❤️ in Bengaluru, India**

© 2025 Archyz. All rights reserved.