# Tech Stack Banner Component

## 🎨 Overview

A beautiful animated tech stack banner that displays below the header, showcasing your technology expertise with smooth scrolling logos.

---

## ✨ Features

### 1. **Auto-Scrolling Logos**
- Infinite horizontal scroll animation
- Seamless loop effect
- Pauses on hover for closer inspection

### 2. **Visual Effects**
- Grayscale logos by default
- Full color on hover
- Smooth scale animation on hover
- Gradient fade-out on edges for seamless look

### 3. **Responsive Design**
- Adapts to all screen sizes
- Optimized logo sizes for mobile
- Adjusted spacing for tablets

### 4. **Primary Color Theme**
- Uses your primary color (#4f7c82) for text
- Gradient background matching your design
- Subtle border effects

---

## 🛠️ Customization

### Change the Tech Stack

Edit `src/components/TechBanner.vue` and modify the `techLogos` array:

```javascript
const techLogos = ref([
  {
    name: 'Your Tech',
    src: 'https://path-to-your-logo.svg'
  },
  // Add more logos...
])
```

### Popular Tech Logo Sources

1. **DevIcons CDN** (Currently used):
   ```
   https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[tech]/[tech]-original.svg
   ```

2. **Simple Icons**:
   ```
   https://cdn.simpleicons.org/[techname]
   ```

3. **Custom Logos**: Place in `/public/` folder and reference as `/logo.svg`

### Modify Animation Speed

Change the animation duration in the CSS:

```css
animation: scroll 30s linear infinite; /* Change 30s to desired speed */
```
- Faster: Use lower values (e.g., `20s`)
- Slower: Use higher values (e.g., `40s`)

### Adjust Logo Size

Modify the logo height:

```css
.tech-logo {
  height: 50px; /* Change this value */
}
```

### Change Text

Update the banner text in the template:

```html
<p class="tech-banner-text">
  Your custom text here
</p>
```

---

## 🎯 Current Tech Stack Displayed

1. **Frontend**
   - Vue.js
   - React
   - JavaScript
   - TypeScript
   - HTML5
   - CSS3

2. **Backend**
   - Node.js
   - Python

3. **Database**
   - MongoDB
   - PostgreSQL

4. **Tools**
   - Git
   - Docker

---

## 🎨 Design Details

### Color Scheme
- **Text Color**: Primary (#4f7c82)
- **Background**: Gradient from light teal to white
- **Border**: Subtle primary color accent

### Animation
- **Duration**: 30 seconds for full loop
- **Effect**: Continuous infinite scroll
- **Interaction**: Pause on hover

### Hover Effects
- Logo scales to 110%
- Color transitions from grayscale to full color
- Smooth 0.3s transition

---

## 📱 Responsive Breakpoints

### Desktop (>768px)
- Logo height: 50px
- Gap between logos: 3rem
- Full text size

### Tablet (≤768px)
- Logo height: 40px
- Gap: 2rem
- Reduced text size

### Mobile (≤576px)
- Logo height: 35px
- Gap: 1.5rem
- Smallest text size

---

## 💡 Tips

1. **Use SVG logos** for crisp display at any size
2. **Keep logo count even** for smooth loop
3. **Match logo aspect ratios** for consistent appearance
4. **Test on mobile** to ensure readability
5. **Limit to 10-15 logos** for best visual impact

---

## 🔧 Advanced Customization

### Add Multiple Rows

Duplicate the `.tech-logos` div for multiple rows:

```html
<div class="tech-logos-wrapper">
  <div class="tech-logos">
    <!-- First row -->
  </div>
  <div class="tech-logos" style="animation-direction: reverse;">
    <!-- Second row (scrolls opposite direction) -->
  </div>
</div>
```

### Change Scroll Direction

Modify the animation:

```css
animation: scroll 30s linear infinite reverse;
```

### Remove Grayscale Effect

Delete or comment out:

```css
.tech-logo {
  /* filter: grayscale(100%); */
}
```

---

Enjoy your tech stack banner! 🚀

