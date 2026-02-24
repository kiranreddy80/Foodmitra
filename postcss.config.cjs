module.exports = {
  plugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
      mode: 'aot' // Use AOT mode instead of JIT for faster startup
    }),
    require('autoprefixer'),
  ],
}