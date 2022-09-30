# PaintIt

PaintIt is a ready to use, easy to use and a simple white-board; it is mainly thought to be used with your graphical tablet.

## Features

- Keyboard shortcuts included
- Autosaving into your web browser storage
- Undo action
- Download action
- Change your canvas name (this is how the file is called in case you wanna download it)

## Keyboard shortcuts

- `ctrl` + `z` = Undo action
- `ctrl` + `+` = Increment line width
- `ctrl` + `-` = Decrement line width
- `ctrl` + `(1 - 9)`= Each number has its own color, which you can access by this shortcuts

## Tech

- [React18](https://reactjs.org/)
- [Classic Redux](https://react-redux.js.org/)
- [Vite](https://vitejs.dev/guide/why.html)
- [Tailwind](https://markus.oberlehner.net/blog/vue-project-directory-structure-keep-it-flat-or-group-by-domain/)
- [React canvas draw](https://www.npmjs.com/package/react-canvas-draw)
- [React color](https://casesandberg.github.io/react-color/)
- **FULLY RESPONSIVE**

## Folder structure

- [7-1 for the SCSS architecture](https://sass-guidelin.es/es/#arquitectura)
- [A hexagonal architecture + DDD architecture](https://css-tricks.com/domain-driven-design-with-react/)

## Conventions

- [Vue Style Guide](https://vuejs.org/style-guide/) - I know i am working on React, but i am a huge fan of Vue.js, therefore i am using their style guide convetion, i think some of then would apply to frontend development generally speaking.
- I am using `function componentName()` for UI components, and `const hookName = () => {}` for logical components, like hooks.

## Installation

Install the dependencies and devDependencies and start the server.
**Ask for the .env in case you wanna run it locally**

```sh
cd paintIt
npm i
npm run dev
```
