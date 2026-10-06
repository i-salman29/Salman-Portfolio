# Salman I – Portfolio

A static portfolio site (HTML, CSS, vanilla JS). No build step, no dependencies.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000

## Deploy (free)
- **Netlify:** drag this folder onto https://app.netlify.com/drop
- **GitHub Pages:** push to a repo named `i-salman29.github.io`, then Settings > Pages > deploy from `main`
- **Vercel:** `vercel` in this folder, or import the repo

## Edit
- Text: `index.html`
- Colours and fonts: variables at the top of `css/style.css`
- Photo: replace `assets/salman.jpg` (keep a plain light background; the hero tints it)
- Resume: replace `assets/Salman_I_Resume.pdf`
- Project links: add `<a href="...">` inside each `.project` block once repos/demos are public
- Before going live, set absolute URLs for `og:image` in `index.html` (e.g. https://yourdomain.com/assets/og-image.jpg)

## Contact form
It opens the visitor's email app. For direct delivery, create a free Formspree form and set
`<form action="https://formspree.io/f/YOUR_ID" method="POST">`, then remove the submit handler in `js/main.js`.
