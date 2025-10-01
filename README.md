# Invitarly — Regalo Día de la Madre (Frontend puro)

Proyecto base listo para duplicar por cliente. Hecho con **Vite + React + TypeScript + Tailwind**.

## Requisitos
- Node.js 18+
- npm

## Instalación
```bash
npm install
npm run dev
```

## Estructura editable por cliente
- `src/data/mothersDay.ts`: reemplace `giftData` (nombres, fotos, dedicatorias, audio, video, timeline).
- `src/components/*`: componentes presentacionales (puede ocultar secciones si no aplica).
- `tailwind.config.js`: paleta y fuentes (ajuste a los colores de Invitarly o del cliente).

## Deploy rápido
- Vercel/Netlify: build `npm run build` y carpeta `dist/`.
- Puede generar un subdominio por cliente tipo `madre-<id>.invitarly.com`.

## Notas
- Este template es **frontend puro**. Los datos se cargan desde `giftData` (o en el futuro desde un endpoint).
- Pensado mobile-first, con galería con lightbox, audio, video y timeline.# regalo-para-mama
