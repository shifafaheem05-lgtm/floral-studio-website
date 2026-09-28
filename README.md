# Floral Twistella — Premium Handmade Floral Art & Workshops

A client-ready, fully responsive web application for **Floral Twistella**, a boutique floral-art studio specializing in handmade floral creations, floral workshops, custom bouquets, gifting, and event styling.

---

## 🌸 Tech Stack

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4 (with `@theme` custom variables & Google Fonts)
* **Icons:** Lucide React
* **Typography:** Cormorant Garamond (Editorial Serif) & Plus Jakarta Sans (Sans-Serif)

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Run dev server (Port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment Instructions for Hostinger

This project builds to a pure static distribution folder (`dist/`), making it ready for **Hostinger Web Hosting**, **Hostinger Cloud Hosting**, or **Hostinger VPS**.

### Method 1: Hostinger File Manager / FTP Upload (Standard)

1. **Build the production bundle:**
   ```bash
   npm run build
   ```
2. In your local workspace, locate the **`dist`** folder.
3. Log in to your **Hostinger hPanel** (`hpanel.hostinger.com`).
4. Go to **Websites** &rarr; click **Manage** next to your domain.
5. Open **File Manager** (under Files).
6. Navigate to `public_html/`.
7. Upload all contents **inside** the `dist/` folder (such as `index.html`, `assets/`, `.htaccess`, etc.) directly into `public_html/`.
8. Visit your domain in any browser.

---

### Method 2: Hostinger Git Deployment (Automated)

1. Push your repository to GitHub / GitLab.
2. In **Hostinger hPanel**, navigate to **Advanced** &rarr; **Git**.
3. Add your repository URL, select the `main` branch, and set Directory to `/public_html`.
4. If deploying via Node build on Hostinger VPS / Cloud:
   * Build command: `npm install && npm run build`
   * Output directory: `dist`
5. Hostinger will automatically pull and deploy changes.

---

## ⚙️ Hostinger Apache / LiteSpeed Configuration

A pre-configured `public/.htaccess` file is included in this repository. When built, it is automatically placed into the root of `dist/` to ensure:
* Seamless single-page app (SPA) fallback routing.
* Gzip/Brotli compression for assets.
* Proper caching headers for fonts, images, and scripts.

---

## 🎨 Centralized Studio Configuration

To update studio details, telephone, WhatsApp number, or workshop schedules, simply edit:
* **`src/data/siteContent.ts`**
  * `SITE_CONFIG.contact.whatsapp` (central WhatsApp number)
  * `SITE_CONFIG.contact.phone`
  * `SITE_CONFIG.contact.email`
  * `WORKSHOP_DATA.schedule` (upcoming dates & seats)
  * `COLLECTIONS_DATA` (products & details)
  * `GALLERY_ITEMS` (portfolio images)
