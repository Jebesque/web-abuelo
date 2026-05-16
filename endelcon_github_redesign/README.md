# Enrique Delgado · ENDELCON

Rediseño estático listo para GitHub Pages.

## Qué incluye

- `index.html`: web completa en una sola página.
- `assets/css/styles.css`: diseño responsive, estilo galería, tarjetas, modal y animaciones.
- `assets/js/app.js`: datos de obras, filtros, buscador, modal de detalle y formulario por email.
- `404.html`: copia de `index.html` para evitar errores si GitHub Pages redirige rutas.
- `.nojekyll`: evita problemas de GitHub Pages con archivos/carpetas.

## Cómo probar en local

Opción rápida: abre `index.html` directamente en el navegador.

Opción con servidor local desde la carpeta del proyecto:

```bash
python -m http.server 5173
```

Después abre:

```text
http://localhost:5173
```

## Cómo subirlo a GitHub Pages

### Opción más sencilla

1. Borra el contenido viejo del repo `web-abuelo` o crea un repo nuevo.
2. Copia todos los archivos de esta carpeta al repo.
3. Haz commit y push.
4. En GitHub entra en `Settings > Pages`.
5. En `Build and deployment`, elige `Deploy from a branch`.
6. En `Branch`, elige `main` y `/root`.
7. Guarda.

La web debería quedar en:

```text
https://TU-USUARIO.github.io/web-abuelo/
```

## Cómo cambiar obras

Edita `assets/js/app.js`, dentro del array `artworks`.

Cada obra tiene esta estructura:

```js
{
  id: 'kaleidoscopio',
  title: 'Kaleidoscopio',
  category: 'recent',
  technique: 'Acrílico sobre lienzo · técnica mixta',
  size: '100×100',
  price: '1.200,00 €',
  status: 'Disponible',
  sold: false,
  image: 'https://...',
  description: 'Texto de descripción'
}
```

Categorías disponibles:

- `recent`: Obras recientes.
- `watercolour`: Acuarelas.

Para marcar una obra como agotada:

```js
status: 'Agotado',
sold: true,
```

## Nota sobre imágenes

Las imágenes apuntan a la CDN original de Wix. Para una web 100% independiente, descarga las imágenes, guárdalas en `assets/img/obras/` y sustituye cada URL por una ruta local, por ejemplo:

```js
image: 'assets/img/obras/kaleidoscopio.jpg'
```
