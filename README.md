# Initial Setup

-   npx create-react-app <app_name>
-   npm i -D tailwindcss postcss-cli postcss@latest autoprefixer@^9.8.6
-   npx tailwindcss init --full
-   create styles folder in src
-   create main.css and tailwind.css in styles folder

Now we need compile tailwind into main.css. To do that:

1.  paste following lines in tailwind.css:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

2.  create postcss.config.js in root and paste following:

const tailwindcss = require("tailwindcss");
module.exports = { plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")] };

3. Go to package.json add this in scripts object:

"build:css": "postcss src/styles/tailwind.css -o src/styles/main.css",
"build:watch": "postcss src/styles/tailwind.css -o src/styles/main.css --watch"

4. npm run build:css

# To run the project after cloning

-   npm i
-   npm run build:css
