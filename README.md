# Dr. Chandrakesh Roshan - Personal Academic Website

A clean, professional single-page portfolio website for Dr. S Chand Rakesh Roshan, Assistant Professor in Physics at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Basar.

## About

This website showcases Dr. Roshan's academic profile, research work, publications, teaching experience, and professional accomplishments in computational physics and materials science.

## Website Structure

The website is a single-page design with smooth scrolling navigation between sections:

- **About** - Professional bio, current position, and research interests
- **Research** - Research areas, methodologies, and key contributions
- **Publications** - Journal articles and books
- **Teaching** - Academic positions, roles, and certifications
- **Contact** - Email, office address, and professional profiles

## Features

✨ **Clean & Professional Design**
- Modern, academic layout with professional color scheme
- Responsive design that works on all devices
- Smooth scrolling navigation
- Sticky header with active link indicators

🎨 **Visual Elements**
- Professional typography using Inter and Merriweather fonts
- Card-based layouts for content organization
- Hover effects and subtle animations
- Mobile-friendly hamburger menu

📱 **Responsive Design**
- Desktop-optimized (1200px+ screens)
- Tablet-friendly (768px-1200px)
- Mobile-optimized (< 768px)

♿ **Accessibility**
- Semantic HTML5 structure
- Proper heading hierarchy
- High contrast colors for readability
- Keyboard navigation support

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Smooth interactions and animations
- **Google Fonts** - Inter and Merriweather typefaces

## File Structure

```
.
├── index.html          # Main HTML file with all content
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript for interactions
├── README.md           # Documentation (this file)
└── LICENSE.md          # MIT License
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/chandrakeshroshan/drschandrakeshroshan.github.io.git
cd drschandrakeshroshan.github.io
```

2. Open in browser:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or simply open index.html in your browser
open index.html
```

3. Visit `http://localhost:8000` in your browser

## Customization

### Colors
Edit the CSS variables in `styles.css` to customize the color scheme:
```css
:root {
    --primary-color: #1a365d;
    --secondary-color: #2c5282;
    --accent-color: #3182ce;
    /* ... */
}
```

### Content
All content is directly in `index.html`. To update:
1. Open `index.html` in a text editor
2. Find the relevant section (About, Research, Publications, etc.)
3. Edit the text content
4. Save and refresh your browser

### Styling
Modify `styles.css` to adjust:
- Layout and spacing
- Typography
- Colors and themes
- Responsive breakpoints

## Deployment

### GitHub Pages (Automatic)
This repository is configured to deploy automatically to GitHub Pages:
1. Push changes to the main branch
2. GitHub Actions will build and deploy
3. Visit: https://chandrakeshroshan.github.io/

### Manual Deployment
You can host this website on any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

Simply upload the HTML, CSS, and JS files to your hosting provider.
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

## Performance

- Minimal dependencies (no frameworks)
- Optimized CSS and JavaScript
- Fast loading times
- Efficient animations

## SEO

The website includes:
- Proper meta tags for description and keywords
- Semantic HTML structure
- Clean URLs
- Mobile-friendly design
- Fast loading speed

## Professional Information

**Dr. S Chand Rakesh Roshan**
- **Position**: Assistant Professor in Physics
- **Institution**: Rajiv Gandhi University of Knowledge Technologies, Basar
- **Email**: roshanscrd@gmail.com
- **LinkedIn**: [linkedin.com/in/chandrakeshroshan](https://www.linkedin.com/in/chandrakeshroshan/)
- **ORCID**: [0000-0002-6822-7818](https://orcid.org/0000-0002-6822-7818)

## Research Interests

- Computational Physics
- Lattice Thermal Conductivity
- Materials Science
- DFT Calculations
- Educational Technology

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Updates

To update your information:
1. Edit `index.html` directly
2. Commit changes: `git commit -am "Update [section] information"`
3. Push to GitHub: `git push origin main`
4. Changes will be live in a few minutes

## Credits

- Design inspired by modern academic portfolio websites
- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: Inline SVG icons

## Contact

For questions or issues with this website, please contact:
- Email: roshanscrd@gmail.com
- Open an issue on GitHub: [Issues Page](https://github.com/chandrakeshroshan/drschandrakeshroshan.github.io/issues)

- **Name**: Chandrakesh Roshan
- **Position**: PhD Researcher, Department of Physics, IIT Madras
- **Email**: chandrakesh.roshan@gmail.com / py22resch11002@iitm.ac.in
- **LinkedIn**: [linkedin.com/in/chandrakesh-roshan](https://linkedin.com/in/chandrakesh-roshan)
- **Phone**: +91-9931572698

© 2025 Dr. S Chand Rakesh Roshan. All rights reserved.

Built with ❤️ for advancing physics education and research
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

© 2024 Chandrakesh Roshan. All rights reserved.

**Note:** This website was built from scratch to showcase academic research and professional achievements in a clean, modern, and accessible format.

*Last Updated: December 2025*
