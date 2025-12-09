# Dr. Chandrakesh Roshan - Personal Website

A clean, professional academic website showcasing research, publications, and professional profile.

## 🌐 Live Website

Visit the website at: [https://chandrakeshroshan.github.io/](https://chandrakeshroshan.github.io/)

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Layout**: Clean, professional academic-style design
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling between sections
- **Interactive Elements**: Hover effects, animations, and transitions
- **Sections**:
  - Home/About with profile information
  - Research interests and current projects
  - Publications list
  - CV download section
  - Contact information and social media links

## 🛠️ Technology Stack

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Interactive features and smooth scrolling
- **Font Awesome**: Professional icons
- **Google Fonts**: Roboto and Lora typefaces

## 📁 Project Structure

```
/
├── index.html                      # Main HTML file
├── css/
│   └── style.css                   # Stylesheet
├── js/
│   └── main.js                     # JavaScript functionality
├── images/
│   ├── profile.png                 # Profile photo
│   └── favicon.svg                 # Site favicon
├── Roshan_CV_Aug_NOV-2025.pdf     # CV document
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── LICENSE.md                      # License file
└── README.md                       # This file
```

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch triggers an automatic deployment.

### Deployment Workflow

1. Push changes to the `main` branch
2. GitHub Actions workflow runs automatically
3. Static files are uploaded to GitHub Pages
4. Website is live at the GitHub Pages URL

## 🎯 Customization Guide

### Update Profile Information

Edit `index.html` and modify:
- Profile name and title
- Bio text
- Contact information
- Social media links

### Customize Colors

Edit `css/style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #1e3a5f;
    --accent-color: #4a90e2;
    /* ... other colors ... */
}
```

### Add Publications

Edit the Publications section in `index.html` and add publication cards with the appropriate format.

### Update Research Content

Modify the Research section in `index.html` to reflect your research interests and current projects.

### Replace Profile Photo

Replace `images/profile.png` with your own photo (recommended: square image, at least 500x500px).

### Update CV

Replace `Roshan_CV_Aug_NOV-2025.pdf` with your updated CV. Note: If you change the filename, you'll also need to update the link in `index.html` (search for the filename in the CV section).

## 🔧 Local Development

To preview the website locally:

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

This is a personal website, but if you find any bugs or have suggestions for improvements, feel free to open an issue.

## 📧 Contact

For any questions or inquiries, please visit the Contact section on the website.

---

Built with ❤️ using HTML, CSS, and JavaScript
