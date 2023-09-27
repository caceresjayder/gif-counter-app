# Gif Count Generator App

Gif count generator with JavaScript, Next.js, React.js, Tailwindcss, Gif.js, html2canvas

Struture
```
gif-generator
|
|__public
|   |   gif.worker.js
|
|__src
|   |__app
|   |   |   layout.jsx
|   |   |   page.jsx
|   |
|   |__components
|   |   |   Footer.jsx
|   |   |   Header.jsx
|   |   |   Preview.jsx
|   |
|   |__constants
|   |   |   index.jsx
|   |
|   |__hooks
|   |   |   useGif.jsx
|   |   
|   |__mocks
|   |   |   color.js
|   |   |   icons.js
|   |
|   |__styles
|   |   |   index.css
|   |
|   .eslintrc.json
|   .gitignore
|   jsconfig.json
|   next.config.js
|   package-lock.json
|   package.json
|   postcss.config.js
|   README.md
|   tailwind.config.js
```

WorkFlow
1. Set data
2. Creates gif button
3. useGif hook
4. html2canvas renders the preview component updating the number.
5. gif.js add the frames from the canvas and creates the gif
6. image disposition to view and download.

## License
MIT
