# Marvel Superheroes — API

[Español](README.es.md)

NestJS technical assessment for a Marvel character-list integration. Preserved as assessment code rather than a maintained production API.

## Stack

NestJS · TypeScript · Axios · Swagger.

## Scope and configuration

Configure MARVEL_API, MARVEL_PUBLIC_KEY and MARVEL_PRIVATE_KEY server-side. The service signs requests and forwards query parameters to the provider. External API access and credentials are required to exercise the integration.

## Local development

Use a Node.js toolchain compatible with package.json and the dependency lockfile, when present.

```sh
npm install
npm run start:dev
npm run build
npm test
```

## Related repositories

- [marvel-supereoes](https://github.com/matigaleanodev/marvel-supereoes)
