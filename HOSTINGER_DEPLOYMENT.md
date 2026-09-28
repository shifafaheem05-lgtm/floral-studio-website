# How to Deploy Floral Twistella on Hostinger

This guide walks you step-by-step through deploying your website onto **Hostinger** (Shared Web Hosting, Cloud Hosting, or WordPress Hosting).

---

## 🚀 Quick Summary
Your website is built as an ultra-fast, modern React SPA. The production output is located in the **`dist/`** folder (and packaged in **`dist.zip`**). 

All you need to do is upload the contents of `dist/` directly into your Hostinger **`public_html`** folder!

---

## Method 1: Upload via Hostinger File Manager (Easiest & Fastest, 3-5 mins)

### Step 1: Prepare the Build Files
If you are developing locally, run:
```bash
npm run build
```
This generates the `dist/` folder containing:
- `index.html` (Main website entry)
- `.htaccess` (Configured for SPA clean URLs and image caching)
- `assets/` (Compiled styles and JavaScript)
- `images/` (All high-resolution flower and studio photography)

You can also use the pre-packaged **`dist.zip`** archive.

### Step 2: Log in to Hostinger hPanel
1. Go to [https://hpanel.hostinger.com](https://hpanel.hostinger.com) and log in to your account.
2. Under **Websites**, click **Manage** next to your domain name.

### Step 3: Open File Manager
1. In the sidebar or search bar, click **File Manager** (Files -> File Manager).
2. Choose **Access files of [your domain]**.
3. Double-click the **`public_html`** folder to open it.

> 💡 **Note**: If there is a default Hostinger `default.php` file inside `public_html`, you can delete it.

### Step 4: Upload Your Files
**Option A (Using `dist.zip` - Recommended)**:
1. Click the **Upload** icon (arrow pointing up) in the top-right toolbar.
2. Select **File**, then choose **`dist.zip`**.
3. Once uploaded, right-click `dist.zip` inside `public_html` and click **Extract**.
4. Choose the extraction destination as `public_html/`.
5. If files extract directly into `public_html/`:
   You should see:
   - `index.html`
   - `.htaccess`
   - `assets/`
   - `images/`
   *(If extracted into a subfolder named `dist`, simply open `dist`, select all files, click Move, and move them to `public_html`)*.
6. Delete the `dist.zip` archive to keep your directory clean.

**Option B (Drag and Drop)**:
1. Open the `dist` folder on your computer.
2. Select all files and folders (`index.html`, `.htaccess`, `assets/`, `images/`).
3. Drag and drop them directly into `public_html` in Hostinger File Manager.

---

## Method 2: Upload via FTP (FileZilla / Cyberduck)

1. In Hostinger hPanel, go to **FTP Accounts**.
2. Note your **FTP Host/IP**, **Username**, and **Port** (usually `21`). Set an FTP password if needed.
3. Open **FileZilla**:
   - Host: `ftp.yourdomain.com` (or the IP from Hostinger)
   - Username: your Hostinger FTP username
   - Password: your FTP password
   - Port: `21`
4. Click **Quickconnect**.
5. In the right pane (remote server), double-click into **`public_html`**.
6. In the left pane (local computer), go inside your `dist` folder.
7. Select all contents (`index.html`, `.htaccess`, `assets`, `images`) and upload them into `public_html`.

---

## Method 3: Deploy via Git (Hostinger Git Integration)

If your code is on GitHub / GitLab:
1. In Hostinger hPanel, search for **Git** (Advanced -> Git).
2. Connect your repository (Branch: `main`).
3. Set the directory path to `/public_html`.
4. If using automated builds, ensure the build output (`dist`) is deployed to `public_html`.

---

## 🔒 Crucial Hostinger Checklist

1. **Verify `.htaccess` is Visible**:
   Hostinger runs on LiteSpeed web server which automatically honors `.htaccess`.
   Your `.htaccess` is already configured with:
   - SPA route redirection to `index.html` (prevents 404 on page refresh)
   - 1-year browser caching for images (`.jpg`, `.jpeg`, `.png`, `.svg`)
   - 1-month browser caching for CSS and JS assets
   *(In Hostinger File Manager settings, make sure "Show Hidden Files" is checked so `.htaccess` is visible)*.

2. **Activate Free SSL (HTTPS)**:
   - In Hostinger hPanel, go to **Security** -> **SSL**.
   - Make sure **SSL is Active** for your domain. Hostinger provides free Let's Encrypt lifetime SSL.
   - Enable **Force HTTPS**.

3. **Check Cache / Clear Purge Cache**:
   - In Hostinger hPanel -> **Performance** -> **LiteSpeed Cache**:
   - If you ever make an update and don't see changes immediately, click **Flush All** / **Purge Cache**.

4. **Verify Images**:
   - All bouquet and flower photos are stored in `images/` relative to root (`/images/filename.jpg`).
   - Once uploaded to `public_html/images/`, they will load with instant CDN-speed caching.

---

## 🛠️ Need to Update the Website in the Future?
Whenever you make changes to the design, text, or products:
1. Run `npm run build`
2. Upload the updated contents of `dist/` to Hostinger `public_html/` (replacing existing files).
3. Purge cache in Hostinger if prompted.
