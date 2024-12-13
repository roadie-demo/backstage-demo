import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://313fd8343a4948630cc175655ccff227@o4508461602439168.ingest.de.sentry.io/4508461853311056",
  integrations: [],

  tracesSampleRate: 1.0,
});

Sentry.setTag("myTag", "tag-value");
Sentry.setExtra("myExtra", "extra-value");
Sentry.addBreadcrumb({ message: "test" });

Sentry.captureMessage("Hello from Backstage Demo, Sentry!");

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
