# Joseph Rabuffetti portfolio site

This is the standalone static version of my portfolio. It uses plain HTML, CSS, and JavaScript.

## Files

Keep `index.html`, `style.css`, `app.js`, and `[UseYours]-logo.png` together in the published site folder. `index.html` is the site entry point.

## Publish with GitHub Pages

GitHub Pages is a straightforward option because the project is already on GitHub. The published portfolio files are public, this is a standard practice those who are reviewing my portfolio should integrate.

1. Create a new **public** GitHub repository named `[YourName].github.io`.
2. Upload the four site files from this folder to the repository root, then commit them to the `main` branch.
3. In the repository, open **Settings → Pages** and select **Deploy from a branch**, branch `main`, folder `/ (root)`. Save. GitHub will publish the site at `https://[YourName].github.io` after its first build.
4. To use `[YourName].com`, first register that domain with a domain provider.
5. In **Settings → Pages**, enter `[YourName].com` under **Custom domain** and save it before changing DNS.
6. At the domain provider, add four `A` records for host `@`, with these values:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
7. For the optional `www` version, add a `CNAME` record with host `www` and value `[YourName].github.io`.
8. Wait for DNS to update. Return to **Settings → Pages** and enable **Enforce HTTPS** when GitHub offers it.

DNS updates can take up to 24 hours. Follow the current instructions in GitHub Pages and your registrar if they differ from this guide. Keep any existing mail-related DNS records when adding website records.

## Other hosting services

Cloudflare Pages and similar static hosting services can also publish this folder. With a different host, follow that provider's custom-domain setup and use the DNS records it gives you; do not reuse GitHub's records there.

## Notes

- The paycheck calculator demo in the site runs in the visitor's browser. The hosted site does not receive or save the entered hours or rate.
- The Anchor project is described as a local desktop project; this download does not include Anchor's desktop application source.
