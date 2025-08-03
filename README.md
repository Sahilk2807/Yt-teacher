# 📺 YouTube ToolKit - Analyze, Download & Grow!

A professional, open-source web app built with **React**, **TypeScript**, and **Tailwind CSS**. This toolkit empowers YouTube creators and marketers to analyze channels, download assets, and discover valuable insights for growth.

---

## 🚀 Live Demo

You can deploy your own version to see it live!

- **Hosted on:** [Render](https://render.com/)
- **Code on:** [GitHub](https://github.com/YOUR_USERNAME/YOUR_REPO) (Replace with your repo link)

---

## ⚙️ Features

- ✅ **Monetization Checker**: Checks if a channel is likely monetized.
- ✅ **Tag Extractor**: Extracts video tags from any public YouTube video.
- ✅ **Thumbnail Downloader**: Downloads thumbnails in all available resolutions.
- ✅ **Image Downloader**: Downloads channel profile pictures and banners.
- ✅ **Channel ID Finder**: Quickly finds the unique ID for any channel.
- ✅ **Earnings Calculator**: Estimates potential earnings based on views.
- ✅ **Shadowban Detector**: Simple check to see if a channel appears in search.
- ✅ **Data Viewer**: Shows public channel statistics like subscriber count, total views, and video count.

### ✨ UI & UX Enhancements

- 🔄 **Skeleton Screens**: Smooth loading experience while fetching data.
- 🎉 **Animated Buttons**: Interactive hover and click effects on all buttons and cards.
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices.
- 📈 **SEO Optimized**: Built for high visibility on Google Search Console & AdSense approval.
- 💰 **Adstera Ads Integrated**: Placed strategically for revenue.

---

## 📄 Pages

- **Home**: The main hub with all the tools.
- **About Us**: Information about the project.
- **Contact Us**: Contact form and details.
- **Privacy Policy**: Standard privacy policy.
- **Terms & Conditions**: Terms of service.

---

## 📦 Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Render
- **Version Control**: GitHub

---

## 💸 Adsterra Ads Integration Strategy

This project is configured to easily integrate the following Adstera ad units for optimal revenue without being too intrusive:

- 🟢 **Native Banner Ads**: Blends with the content (e.g., near results).
- 🟢 **Sticky Banner Ads**: Stays at the bottom of the screen.
- 🟢 **Social Bar**: A highly effective, non-intrusive format.

---

## 🔍 Search Console + AdSense Tips

- **Clean URLs**: The app uses `react-router-dom` for user-friendly URLs (e.g., `/about-us`, `/contact-us`).
- **Meta Tags**: Each page can have custom `title`, `description`, and `og:image` tags for better social sharing and SEO. (Use `react-helmet-async` for this).
- **Essential Pages**: Includes Privacy Policy, Contact, and About Us pages, which are crucial for AdSense approval.
- **Performance**: Built with Vite for a lightning-fast production build, using Google Fonts and optimized assets.

---

## 📝 SEO Optimized FAQ

### What is YouTube ToolKit?
YouTube ToolKit is a free web app that offers a suite of tools like a monetization checker, tag extractor, thumbnail downloader, and shadowban detector for any public YouTube channel or video.

### How does the Monetization Checker work?
It analyzes publicly available data from the channel's page source to determine if the monetization flag is enabled. This is an estimate and not a guarantee.

### Is it safe to use?
Yes! The tool is 100% safe. It requires no login or personal information. All analysis is done on public data.

### Can I use this on mobile?
Absolutely. The application is fully responsive and optimized for Android, iOS, and all major desktop browsers.

---

## ✅ Pros & Cons

| Pros | Cons |
|------|------|
| ✔ Fast, lightweight, and modern | ✘ Doesn’t support private channel/video analysis |
| ✔ No login or API key required | ✘ Relies on public data which can change |
| ✔ Ad revenue tools included | ✘ Requires an internet connection |
| ✔ Completely free to use and self-host | ✘ Displays minimal ads to cover hosting costs |

---

## 👨‍💻 How to Deploy This on Render

1.  **Fork this repository** to your own GitHub account.
2.  **Clone your forked repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
    cd YOUR_REPO
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **(Optional) Run the development server:**
    ```bash
    npm run dev
    ```
5.  **Push to GitHub.**
6.  **Deploy on Render:**
    - Go to the [Render Dashboard](https://dashboard.render.com/) and click **"New +"** -> **"Static Site"**.
    - Connect your GitHub account and select your repository.
    - Use the following settings:
      - **Build Command**: `npm install && npm run build`
      - **Publish Directory**: `dist`
    - Click **"Create Static Site"**. Render will automatically build and deploy your app!

---

## 📁 Folder Structure
/public/ # Static files like favicons
/src/
/assets/ # Images, logos
/components/ # Reusable UI components (Header, Footer, Cards)
/hooks/ # Custom React hooks
/pages/ # Main pages (Home, About, Contact)
/utils/ # Tool logic (API fetching, data parsing)
App.tsx # Main app layout and routing
main.tsx # Entry point of the React app
index.css # Tailwind CSS base styles
index.html # Main HTML file
tailwind.config.js
tsconfig.json