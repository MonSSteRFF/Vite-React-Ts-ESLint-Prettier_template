## if you want update all dependencies of project u can use this preset

clear dependencies and devDependencies arrays in *[package.json](package.json)* and run this commands

### list of dependencies
`npm install axios react react-dom react-router-dom zustand`

### list of dev dependencies
`npm install prettier sass -D`
- [.prettierrc.js](.prettierrc.js)
- [.prettierignore](.prettierignore)

### typescript
`npm install @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript -D`
- [tsconfig.json](tsconfig.json)
- [tsconfig.node.json](tsconfig.node.json)

### vite
`npm install @vitejs/plugin-react vite -D`
- [vite.config.ts](vite.config.ts)

### eslint
`npm install eslint-plugin-react-hooks eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort -D`
- [.eslintrc.js](.eslintrc.js)
- [.eslintignore](.eslintignore)

## config files must be broken after you update dependencies