const express = require('express');
const serveStatic = require('serve-static');
const { join } = require('path');

const app = express();
app.use(require('connect-history-api-fallback')());

app.use(serveStatic(join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
