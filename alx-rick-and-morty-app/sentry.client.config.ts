import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "", // get your DSN from Sentry project settings
  tracesSampleRate: 1.0, // Adjust for production (e.g., 0.2 for 20%)
});
