# Junto a Ti — Landing page

Página institucional estática (HTML + CSS + JavaScript puro). No usa servidores ni bases de datos y no almacena datos de pacientes. Funciona abriendo `index.html` con doble clic.

## Estructura

```text
junto-a-ti/
├── index.html          ← TODOS los textos (edite aquí)
├── css/estilos.css     ← colores, tamaños y diseño
├── js/script.js        ← menú, carrusel, ventanas (casi no se toca)
├── assets/
│   ├── imagenes/       ← fotos (sobre-nosotros.jpg, equipo/...)
│   └── logo/logo.svg   ← logo (reemplácelo por el suyo)
└── README.md
```

## Cómo editar (Visual Studio Code)

1. Abra la carpeta con **Archivo → Abrir carpeta**.
2. Instale la extensión gratuita **Live Server** y haga clic derecho en `index.html` → *Open with Live Server*. Verá los cambios al guardar.
3. En `index.html` busque los comentarios `EDITAR AQUÍ` y `CAMBIAR AQUÍ` (Ctrl+F). Cada sección está entre `INICIO:` y `FIN:`.

**Textos:** cambie el texto entre las etiquetas, por ejemplo `<h2>Sobre nosotros</h2>`.
**Colores:** en `css/estilos.css`, bloque `:root` (`--azul-oscuro`, `--azul-claro`, `--celeste`...). Cambie el código hexadecimal.
**Logo:** reemplace `assets/logo/logo.svg` (o cambie el `src` si usa .png).
**Foto de Nosotros:** guarde su imagen como `assets/imagenes/sobre-nosotros.jpg`. Si falta, se ve un fondo azul.
**Fotos del equipo:** guarde la foto en `assets/imagenes/equipo/` y reemplace `<svg class="ic">…</svg>` dentro de `<div class="avatar">` por `<img src="assets/imagenes/equipo/nombre.jpg" alt="Nombre">`. Use fotos cuadradas y ligeras (menos de 200 KB).
**Botones:** cambie el texto y el destino `href` (por ejemplo `href="#contacto"` o `href="https://..."`).
**Contacto y redes:** en el pie de página reemplace `href="#"` y los textos `[pendiente]`. Correo: `href="mailto:su@correo.com"`. WhatsApp: `href="https://wa.me/57NUMERO"`.
**Testimonios:** los actuales son ejemplos ilustrativos. Reemplácelos solo por testimonios reales y autorizados, y borre la etiqueta `ej`.
**Equipo:** nombres tomados de la imagen de referencia; verifique la ortografía (marcado "verificar apellido").
**Nuevas tarjetas:** copie una tarjeta completa (`<article>…</article>`) y péguela debajo.

## Publicar gratis

Recomendación para quien empieza: **Netlify** (arrastrar y soltar) o **GitHub Pages** si ya usa GitHub. Los planes gratuitos pueden cambiar; confirme en el sitio de cada servicio.

### Opción A: Netlify (la más fácil)
1. Cree una cuenta gratuita en netlify.com.
2. En *Sites* use **Add new site → Deploy manually** y arrastre la carpeta `junto-a-ti`.
3. Obtendrá una dirección `nombre.netlify.app` (puede cambiar el nombre en *Site configuration*).
4. **Actualizar:** vuelva a arrastrar la carpeta en la pestaña *Deploys*.

### Opción B: Cloudflare Pages
1. Cuenta gratuita en cloudflare.com → *Workers & Pages* → *Create* → *Pages* → *Upload assets*.
2. Ponga un nombre de proyecto y suba la carpeta. Obtendrá `nombre.pages.dev`.
3. **Actualizar:** cree un nuevo despliegue subiendo la carpeta de nuevo.

### Opción C: GitHub Pages
1. Cree una cuenta en github.com y un repositorio público (por ejemplo `junto-a-ti`).
2. *Add file → Upload files*: suba el contenido de la carpeta (`index.html` debe quedar en la raíz) y *Commit*.
3. *Settings → Pages → Branch: main / (root) → Save*. La dirección será `usuario.github.io/junto-a-ti`.
4. **Actualizar:** suba de nuevo los archivos modificados con *Upload files*.

## Subdominio gratuito vs. dominio propio

- **Subdominio gratuito** (`junto-a-ti.netlify.app`, `.pages.dev`, `.github.io`): no cuesta nada, pero incluye el nombre del servicio.
- **Dominio propio** (`juntoati.com`): es más profesional y fácil de recordar, pero se paga cada año al registrarlo. Puede comprarlo después y conectarlo a la misma página sin rehacerla.

## Antes de publicar
- [ ] Verificar nombres y cargos del equipo.
- [ ] Reemplazar correo, WhatsApp y redes.
- [ ] Subir foto de "Sobre nosotros" y fotos del equipo (con autorización de cada persona).
- [ ] Cambiar los testimonios de ejemplo por reales.
