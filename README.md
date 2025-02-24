# Marvel Superheroes API

API que sirve como intermediario entre la aplicación y la API de Marvel, proporcionando acceso a una lista de superhéroes y los detalles de cada uno.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas y configurados las claves de la API de Marvel:

[![Node.js](https://img.shields.io/badge/Node.js-v22.14.0-brightgreen)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-v11.0.0-E0234E)](https://nestjs.com/)
[![Git](https://img.shields.io/badge/Git-v2.48.1-f15a29)](https://git-scm.com/)
[![APIKEY MARVEL](https://img.shields.io/badge/APIKEY%20MARVEL-Obtenla%20aqui-orange)](https://developer.marvel.com/account)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/matigaleanodev/marvel-superheroes-api
   cd marvel-superheroes-api
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Configura las variables de entorno. Abre el archivo `.env` y agrega las claves correspondientes:

   ```bash
   MARVEL_PUBLIC_KEY="AQUI VA LA KEY PUBLICA DE MARVEL"
   MARVEL_PRIVATE_KEY="AQUI VA LA KEY PRIVADA DE MARVEL"
   MARVEL_API="https://gateway.marvel.com/v1/public"
   ```

4. Ejecuta la API en tu entorno local:

   ```bash
   npm run start
   ```

   La API estará disponible en `http://localhost:3000/api`.

## Endpoints

### `GET /api/characters`

Obtiene la lista de héroes de Marvel.

**Parámetros:**

- `limit` (opcional): Limita el número de héroes a mostrar.

## Funcionalidad

- **Listar héroes:** Permite obtener una lista de superhéroes de Marvel, filtrada por el parámetro `limit`.
