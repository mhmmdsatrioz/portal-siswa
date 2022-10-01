# Portal Mahasiswa

## Table of Contents

- [About](#about)
- [Introduce & Architecture](#introduce-architecture)
- [Folder Structure](#folder-structure)
- [Commit Name Format](#commit-name-format)
- [Development](#development)

## About

This is a school student monitoring project intended for students who violate the rules

## Introduce & Architecture

- ⚡️ [React Js](https://beta.reactjs.org/) - Yooo
- 💻 [Vite ](https://vitejs.dev/) - Next Generation Frontend Tooling
- 💪 [Typescript](https://www.typescriptlang.org/) - Of course
- 🎨 [Tailwind](https://tailwindcss.com/) - next generation utility-first CSS
- 🐶 [Husky ](https://beta.reactjs.org/) - Improve code quality with linting and code formatting
- 🐼 [Zustand](https://zustand-demo.pmnd.rs/) - State management in React fast and scalable

- 📦 [Yarn](https://yarnpkg.com/) - A Good Package manager for JavaScript

## **Folder Structure**

```
src
├── api
├── assets          => Icons,image,styles folder
├── components      => Common shared reusabled global component
├── pages           => Routing of pages
├── types           => Interface typescript
├── stores         => Global state management
├──
├──

```

## Commit Name Format

```
feat: add search on manager tab
^--^  ^---------------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

## Development

`yarn dev`

## Files Reference

`eslintrc.json` - a barebones eslint configuration for 2021, that extends off of the recommended ESLint config and prettier

`index.html` - the vite entrypoint, that includes the entry point for the client

`prettier.json` - the prettier config

`tsconfig.json` - TypeScript configuration

`vite.config.ts` - Vite configuration
