module.exports = {
  content: [
    "./index.html",
    "./src/*.tsx", 
    "./src/**/*.tsx",
    // Temporary solution to keep the my plugin's styles
    "./node_modules/\\@goulvenc/typescript-table/dist/*.js",
    "./node_modules/\\@goulvenc/typescript-table/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
