# PC web container & Storybook User Guide
PC web container is a React library that can be published to NPM. If you’re looking to build a React-based app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.

## Commands
Start storybook
```bash
yarn storybook
```

Build library, output files are under lib folder.
```bash
yarn build
```

Build storybook, output files are under storybook-static folder.
```bash
build-storybook
```

Check code patterns, please run eslint before any commit.
```bash
yarn lint
```

Unit tests, please run Jest tests before any commit.
```bash
yarn test or yarn test:watch
```
## Components stories
Components stories are under stories folder.

## Publishing to NPM
```
npm publish --access public
```

## Publishing to AWS CodeArtifact

config aws
```bash
aws codeartifact login --tool npm --repository learning-packages --domain learning-domain --domain-owner 753517676217 --region eu-west-2
```
publish
```
yarn publish
```

## Yarn install from AWS CodeArtifact
set to install from AWS CodeArtifact
```
aws codeartifact login --tool npm --domain learning-domain --domain-owner 753517676217 --repository learning-packages
```

Changing back to the default npm registry
```
npm config set registry https://registry.npmjs.com/
```

## How to use it?
Should install it as node modules as other libraries. It's suggested to always use the latest version.

## How to develop components locally?
+ Make component changes in src folder.
+ Run yarn build to generate new js buildle.
+ Replace node module buildles under node_modules with the new files.

### Rollup
Uses [Rollup](https://rollupjs.org) as a bundler.

### TypeScript
`tsconfig.build.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`.