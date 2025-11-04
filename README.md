# Final project
## Running locally
### Install `pnpm`
You need `pnpm` to run it locally. If you're on Windows, visit [here](https://pnpm.io/installation#on-windows). If you're a soy dev, use homebrew. If you're on Linux, figure it now.
### Serve locally via `vite`
```sh
npm run dev
```

### Build locally (not sure why'd you'd wanna do that)
```sh
npm run build
```
This will build to a `dist` folder. You can then serve via the `serve` tool
```sh
npm i -g serve
serve ./dist
```

### Pipelines should be green
Before pushing, make sure to run `npm run format` to automatically fix any formatting issue. This will automatically try to fix any linting issues and tell you if there are any fixes that need to be done manually. If `npm run format` fails, then your pipeline, which runs `npm run lint` will also fail.

### Unit tests
Unit tests are a good thing to have. But for such a simple project, they are quite overkill. Especially with the limited CI/CD compute time that we are working with.
