Dr. D Burman PWA – Install Fix v2

IMPORTANT: Replace the old root files in your GitHub Pages repository with these files:
1. index.html
2. manifest.json
3. sw.js
4. icon-192.png
5. icon-512.png

The key fix is that index.html now explicitly links to manifest.json. The manifest also has an id, proper 192/512 icons, standalone display, and maskable icon entries.

After upload: wait 1–3 minutes, then open the site in Chrome, refresh, and try Chrome ⋮ > Install app.
If Chrome still shows the old disabled Install item, clear site data for the GitHub Pages site once, reopen it, and wait for the page to finish loading before checking the menu again.
