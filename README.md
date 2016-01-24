# react-starter-kit

React web app start kit powered by Webpack + Babel.

# Developing

`npm run dev`

Hot reloading, babel 6 with es2015, react, and [class properties](https://github.com/pwmckenna/react-starter-kit/blob/eaad0d11399677d5182d5bdb09b68b6689780810/app/Components/Home.js#L7). Styled with less.

Open [http://localhost:3000](http://localhost:3000) and start editing away!

# Deploying to gh-pages

`npm run deploy`

Builds using the webpack production settings (minification, etc) and pushes the build files to your repo's gh-pages branch.

Example: http://pwmckenna.github.io/react-starter-kit/

# Is this up to date?

- react v14
- babel v6 (babel v5 was the one with all the default compilation settings...this specifies plugins/presets)
- babel-plugin-react-transform v2 (replaces https://github.com/gaearon/react-hot-loader)
