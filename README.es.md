# Marvel Superheroes — API

[English](README.md)

Prueba técnica NestJS de una integración de listado de personajes Marvel. Se conserva como código de evaluación y no como API productiva con mantenimiento activo.

## Stack

NestJS · TypeScript · Axios · Swagger.

## Alcance y configuración

Configurar MARVEL_API, MARVEL_PUBLIC_KEY y MARVEL_PRIVATE_KEY del lado servidor. El servicio firma las solicitudes y envía los parámetros de consulta al proveedor. La integración requiere acceso a la API externa y credenciales propias.

## Desarrollo local

Usar un entorno Node.js compatible con package.json y el lockfile de dependencias, cuando exista.

```sh
npm install
npm run start:dev
npm run build
npm test
```

## Repositorios relacionados

- [marvel-supereoes](https://github.com/matigaleanodev/marvel-supereoes)
