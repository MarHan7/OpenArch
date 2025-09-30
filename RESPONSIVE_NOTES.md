
# Mobile responsiveness & pagination

This patch does the following without affecting desktop layouts:

1. **Stacks viewer and browser on mobile (<768px):**
   - `src/App.module.css`: mobile media query sets `.container` to column and makes both sections 100% width. Removed the rule that hid `.leftSection` on small screens.

2. **Project list pagination on mobile:**
   - `src/components/ProjectList/ProjectList.jsx`: adds a reusable `useIsMobile` hook and paginates the list to 12 items per page on mobile with Prev/Next controls.
   - `src/components/ProjectList/ProjectList.module.css`: adds a simpler grid on mobile and styles a sticky pager.

3. **Kg eq CO2 pagination on mobile:**
   - `src/components/KGEQCO2/KGEQCO.jsx`: paginates to 14 rows per page on mobile with controls.
   - `src/components/KGEQCO2/KGEQCO.module.css`: mobile grid + sticky pager styles.

4. **Atlas core min height on mobile:** minor tweak so the 3D viewer / list has a reasonable height when stacked.

5. **New hook:** `src/hooks/useIsMobile.js` provides a tiny resize-aware hook you can reuse anywhere.

### How it works

- On desktop, `pageSize` equals the total number of rows, so pagination is effectively disabled.
- On mobile, we slice the data array and show a pager that is sticky above the bottom of the panel.
- The project list hides a few less critical columns on mobile to keep it readable.
- No data or sorting logic changed.

### Where to adjust

- Change the 768 breakpoint in `useIsMobile.js` if you want a different cutoff.
- Tweak `pageSize` values in `ProjectList.jsx` and `KGEQCO.jsx` to your liking.
