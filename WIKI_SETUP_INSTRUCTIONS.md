# How to Set Up GitHub Wiki

Your wiki content has been created in the wiki/ folder. Follow these instructions to publish it to GitHub.

## Method 1: Using GitHub Web Interface

This is the recommended method for first-time wiki setup.

1. Enable Wiki on your repository:
   - Navigate to https://github.com/ASIF-RIA/Currency-Converter/settings
   - Locate the "Features" section
   - Enable the "Wikis" checkbox

2. Create the initial wiki page:
   - Navigate to https://github.com/ASIF-RIA/Currency-Converter/wiki
   - Click "Create the first page"
   - Title: "Home"
   - Copy and paste content from wiki/Home.md
   - Click "Save Page"

3. Add remaining pages:
   - Click "New Page" for each additional page
   - Copy content from corresponding files in the wiki/ folder
   - Use the filename (without .md extension) as the page title

## Method 2: Using Git

This method is faster for bulk uploads.

### Step 1: Clone the Wiki Repository

```powershell
cd "C:\Users\Asif\OneDrive\Desktop"
git clone https://github.com/ASIF-RIA/Currency-Converter.wiki.git
cd Currency-Converter.wiki
```

### Step 2: Copy Wiki Files

```powershell
Copy-Item -Path "..\Currency converter\wiki\*" -Destination "." -Recurse
```

### Step 3: Push to GitHub

```powershell
git add .
git commit -m "Add comprehensive wiki documentation"
git push origin master
```

## Wiki Pages Available

The following pages have been created:

- Home.md - Wiki homepage with navigation
- Getting-Started.md - Development setup guide
- Features.md - Complete features list
- API-Documentation.md - API integration guide
- Project-Structure.md - Code organization
- Google-Play-Submission.md - Publishing guide
- Icon-Creation-Guide.md - Asset creation
- Build-Guide.md - Build instructions
- Privacy-Policy.md - Privacy policy
- Store-Listing-Content.md - Store content

## Verification

After pushing, verify your wiki at:
https://github.com/ASIF-RIA/Currency-Converter/wiki

## Troubleshooting

**Wiki tab not visible:**
- Enable wikis in repository settings first

**Unable to push:**
- Ensure wikis are enabled on GitHub
- Verify Git credentials

**Pages not linking correctly:**
- Use exact page names without .md extension
- Example: [Getting Started](Getting-Started)

---

Your wiki is ready for publication.
