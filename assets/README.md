# Assets Directory

This directory should contain the following assets for the app. **You have provided the app logo** - use it to create the required asset sizes below.

## Required Assets

### 1. icon.png (1024x1024px)
- **Source**: Your provided logo
- **Requirements**: 
  - Square format (1024x1024px)
  - Use your currency exchange logo (dollar/euro with arrows)
  - Ensure the logo is centered and fits well in a square
  - No transparency needed (can use the blue background from your logo)

### 2. adaptive-icon.png (1024x1024px)
- **Source**: Your provided logo
- **Requirements**:
  - Square format (1024x1024px)
  - Use the same logo design
  - Important: Keep the logo centered with safe area margins (about 20% padding on all sides)
  - Android will crop the edges, so keep important elements in the center
  - The blue background from your logo works perfectly

### 3. splash.png (1284x2778px recommended)
- **Source**: Your provided logo
- **Requirements**:
  - Portrait orientation
  - Use your logo centered on the blue background
  - Background color: Match the medium-blue from your logo (#4A90E2 or similar)
  - Logo should be large but not touch the edges
  - Can be the same design as your icon, just larger

### 4. favicon.png (48x48px)
- **Source**: Your provided logo
- **Requirements**:
  - Small version of your logo
  - Simplified version works best at this size
  - Can use just the currency symbols or a simplified version

## How to Prepare Your Logo

### Option 1: Using Online Tools
1. Go to [App Icon Generator](https://www.appicon.co/) or [Icon Kitchen](https://icon.kitchen/)
2. Upload your logo image
3. Generate all required sizes automatically
4. Download and place in this `assets/` folder

### Option 2: Manual Preparation
1. Open your logo in an image editor (Photoshop, GIMP, Canva, etc.)
2. Create square versions (1024x1024px) for `icon.png` and `adaptive-icon.png`
3. For `adaptive-icon.png`, add padding around the edges (keep logo in center 60% of the image)
4. Create a portrait splash screen (1284x2778px) with your logo centered
5. Create a small favicon (48x48px) - simplified version

## Logo Specifications

Based on your provided logo:
- **Design**: Currency exchange icon with dollar ($) and euro (€) symbols connected by arrows
- **Background Color**: Medium-blue (use this for splash screen background)
- **Style**: Flat design, modern, clean
- **Colors**: Blue background, white/gray currency symbols, white arrows

## File Placement

Place all generated files directly in the `assets/` folder:
```
assets/
  ├── icon.png
  ├── adaptive-icon.png
  ├── splash.png
  └── favicon.png
```

## Notes

- The app is configured to use these assets in `app.json`
- The splash screen background color is set to white, but you can change it to match your logo's blue in `app.json`
- For Android adaptive icon, the background color is set to white, but you can change it to match your logo's blue

