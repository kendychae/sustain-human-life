# Deployment Guide for Healthy Families Project

This guide will help you deploy the Healthy Families Project website to GitHub Pages.

## Prerequisites

- A GitHub account (free)
- Basic familiarity with GitHub (we'll walk you through it!)

## Step-by-Step Deployment

### 1. Create a GitHub Account

If you don't already have one:

1. Go to [github.com](https://github.com)
2. Click **"Sign up"**
3. Follow the registration process
4. Verify your email address

### 2. Create a New Repository

1. Log in to GitHub
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `sustain-human-life` (or your preferred name)
   - **Description:** "Practical healthy eating resources and meal plans for families"
   - **Visibility:** Select **Public**
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### 3. Upload Your Files

#### Option A: Upload via GitHub Website (Easiest)

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL project files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `privacy.html`
   - `disclaimer.html`
   - `robots.txt`
   - `sitemap.xml`
   - `.gitignore`
   - `CONTRIBUTING.md`
   - `meal-plans/` folder (with all meal plan files)
3. Add a commit message: "Initial commit: Healthy Families Project"
4. Click **"Commit changes"**

#### Option B: Upload via Git Command Line

If you're comfortable with command line:

```bash
# Navigate to your project folder
cd c:\healthy-families-project

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Healthy Families Project"

# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/sustain-human-life.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top navigation)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**:
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-3 minutes for deployment

### 5. Access Your Website

Your site will be published at:

```
https://YOUR-USERNAME.github.io/sustain-human-life/
```

For example, if your GitHub username is `kendychae`:

```
https://kendychae.github.io/sustain-human-life/
```

### 6. Verify Deployment

Check that the following are working:

- [ ] Main page loads correctly
- [ ] Navigation menu works (especially on mobile)
- [ ] All sections are visible
- [ ] Links to Privacy Policy and Disclaimer work
- [ ] External resource links open in new tabs
- [ ] Mobile menu toggles properly

## Adding a Custom Domain (Optional)

If you own a domain name, you can use it instead of the GitHub Pages URL:

1. In your repository, go to **Settings > Pages**
2. Under **"Custom domain"**, enter your domain (e.g., `healthyfamilies.com`)
3. Click **"Save"**
4. In your domain registrar's DNS settings, add a CNAME record pointing to:
   ```
   YOUR-USERNAME.github.io
   ```
5. Wait for DNS propagation (can take up to 48 hours)

## Updating Your Website

### Via GitHub Website

1. Navigate to the file you want to edit
2. Click the pencil icon (Edit)
3. Make your changes
4. Scroll down and click **"Commit changes"**
5. Changes will appear on your site within 1-3 minutes

### Via Git Command Line

```bash
# Make changes to your files locally

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update: Description of what you changed"

# Push to GitHub
git push origin main
```

## Troubleshooting

### Website Not Loading

- **Wait:** Initial deployment can take up to 10 minutes
- **Check URL:** Make sure you're using the correct GitHub Pages URL
- **Verify Settings:** Ensure GitHub Pages is enabled in Settings > Pages
- **Check File Names:** All filenames should be lowercase and match exactly

### Images Not Showing

- Ensure image files are uploaded to the repository
- Check that file paths are correct and use forward slashes `/`
- Verify image files are in supported formats (PNG, JPG, SVG)

### Mobile Menu Not Working

- Clear your browser cache
- Check that `script.js` is uploaded
- Open browser console (F12) to check for errors

### Links Not Working

- Ensure all internal links use relative paths
- External links should include `https://`
- Check for typos in file names

## Performance Optimization

### After Deployment

1. **Test Load Speed:** Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. **Check Mobile:** Test on actual mobile devices
3. **Validate HTML:** Use [W3C Validator](https://validator.w3.org/)
4. **Test Accessibility:** Use [WAVE Tool](https://wave.webaim.org/)

### Optimization Tips

- **Compress Images:** Use tools like TinyPNG before uploading
- **Minify CSS/JS:** For production, consider minified versions
- **Enable Caching:** GitHub Pages automatically handles this

## Security Best Practices

✅ **Already Implemented:**

- HTTPS enabled by default on GitHub Pages
- `rel="noopener noreferrer"` on external links
- No user data collection or storage
- Privacy Policy and Disclaimer pages included

⚠️ **Remember:**

- Never commit sensitive information (passwords, API keys)
- Keep dependencies updated if you add any
- Review pull requests carefully before merging

## Monitoring and Analytics (Optional)

If you want to track visitors:

### Google Analytics (Free)

1. Sign up at [analytics.google.com](https://analytics.google.com)
2. Create a property for your site
3. Copy the tracking code
4. Add before closing `</head>` tag in HTML files

### GitHub Insights

- View traffic stats in your repository: **Insights > Traffic**
- See page views, unique visitors, and referring sites

## Backup Your Work

### Automatic Backups

- GitHub automatically backs up your repository
- Every commit is saved in history
- You can revert to any previous version

### Local Backup

```bash
# Clone your repository to your local machine
git clone https://github.com/YOUR-USERNAME/sustain-human-life.git

# Or pull latest changes if already cloned
git pull origin main
```

## Getting Help

### Resources

- **GitHub Docs:** [docs.github.com/pages](https://docs.github.com/pages)
- **GitHub Community:** [github.community](https://github.community)
- **This Project:** Create an issue at your repository

### Common Issues

1. **404 Error:** Check file paths and ensure `index.html` is in root
2. **CSS Not Loading:** Verify `styles.css` path in HTML
3. **Changes Not Showing:** Clear cache or wait a few minutes
4. **Mobile Issues:** Test responsiveness at different breakpoints

## Next Steps

After successful deployment:

1. ✅ Share your website with family and friends
2. ✅ Test on multiple devices and browsers
3. ✅ Gather feedback and make improvements
4. ✅ Add more content (recipes, meal plans, tips)
5. ✅ Consider adding photos of your actual meals
6. ✅ Encourage community contributions

## Maintenance Schedule

### Weekly

- Check for broken links
- Review any issues or feedback
- Add new recipes or tips

### Monthly

- Update meal plans seasonally
- Review analytics (if enabled)
- Test website functionality

### Quarterly

- Update dependencies (if any)
- Refresh content relevance
- Review and update resources

---

**Congratulations!** 🎉 Your Healthy Families Project website is now live and helping families make healthier choices!

For additional help, refer to:

- [README.md](README.md) - General project information
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [GitHub Pages Documentation](https://docs.github.com/pages)
