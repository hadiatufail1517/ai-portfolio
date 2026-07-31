# Raheel Ahmad - AI Portfolio

A clean, responsive, and minimalist landing page representing the launch of Raheel Ahmad's AI Portfolio.

## Features
- **Minimalist Aesthetic:** Focuses on typography and spacious alignment.
- **Responsive Layout:** Optimized using CSS Grid/Flexbox and dynamic font sizing (`clamp()`) to scale beautifully from mobile devices to high-resolution desktop monitors.
- **Extensible Structure:** Set up with standard directories (`css/`, `js/`) and modular styling (CSS Custom Properties) for smooth expansion.
- **SEO & Social Optimization:** Complete with meta descriptions, semantic HTML elements, and OpenGraph/Twitter social media preview structures.

## File Structure
```text
my-ai-portfolio/
├── css/
│   └── style.css   # Clean resets, design tokens, layouts, and typography
├── js/
│   └── main.js    # Future JavaScript logic entry point
├── index.html      # Main page structure with SEO definitions
└── README.md       # Project documentation (this file)
```

## Running Locally
Since this is a standard frontend layout, you can view the page locally by opening `index.html` directly in any web browser, or via a simple local development server:

### Option 1: Python HTTP Server (recommended)
Run the following command in your terminal inside the project directory:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 2: Live Server (VS Code Extension)
Right-click `index.html` and select **Open with Live Server**.

## Future Expansion
This project is built to grow alongside your portfolio:
1. **Adding Projects:** Define a JSON array of projects in `js/main.js` and render cards dynamically in `index.html`.
2. **Framework Migration:** The semantic structure and CSS design tokens map directly to layout systems in modern frameworks (Vite, Next.js, etc.).
3. **Themes:** Extend the CSS Custom Properties (`:root`) with a `[data-theme="dark"]` selector to support dark mode.
