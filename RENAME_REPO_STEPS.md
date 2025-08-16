# 🔄 Repository Rename Instructions

To change your portfolio URL from `smailosk.github.io/portfolio/` to `smailosk.github.io/`, follow these steps:

## 📋 Step 1: Rename Repository on GitHub

1. **Go to your repository settings:**
   ```
   https://github.com/smailosk/portfolio/settings
   ```

2. **Change the repository name:**
   - Find the "Repository name" field at the top
   - Change from: `portfolio`
   - Change to: `smailosk.github.io`
   - Click the **"Rename"** button

## 📋 Step 2: Update Local Git Remote

After renaming on GitHub, run these commands in your terminal:

```bash
# Update the remote URL to match the new repository name
git remote set-url origin git@github.com:smailosk/smailosk.github.io.git

# Verify the change
git remote -v
```

## 📋 Step 3: Push Changes

```bash
# Check current status
git status

# Add all changes
git add .

# Commit the URL updates
git commit -m "Update URLs for root domain deployment"

# Push to the renamed repository
git push origin main
```

## 📋 Step 4: Enable GitHub Pages

1. Go to: `https://github.com/smailosk/smailosk.github.io/settings/pages`
2. Under "Build and deployment", ensure:
   - Source: **GitHub Actions**
3. The deployment will trigger automatically

## ✅ Result

After completing these steps:
- Your portfolio will be live at: **https://smailosk.github.io/**
- No more `/portfolio/` in the URL!
- The site will deploy automatically on every push

## ⏱️ Timeline

- Repository rename: Immediate
- GitHub Pages activation: 2-5 minutes
- First deployment: 5-10 minutes
- DNS propagation: Up to 10 minutes

## 🎉 That's it!

Your portfolio will be accessible at the cleaner URL: `smailosk.github.io`