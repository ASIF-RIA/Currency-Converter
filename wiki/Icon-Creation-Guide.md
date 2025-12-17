# Icon Creation Guide

This document specifies the design requirements and creation process for Currency Converter application assets.

## Design Specifications

### Theme
- Colors: Purple (#6200ee) to Blue (#4A90E2) gradient
- Style: Modern, minimalist, professional
- Symbols: Currency symbols ($, €, £, ¥)
- Category: Finance/Utility

## Required Assets

### 1. Main App Icon (icon.png)
- Size: 1024 x 1024 pixels
- Format: PNG (24-bit, RGB)
- Usage: iOS app icon, Play Store listing
- Design: Full icon with currency symbols on gradient background

### 2. Adaptive Icon (adaptive-icon.png)
- Size: 1024 x 1024 pixels
- Format: PNG with transparency
- Safe Zone: Center 66% (676 x 676 pixels)
- Usage: Android adaptive icons
- Note: Background color (#4A90E2) defined in app.json

### 3. Splash Screen (splash.png)
- Size: 1284 x 2778 pixels (minimum)
- Format: PNG
- Usage: App launch screen
- Design: Logo centered on gradient background

### 4. Favicon (favicon.png)
- Size: 48 x 48 pixels
- Format: PNG
- Usage: Web app icon

## Creation Methods

### Option 1: Design Software (Figma/Canva)

1. Create a canvas of 1024x1024 pixels
2. Apply linear gradient background (#6200ee to #4A90E2)
3. Add white currency symbols in the center
4. Export as PNG

### Option 2: SVG Conversion

1. Create SVG files using vector software
2. Convert to PNG using standard tools
3. Ensure correct dimensions

## Quality Checklist

Before submission, verify:

- Main Icon: 1024x1024 px, no transparency
- Adaptive Icon: 1024x1024 px, transparent background, content in safe zone
- Splash Screen: Correct resolution, centered content
- File Names: Must match app.json configuration exactly

## File Locations

Place all generated assets in the assets/ directory:

- assets/icon.png
- assets/adaptive-icon.png
- assets/splash.png
- assets/favicon.png
