# Premium Scroll-Driven Hero Animation

A modern, high-performance scroll animation project built with GSAP ScrollTrigger, featuring smooth transitions, parallax effects, and responsive design.

## Features

- **Smooth Initial Load Animation**: Letters stagger in with elegant timing
- **Scroll-Triggered Animations**: Main visual element rotates, scales, and moves based on scroll progress
- **Parallax Depth Effects**: Multiple layers move at different speeds for immersive depth
- **Performance Optimized**: Uses GPU-accelerated transforms for 60fps animations
- **Fully Responsive**: Beautiful on mobile, tablet, and desktop devices
- **Modern Dark Theme**: Clean, minimal design with gradient accents
- **Premium UI/UX**: Attention to detail with smooth transitions and micro-interactions

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with custom properties, gradients, and animations
- **JavaScript (ES6+)**: Clean, modular code
- **GSAP**: Industry-standard animation library
- **ScrollTrigger**: Scroll-based animation plugin

## Project Structure

```
project/
├── index.html          # Main HTML structure
├── style.css          # All styles and responsive design
├── main.js            # GSAP animations and interactions
└── README.md          # Documentation
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   The development server starts automatically in this environment. If running locally, use:
   ```bash
   npm run dev
   ```

3. **View in Browser**
   Open your browser to the provided local URL (typically `http://localhost:5173`)

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Animation Details

### Initial Load Sequence
1. Hero title fades in and moves up
2. Individual letters appear with stagger effect
3. Stats blocks animate in one by one
4. Main visual element scales in
5. Scroll indicator pulses

### Scroll-Based Animations
- **Main Visual**: Rotates 360°, scales up, and moves upward as you scroll
- **Hero Content**: Fades out when scrolling past the hero section
- **Feature Cards**: Fade and slide in when scrolling into view
- **Parallax Layers**: Background gradients move at different speeds
- **Section Titles**: Scale and fade in based on scroll position

### Performance Optimizations
- Uses `transform` properties (translate3d, scale, rotate) for GPU acceleration
- `will-change` hints for elements that will animate
- Scrubbing tied to scroll progress for smooth, native-feeling animations
- No layout reflows during animations
- Optimized for 60fps on modern devices

## Customization

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent-primary: #646cff;
  --accent-secondary: #535bf2;
}
```

### Animation Timings
Adjust GSAP timelines in `main.js`:
```javascript
timeline.to('.hero-title', {
  opacity: 1,
  y: 0,
  duration: 0.8,  // Change this
  delay: 0.3      // Change this
})
```

### Content
Update text and stats in `index.html`:
```html
<div class="stat-item">
  <div class="stat-number">120%</div>
  <div class="stat-label">Growth</div>
</div>
```

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains your production-ready files

3. Deploy the `dist/` folder to GitHub Pages or any static hosting service

### Other Platforms

This project works with:
- Netlify (drag and drop the `dist/` folder)
- Vercel (connect your repo)
- Cloudflare Pages
- Any static file hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Inspired by premium creative agency websites and scroll-driven storytelling.

Built with:
- [GSAP](https://greensock.com/gsap/) - Animation library

## License

Free to use for personal and commercial projects.

---

**Built with precision. Crafted for performance.**
