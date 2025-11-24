# Deploying Meghavi AI to Hostinger

This guide explains how to deploy the Meghavi AI React application to Hostinger.

## Prerequisites
- Node.js installed locally
- Hostinger account with a hosting plan

## Build Instructions

1.  **Build the project locally:**
    Open your terminal in the project directory and run:
    ```bash
    npm run build
    ```
    This will create a `dist` folder containing the production-ready files.

2.  **Verify the build:**
    You can preview the build locally using:
    ```bash
    npm run preview
    ```

## Deployment Steps

1.  **Log in to Hostinger:**
    Go to [hpanel.hostinger.com](https://hpanel.hostinger.com/) and log in.

2.  **Access File Manager:**
    - Navigate to **Websites** and select your domain.
    - Click on **File Manager**.

3.  **Upload Files:**
    - Navigate to the `public_html` folder (or the root folder for your subdomain).
    - Delete the default `default.php` or `index.php` if present.
    - Upload the **contents** of your local `dist` folder (not the folder itself, but the files inside it: `index.html`, `assets/`, etc.).

4.  **Configure for Single Page App (SPA):**
    Since this is a React app using React Router, you need to redirect all requests to `index.html` to support deep linking.
    - Create a new file named `.htaccess` in the `public_html` folder.
    - Add the following content:
      ```apache
      <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
      </IfModule>
      ```

5.  **Done!**
    Visit your domain to see the live website.

## Troubleshooting
- **Blank Page:** Ensure you uploaded the contents of `dist` and not the `dist` folder itself. Check the console for 404 errors.
- **404 on Refresh:** Ensure the `.htaccess` file is correctly configured.
