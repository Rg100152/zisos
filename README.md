<div align="center">

# 🦁 Zisos Zoological Park

**Where the wild meets wonder.**

A modern, fully responsive, multi-page website for a zoological park — built with plain HTML, CSS and vanilla JavaScript. No build step, no dependencies, deploy anywhere in seconds.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rg100152.github.io%2Fzisos-2f9c57?style=for-the-badge&logo=githubpages&logoColor=white)](https://rg100152.github.io/zisos/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[**View Live Site →**](https://rg100152.github.io/zisos/)

</div>

---

## 📖 About

**Zisos Zoological Park** is a complete, production-ready static website template for a zoo, wildlife park or animal sanctuary. It ships with nine fully-designed pages, an interactive ticket booking form with live price calculation, a filterable gallery, and a clean, nature-inspired design system — all without a single line of framework code.

## ✨ Features

- **9 handcrafted pages** — Home, About, Animals, Gallery, Events, Adopt & Donate, Do's & Don'ts, Contact and Ticket Booking.
- **Interactive ticket booking** — live total calculation across adult / child / senior rates, plus an instant booking reference on submit.
- **Filterable gallery** — filter photos by category (Animals, Nature, Heritage, Family) with no page reload.
- **Adopt & Donate form** — animal selection and donation support with client-side confirmation.
- **Fully responsive** — mobile-first layout with an off-canvas navigation menu.
- **Zero dependencies** — pure HTML, CSS and vanilla JS. No build tools, no `npm install`.
- **Fast & lightweight** — static files served straight from the edge; no server required.
- **SEO-friendly** — semantic markup, meta descriptions and accessible components.
- **Custom 404 page** — styled to match the brand and picked up automatically by GitHub Pages.

## 🗂️ Project Structure

```
zisos/
├── index.html          # Home page (hero, about, animals, gallery, events)
├── about.html          # Park history and mission
├── things.html         # Animals / "Things to Watch"
├── gallery.html        # Filterable photo gallery
├── events.html         # Upcoming events
├── adopt.html          # Adopt-an-animal & donation form
├── do-dont.html        # Visitor rules and guidelines
├── contact.html        # Contact details & message form
├── booking.html        # Ticket booking with live price calculator
├── 404.html            # Custom not-found page
├── css/
│   └── style.css       # Complete design system & responsive layout
├── js/
│   └── main.js         # Nav, booking calculator, gallery filter, forms
├── images/
│   ├── favicon.svg
│   └── gallery/        # Gallery artwork (SVG)
├── .github/
│   └── workflows/
│       └── deploy.yml  # Auto-deploy to GitHub Pages
├── .nojekyll           # Disable Jekyll processing
└── .gitignore
```

## 🚀 Getting Started

### Run locally

Because the site is 100% static, you can simply open `index.html` in your browser. For a more realistic preview, serve it with any static server:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080

# or Node.js
npx serve .
```

## 🌐 Deployment

This project is pre-configured for **GitHub Pages** via a GitHub Actions workflow. Every push to `main` deploys automatically.

1. Push your code to a GitHub repository.
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. That's it — the site goes live at `https://<username>.github.io/<repo>/`.

> **Alternative:** set **Source** to *Deploy from a branch* and choose `main` / `/ (root)`. No workflow needed.

### Customisation

| What to change | Where |
| --- | --- |
| Brand name, tagline, address, phone, email | Each HTML file's header/footer |
| Ticket prices | `booking.html` (`data-price` attributes) and the notice bar in `index.html` |
| Colours & theme | `:root` CSS variables in `css/style.css` |
| Gallery images | Replace files in `images/gallery/` |
| Animals, events, gallery captions | The relevant HTML page |

## 🎨 Design System

| Token | Value | Usage |
| --- | --- | --- |
| `--green-700` | `#1c5a34` | Primary brand colour |
| `--green-500` | `#2f9c57` | Accents & highlights |
| `--amber` | `#f4a41c` | Call-outs & notices |
| `--bg` | `#f6f9f6` | Page background |
| `--font` | Segoe UI / system UI | Typography |

## 🧭 Roadmap

- [ ] Dark mode toggle
- [ ] Real payment gateway integration
- [ ] Backend API for bookings (Node.js + SQLite)
- [ ] Multi-language support (English / Hindi)

## 🤝 Contributing

Contributions are welcome! Fork the repository, create a feature branch, and open a pull request.

```bash
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

## 📄 License

Released under the **MIT License** — free to use for personal and commercial projects.

## 📬 Contact

- **Live site:** [https://rg100152.github.io/zisos/](https://rg100152.github.io/zisos/)
- **GitHub:** [@rg100152](https://github.com/rg100152)

---

<div align="center">

Made with 💚 for wildlife lovers.

**Zisos Zoological Park — Where the wild meets wonder.**

</div>
