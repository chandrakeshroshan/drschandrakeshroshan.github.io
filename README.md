# Dr. S Chand Rakesh Roshan - Personal Website

Professional academic website for Dr. S Chand Rakesh Roshan, Assistant Professor in Physics at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Basar.

🌐 **Live Site:** [https://chandrakeshroshan.github.io/](https://chandrakeshroshan.github.io/)

## About

This website showcases my research in computational materials science, publications, professional experience, and academic achievements. The site features:

- **Research Focus:** Computational materials science using Density Functional Theory (DFT)
- **Specialization:** Lattice thermal conductivity, phonon transport, and high-pressure physics
- **Publications:** 17+ peer-reviewed journal articles in high-impact journals
- **Books:** 4 published books on computational physics and physics education
- **Experience:** 15+ years in teaching and research

## Website Sections

- **Home:** Introduction, profile, and contact links
- **About:** Professional summary, research interests, and key achievements
- **Research:** Current research focus, methodologies, and collaborations
- **Publications:** Complete list of journal articles and books
- **Experience:** Professional roles, leadership positions, and initiatives
- **Education:** Academic qualifications and achievements
- **Awards:** Recognition, honors, and professional memberships
- **Contact:** Email, phone, address, and social media links

## Technology Stack

This is a static website built with:

- **HTML5:** Semantic markup and accessibility features
- **CSS3:** Modern responsive design with CSS Grid and Flexbox
- **JavaScript:** Interactive navigation and smooth scrolling
- **Font Awesome:** Icons
- **Google Fonts:** Roboto and Merriweather typography

## File Structure

```
/
├── index.html          # Main HTML file with all content
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── script.js       # Interactive features and navigation
├── images/
│   └── README.md       # Instructions for adding profile photo
├── files/
│   └── README.txt      # Placeholder for CV PDF
├── .github/
│   └── workflows/      # GitHub Actions for deployment
├── LICENSE.md          # MIT License
└── README.md           # This file
```

## Local Development

To view the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/chandrakeshroshan/drschandrakeshroshan.github.io.git
   cd drschandrakeshroshan.github.io
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## Customization

### Adding Your Profile Photo

1. Add your professional photo to the `images/` directory as `profile.jpg`
2. Recommended size: 500x500 pixels (square format)
3. The website will automatically use your photo

### Adding Your CV

1. Add your CV PDF to the `files/` directory as `cv.pdf`
2. The download button will automatically link to it

### Updating Colors

Colors are defined as CSS variables in `css/style.css`. Edit the `:root` section:

```css
:root {
    --primary-color: #2c5aa0;      /* Main blue color */
    --primary-dark: #1d3f7a;       /* Darker blue */
    --primary-light: #4a7bc8;      /* Lighter blue */
    /* ... other colors ... */
}
```

### Updating Content

All content is in `index.html`. Simply edit the HTML sections to update:

- Personal information
- Research interests
- Publications
- Experience
- Awards and achievements

### Adding Google Analytics

Uncomment and configure the Google Analytics code in `js/script.js`:

```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_GA_MEASUREMENT_ID');
```

## Deployment

This website is automatically deployed to GitHub Pages via GitHub Actions. Any push to the `main` branch triggers a deployment.

### Manual Deployment

If you need to deploy manually:

1. Ensure all changes are committed
2. Push to the `main` branch:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

3. GitHub Actions will automatically deploy to GitHub Pages

## Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 968px
- Hamburger menu for mobile devices
- Touch-friendly navigation

### Accessibility
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Skip to main content link
- Proper heading hierarchy

### Performance
- Minimal dependencies
- Optimized CSS and JavaScript
- Fast page load times
- Lazy loading ready

### SEO
- Meta tags for search engines
- Open Graph tags for social sharing
- Schema markup ready
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Professional Links

- **Email:** roshanscrd@gmail.com
- **LinkedIn:** [linkedin.com/in/chandrakesh-roshan](https://www.linkedin.com/in/chandrakesh-roshan)
- **Google Scholar:** [View Publications](https://scholar.google.com)
- **ORCID:** [0000-0002-xxxx-xxxx](https://orcid.org)
- **ResearchGate:** [View Profile](https://www.researchgate.net)

## Research Areas

- Computational Materials Science
- Density Functional Theory (DFT)
- Lattice Thermal Conductivity
- Phonon Transport Properties
- High-Pressure Physics
- Thermoelectric Materials
- Layered Materials and 2D Materials

## Publications Highlights

### Recent Publications (2023-2024)
- **Inorganic Chemistry** (2024) - Ultralow thermal conductivity in PbClF-type materials
- **ACS Applied Electronic Materials** (2023) - Atomic mass contrast effects on thermal conductivity
- **ACS Applied Energy Materials** (2023) - Hydrostatic pressure effects in Bi2O2S

### Books
- **Computational Simulations - A Primer** (2025)
- **Physics in Daily Life** (2025)
- **Physics Labs Insights (College Level)** (2018)

## Awards & Recognition

- Editorial Board Member - Nature Portfolio, Scientific Reports Journal (2025)
- Young S&T Leader - DST, Govt. of India (2025)
- Microsoft Innovative Educator Expert (2024-25, 2025-26)
- LinkedIn Top Voice (2025)
- NASA AMES Teacher Award (2012)

## Contact

**Dr. S Chand Rakesh Roshan**  
Assistant Professor in Physics  
Department of Physics  
Rajiv Gandhi University of Knowledge Technologies (RGUKT)  
Basar, Telangana - 504107, India

📧 Email: roshanscrd@gmail.com  
📱 Phone: +91-9908797832

## License

Copyright © 2025 Dr. S Chand Rakesh Roshan. All rights reserved.

This website's code is available under the MIT License. See [LICENSE.md](LICENSE.md) for details.

---

**Note:** This website was built from scratch to showcase academic research and professional achievements in a clean, modern, and accessible format.

*Last Updated: December 2025*
