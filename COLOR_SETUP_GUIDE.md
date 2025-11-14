# Color Scheme Setup Guide

This portfolio website uses environment variables to control the color scheme.

## Quick Setup

Create a `.env` file in the root directory of your project with the following content:

```
VITE_PRIMARY_COLOR=#4f7c82
VITE_SECONDARY_COLOR=#ffffff
```

## How It Works

### 1. Environment Variables
- `VITE_PRIMARY_COLOR` - The main color used throughout the site (#4f7c82 - a teal/blue-green)
- `VITE_SECONDARY_COLOR` - The secondary color, typically white (#ffffff)

### 2. CSS Variables
The colors are automatically applied through CSS custom properties defined in `src/assets/base.css`:
- `--primary-color`
- `--secondary-color`
- `--bs-primary` (Bootstrap override)

### 3. Bootstrap Override
Bootstrap's primary color is overridden in `src/assets/bootstrap-overrides.css` to use the custom color scheme.

### 4. Color Configuration
The `src/config/colors.js` file reads from environment variables and provides fallback values.

## Applying the Colors

All Bootstrap components using the `primary` class will automatically use your custom colors:
- Buttons: `btn-primary`, `btn-outline-primary`
- Text: `text-primary`
- Backgrounds: `bg-primary`
- Badges: `badge bg-primary`
- Forms: Focus states automatically use the primary color
- Progress bars: Use the primary color
- Links: Hover states use the primary color

## Changing Colors

To change the color scheme:

1. Update the `.env` file with new hex colors
2. Restart the development server (`npm run dev`)
3. The entire site will update automatically

## Example Alternative Color Schemes

### Ocean Blue
```
VITE_PRIMARY_COLOR=#0077be
VITE_SECONDARY_COLOR=#ffffff
```

### Forest Green
```
VITE_PRIMARY_COLOR=#2d5016
VITE_SECONDARY_COLOR=#ffffff
```

### Sunset Orange
```
VITE_PRIMARY_COLOR=#ff6b35
VITE_SECONDARY_COLOR=#ffffff
```

## Important Notes

- Always use hex color format (#RRGGBB)
- Restart the dev server after changing `.env` values
- The `.env` file should not be committed to git (it's in `.gitignore`)
- For production, set these environment variables in your hosting platform

