# Chandrakesh Roshan - Personal Portfolio Website

A professional personal website showcasing my academic background, research experience, publications, and skills as a PhD researcher in Physics at IIT Madras.

## About

This website serves as my digital portfolio, highlighting my work in computational physics and ferroelectric phase transitions. It provides information about my education, research experience, publications, and ways to get in touch.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Navigation**: Smooth scrolling navigation with active section highlighting
- **Comprehensive Sections**:
  - Home: Introduction and quick links
  - About: Detailed biography and research interests
  - Education: Timeline of educational background with achievements
  - Research: Current and past research experience
  - Publications: List of publications and ongoing work
  - Skills: Technical skills categorized by type
  - Contact: Contact information and message form

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive elements and smooth animations
- **Font Awesome**: Icons

## Website Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript for interactions
├── assets/
│   └── images/         # Directory for images
└── README.md           # This file
```

## Deployment

This website is deployed using GitHub Pages with an automated deployment workflow. Any changes pushed to the `main` branch will automatically trigger a new deployment.

### GitHub Pages Setup

The site is configured to deploy automatically using GitHub Actions. The workflow file (`.github/workflows/deploy.yml`) handles the build and deployment process.

## Local Development

To run this website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/chandrakeshroshan/drschandrakeshroshan.github.io.git
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Navigate to `http://localhost:8000` in your browser

## Customization

### Adding a Profile Photo

Replace the profile placeholder by:

1. Add your photo to `assets/images/profile.jpg`
2. Update the HTML in `index.html`:
   ```html
   <div class="hero-image">
       <img src="assets/images/profile.jpg" alt="Chandrakesh Roshan">
   </div>
   ```

### Updating Content

All content can be edited directly in `index.html`:
- Personal information in the hero section
- Research interests in the about section
- Education and achievements in the education section
- Research experience in the research section
- Publications as they become available
- Skills and coursework

### Customizing Colors

Colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... other colors */
}
```

## Contact Information

- **Name**: Chandrakesh Roshan
- **Position**: PhD Researcher, Department of Physics, IIT Madras
- **Email**: chandrakesh.roshan@gmail.com / py22resch11002@iitm.ac.in
- **LinkedIn**: [linkedin.com/in/chandrakesh-roshan](https://linkedin.com/in/chandrakesh-roshan)
- **Phone**: +91-9931572698

## Research Focus

My research focuses on:
- Ferroelectric Phase Transitions
- Molecular Dynamics Simulations
- Condensed Matter Physics
- Computational Materials Science

## License

© 2024 Chandrakesh Roshan. All rights reserved.

## Acknowledgments

Design inspired by modern academic portfolio websites, built from scratch with a focus on clarity, professionalism, and accessibility.
