# Portfolio Template

This is a portfolio template that you can customize with your own information. It's a vanilla HTML/CSS/JavaScript project with no dependencies required.

## About This Project

This is a modern, responsive portfolio website template built with vanilla HTML, CSS, and JavaScript. It features:

- Clean and professional design
- Responsive layout that works on all devices
- Smooth animations and transitions
- Project showcase section
- Contact information
- Downloadable resume
- Modern UI/UX design

## How to Use

### Customization
1. **Change Personal Information**: Edit the HTML files to replace placeholder content with your own:
   - Name and title
   - About section
   - Skills and experience
   - Project details
   - Contact information

2. **Update Images**: Replace the profile images in the `assets/images/` folder with your own photos

3. **Modify Styling**: Customize the CSS files in the `css/` folder to match your preferred color scheme and design

4. **Add Projects**: Update the `js/projects.js` file to showcase your own projects

5. **Update Resume**: Replace `assets/resume.pdf` with your own resume

6. **Setup Contact Form**: Configure the contact form to collect user messages:
   - **Option 1 (Recommended)**: Use Formspree (free tier available)
     - Go to [formspree.io](https://formspree.io) and create an account
     - Create a new form and get your form ID
     - Replace `YOUR_FORM_ID` in `index.html` line 520 with your actual form ID
   - **Option 2**: Use EmailJS for direct email sending
   - **Option 3**: Set up a backend server (Node.js, PHP, etc.)
   - **Option 4**: Use Netlify Forms if hosting on Netlify

### Running the Project

To run this portfolio locally, you can use any of these methods:

#### Method 1: Using npx serve (Recommended)
```bash
npx serve
```
This will start a local server and provide you with a URL to view your portfolio.

#### Method 2: Using Python (if installed)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Method 3: Using Node.js http-server (if installed globally)
```bash
npx http-server
```

#### Method 4: Direct File Opening
Simply open `index.html` in your web browser (though some features may not work properly due to CORS restrictions).

## Project Structure

```
Portfolio/
├── assets/
│   ├── icons/          # Favicon and logo
│   ├── images/         # Profile and project images
│   └── resume.pdf      # Your resume
├── css/
│   ├── style.css       # Main stylesheet
│   ├── responsive.css  # Responsive design
│   └── animation.css   # Animations and transitions
├── js/
│   ├── main.js         # Main JavaScript functionality
│   ├── projects.js     # Project data and display logic
│   └── utils.js        # Utility functions
└── index.html          # Main HTML file
```

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth scroll animations and transitions
- **Project Showcase**: Dedicated section to display your projects
- **Contact Integration**: Easy-to-use contact form
- **Download Resume**: Direct download link for your resume
- **SEO Optimized**: Proper meta tags and structure for search engines

## No Dependencies Required

This is a vanilla project with no external dependencies. Everything is built with:
- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This template is free to use and modify for personal and commercial projects.

---

**Note**: Remember to replace all placeholder content with your own information before deploying your portfolio!
