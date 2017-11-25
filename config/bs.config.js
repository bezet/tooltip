module.exports = {
  server: {
    baseDir: "docs",
    index: "index.html",
    middleware: (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    }
  },
  files: [
    "docs/*.html",
    "docs/*.css",
    "docs/*.js"
  ],
  notify: false
};
