This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# Rick and Morty Episodes App

This project uses GraphQL and Apollo Client to fetch Rick and Morty episodes data and display it with pagination.

## Features
- GraphQL API from Rick and Morty
- Apollo Client
- TypeScript interfaces
- Episode cards with pagination

## Run
```bash
npm install
npm run dev

---

## 🔹 Step 7: Run app
```bash
npm install
npm run dev

# alx-graphql-0x03

## Error Boundary Implementation

- Added an `ErrorBoundary` class component in TypeScript inside `components/ErrorBoundary.tsx`.
- It catches runtime errors and displays a fallback UI.
- Wrapped the app with `ErrorBoundary` inside `_app.tsx`.

### How to Run
```bash
npm install
npm run dev

# alx-graphql-0x03

## ErrorBoundary Integration

- Added `ErrorBoundary` in `components/ErrorBoundary.tsx`.
- Wrapped all pages inside `pages/_app.tsx` with `ErrorBoundary` to catch runtime errors.

### Run the project

```bash
npm install
npm run dev

---

## ✅ Step 4: Run the App
From inside `alx-rick-and-morty-app`:

```bash
npm run dev
