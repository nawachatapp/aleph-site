# Aleph website and deployment

## Project

Static Astro website for Aleph Educational Center, in Arabic and English.
Repository: `nawachatapp/aleph-site`, branch `main`.
The confirmed public domain is `alephcenter.net`; canonical URLs use
`https://alephcenter.net`. Do not restore the old placeholder `www.aleph.edu.lb`.

Use `npm ci`, then `npm run build`. Upload only `dist/`, never the repository,
Git history, dependencies, deployment notes, or secrets. GitHub Actions builds on a hosted runner;
the small droplet does not need a Node service for this static site.
`npm run check` checks the source. Local output and dependencies are ignored.

## Deployment state on 2026-10-28

Deployment is complete. After the server preparation, the user updated GoDaddy
DNS and continued to HTTPS setup. The live canonical address is
`https://alephcenter.net`; HTTP and `www` redirect there, preserving paths and
query strings.

- Host: `46.101.110.129`, SSH user `root`, key `~/.ssh/nawa_deploy`.
- Web root: `/var/www/aleph`, owned by `deploy-aleph` and readable by Nginx;
  the protected ACME directory keeps its existing ownership.
- Nginx file: `/etc/nginx/sites-available/alephcenter.net`.
- Enabled link: `/etc/nginx/sites-enabled/zz-alephcenter.net`. The `zz-` prefix
  preserves the existing websites' ordering and default-host behavior.
- HTTPS covers `alephcenter.net` and `www.alephcenter.net`; both HTTP names
  redirect to the HTTPS apex, except for ACME certificate-validation requests.
- Source configuration: `deploy/nginx/alephcenter.net.conf`.
- Pre-change Nginx backup: `/root/aleph-setup-bWtGPWsg/nginx.tar.gz`.
  That directory also contains checksums of the original Nginx files.
- Pre-HTTPS backup: `/root/aleph-https-R6MCsZw8/nginx.tar.gz`, with a separate
  copy of the HTTP-only Aleph configuration and checksums of other Nginx files.
- Authoritative GoDaddy DNS resolves the apex to `46.101.110.129` (TTL 600);
  `www` is a CNAME to `alephcenter.net`. The user made the DNS edit.
- Let's Encrypt certificate: `/etc/letsencrypt/live/alephcenter.net/`, valid
  for both hostnames and initially expiring on 2027-01-26.
- Renewal configuration: `/etc/letsencrypt/renewal/alephcenter.net.conf`.
  The authenticator is webroot, using `/var/www/aleph`. The saved renewal hook
  runs `nginx -t && systemctl reload nginx`; `certbot.timer` is enabled/active.
  Keep the HTTP `/.well-known/acme-challenge/` exception when editing redirects.
  A renewal dry run passed for both names. For a manual test, use
  `certbot renew --cert-name alephcenter.net --dry-run --non-interactive --no-random-sleep-on-renew`.

The final build succeeded. All 96 HTTPS page/asset checks across the apex and
`www` matched local build bytes with strict certificate verification and an
explicit server-IP override. HTTP and HTTPS-www redirects preserve queries and
paths. Missing routes return 404; hidden Git paths are blocked. Other sites'
Nginx file checksums were unchanged, and the eight existing HTTPS hostnames
responded with the same homepage content as before setup. Public DNS requests
from the droplet also confirmed both Aleph names work; some resolver caches
were still refreshing immediately after the user's DNS edit.

Check the live site, or bypass a stale local DNS cache for troubleshooting:

```sh
curl -I https://alephcenter.net/en/
curl --resolve alephcenter.net:443:46.101.110.129 https://alephcenter.net/ar/
```

## Shared-server rules

Other roots are `/var/www/html` (nawa), `/var/www/alwafaa` (Alwafaa), and
`/var/www/gynny` (GYNNY). Preserve them and their Nginx configuration.
Never use `../nawa-website/deploy.sh` for Aleph: it targets nawa's web root.
Back up affected files, validate with `nginx -t`, and then reload Nginx.
Never print or commit private key contents. `.github/workflows/deploy.yml`
automatically checks/builds and publishes pushes to `main`; the initial run is
being verified. Its fresh per-site SSH key is stored in GitHub secrets and
restricted to `/var/www/aleph` through `/usr/local/libexec/site-deploy`.
The receiver protects `.well-known`, keeps three content backups outside the
web root, and restores previous content on a deployment verification failure.
See `../nawa-website/deploy/automation/README.md` for future-site registration.

## Incomplete optional features

`portalUrl` in `src/i18n/contact.ts` is null; portal controls say coming soon.
The public contact form composes a WhatsApp message; it needs no backend.
The phase-two news CMS in `public/admin/` still needs the actual repository,
working authentication and editor permissions. Automatic rebuilding and
deployment are now configured for changes merged or pushed to `main`.
Draft copy and the town-level map remain content-review items from README.md.
