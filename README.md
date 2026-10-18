# AMU Orbiter Club

A responsive React, TypeScript and Vite website for the AMU Orbiter student initiative. The content is editable, project concepts and unverified team/contact details are clearly identified, and the application form does not claim to save information until a service is configured.

## Run locally

Install [Node.js](https://nodejs.org/) (the current LTS version includes npm), then open a terminal in this folder:

```powershell
npm install
npm run dev
```

Open the local URL Vite prints in the terminal. To check a production build:

```powershell
npm run build
npm run preview
```

## Update content

Most club information is in `src/data/siteContent.ts`:

- Edit the club name, tagline and university affiliation.
- Add verified email, social-media and TPO website URLs to `siteContent.contact`. Leave an unavailable value empty; its placeholder will be shown.
- Update the domain list, sample activity ideas and category filters in the same file.
- Replace the empty `name`, `bio`, `photoUrl` and `profileUrl` fields in `teamMembers` with confirmed details. Roles are placeholders, and photographs and profile links are rendered only when provided.

The logo graphic and browser favicon are `public/orbiter-mark.svg`. Replace that SVG with your approved logo, retaining the same filename, or update the favicon reference in `index.html`. The orbital illustration in the hero is deliberately drawn in CSS rather than using an unverified or unrelated photograph.

To use real activity photos, add them under `public/images/`, then update each idea in `src/data/siteContent.ts` and the project-art markup in `src/components/Projects.tsx` with an image path and meaningful alt text. Current gallery artwork is illustrative, not a claim about completed work.

## Connect the application form

The form validates required fields in the browser. Until an endpoint is configured, it explicitly says applications are not connected and does not send or save any applicant details.

1. Create a form endpoint with a provider that accepts JSON POST requests (or build an API endpoint).
2. Copy `.env.example` to `.env.local` and set `VITE_APPLICATION_ENDPOINT` to that endpoint.
3. Restart the Vite server and test a submission with the form provider.

For example:

```dotenv
VITE_APPLICATION_ENDPOINT=https://your-form-provider.example/your-form
```

The form sends name, university email, department/year, area of interest, skills, motivation and portfolio URL as JSON. Its hidden honeypot field is not included in the request. A success message is displayed only when the endpoint responds successfully. For a production custom API, validate input and add spam protection/rate limiting on the server; never expose private API credentials in `VITE_` variables.

## Project structure

- `src/components/` — page sections and reusable brand/heading components
- `src/data/siteContent.ts` — editable copy, domains, concepts, links and team placeholders
- `src/index.css` — responsive layout, visual theme, states and reduced-motion support
- `public/orbiter-mark.svg` — logo and favicon

The site uses Lucide icons, Framer Motion for subtle reveal animations, and Tailwind CSS (via its Vite plugin).
