import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Check if dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory not found.');
  console.error('Please run "npm run build" first to create the production build.');
  process.exit(1);
}

// Serve static files from the dist directory
app.use(express.static(distPath));

// SPA fallback - serve index.html for all routes
// This ensures client-side routing works properly
app.use((_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Serving React app from dist directory');
});
