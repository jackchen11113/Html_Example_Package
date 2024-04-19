# Html_Example_Package
Html乾淨的實驗包，預先安裝alpine.js跟tailwindcss

step1. 
npm install -D tailwindcss
npx tailwindcss init

step2. Configure your template paths.
tailwind.config.js
odule.exports = {
  content: ["./src/**/*.{html,js}","*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

step3. Add the Tailwind directives to your CSS
src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;

step4. Add scripts
package.json
"scripts": 
    {
        "build-css": " npx tailwindcss -i ./src/input.css -o ./public/style.css --watch"
    }

step5. 安裝alpinejs及所有的Plugin
npm install alpinejs
npm install @alpinejs/mask
npm install @alpinejs/intersect
npm install @alpinejs/persist
npm install @alpinejs/focus
npm install @alpinejs/collapse
npm install @alpinejs/anchor
npm install @alpinejs/morph
npm install exceljs

step6.安裝捆綁包套件esbuild
https://esbuild.github.io/getting-started/
npm i esbuild


step8.設定import
input.js

import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import anchor from '@alpinejs/anchor'
import morph from '@alpinejs/morph'

window.Alpine = Alpine
Alpine.plugin(mask)
Alpine.plugin(intersect)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(anchor)
Alpine.plugin(morph)

Alpine.start()


step8. Add build scripts
package.json
"scripts": {
    "build-css": " npx tailwindcss -i ./src/input.css -o ./src/style.css --watch",
    "build-js": "npx esbuild src/input.js --outfile=src/output.js --bundle --watch"
  },

step9. 開始打包
npm run build-js

建一個html檔案寫點tailwindcss

step10.編譯tailwindcss
npm run build-css
