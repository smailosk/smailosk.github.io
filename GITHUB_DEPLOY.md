# 🚀 Deploy Portfolio to GitHub Pages (FREE)

This guide will help you deploy your Next.js portfolio to GitHub Pages completely FREE!

## 📋 Prerequisites

- GitHub account
- Git installed on your computer

## 🎯 Step-by-Step Deployment Guide

### Step 1: Initialize Git Repository

```bash
cd /Users/ismail/MyApps/portfolio-v2
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or `ismailamor.github.io` for personal site)
3. Keep it **Public**
4. Don't initialize with README
5. Click "Create repository"

### Step 3: Connect Local to GitHub

```bash
# Replace USERNAME with your GitHub username
git remote add origin https://github.com/USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Source: Select **GitHub Actions**
4. Save

### Step 5: Update Package.json

Add this script to your `package.json`:

```json
{
  "scripts": {
    "build": "next build",
    "export": "next build"
  }
}
```

### Step 6: Push Changes

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

### Step 7: Watch it Deploy! 

1. Go to your repository → **Actions** tab
2. You'll see the deployment running
3. Once green ✅, your site is live!

## 🌐 Your Site URLs

### Option A: Default GitHub Pages URL
```
https://USERNAME.github.io/portfolio
```

### Option B: Personal GitHub Pages (better URL)
1. Name your repo: `USERNAME.github.io`
2. Your site will be at: `https://USERNAME.github.io`

### Option C: Custom Domain (Professional) 
1. Buy domain (e.g., ismailamor.com)
2. Create file `public/CNAME` with your domain:
   ```
   ismailamor.com
   ```
3. Configure DNS:
   - Add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or CNAME record: `USERNAME.github.io`

## 🔧 Troubleshooting

### Build Fails?
Check the Actions tab for error messages. Common fixes:

1. **Image optimization error:**
   Already fixed in `next.config.js`

2. **Module not found:**
   ```bash
   npm install
   git add package-lock.json
   git commit -m "Update dependencies"
   git push
   ```

3. **404 on deployed site:**
   - For `username.github.io/portfolio`, update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/portfolio',
     assetPrefix: '/portfolio',
     images: { unoptimized: true }
   }
   ```

## 📱 Quick Deploy Commands

Run these commands in order:

```bash
# 1. Initialize and commit
git init
git add .
git commit -m "Deploy portfolio to GitHub Pages"

# 2. Create repo on GitHub (via web), then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Actions in Settings → Pages

# 4. Future updates
git add .
git commit -m "Update portfolio"
git push
```

## ✅ Deployment Checklist

- [ ] Code committed to GitHub
- [ ] GitHub Actions workflow file present
- [ ] GitHub Pages enabled (Settings → Pages → Source: GitHub Actions)
- [ ] Site building successfully (check Actions tab)
- [ ] Site accessible at your URL

## 🎉 Success!

Your portfolio is now live and will automatically update whenever you push changes!

### Automatic Updates
Every time you:
```bash
git add .
git commit -m "Your changes"
git push
```
Your site automatically rebuilds and deploys!

## 🆓 What's Free?

- ✅ Hosting (unlimited bandwidth)
- ✅ HTTPS/SSL certificate
- ✅ GitHub subdomain
- ✅ Automatic deployments
- ✅ CDN (fast worldwide)

## 🔗 Alternative: Vercel (Even Easier!)

If GitHub Pages seems complex, try Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Click Deploy
5. Done! Live in 1 minute

Vercel benefits:
- Automatic preview deployments
- Better Next.js support
- Custom domains free
- Analytics included

---

Need help? Your portfolio should be live in less than 10 minutes following these steps!