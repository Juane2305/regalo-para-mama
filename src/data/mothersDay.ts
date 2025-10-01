export type ChildDedication = {
  name: string;
  text: string;
  audioUrl?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description?: string;
  image?: string;
};

export const giftData = {
  momName: "Mamá",
  hero: {
    title: "¡Feliz Día de la Madre!",
    subtitle: "Gracias por tu amor, tu paciencia y por estar siempre.",
    bgImageMobile: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759352388/madre-e-hijos-en-el-parque_jvkcbo.jpg",
    bgImageDesktop: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759352173/4_1_ym7bob.jpg"
  },
  photos: [
    {
      src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759352737/close-up-feliz-madre-con-sus-hijos_bevoqh.jpg",
      caption: "Momentos juntos",
    },
    {
      src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759352797/cerrar-familia-comiendo-pastel_sj516f.jpg",
      caption: "Cumpleaños",
    },
    {
      src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759352867/la-familia-feliz-joven-asiatica-disfruta-de-vacaciones-en-la-playa-en-la-noche-papa-mama-y-nino-se-relajan-corriendo-juntos-cerca-del-mar-mientras-la-puesta-de-sol-silueta-concepto-de-estilo-de-vida-viajes-vacaciones-vacaciones-verano_mdigdv.jpg",
      caption: "Vacaciones 2010",
    },
    {
      src: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759353255/a_ujqhcp.png",
      caption: "Festejando logros",
    },
  ],
  dedications: <ChildDedication[]>[
    {
      name: "Pablo",
      text: "Gracias por enseñarme a ser constante y por cada abrazo a tiempo 💛",
    },
    {
      name: "María",
      text: "Sos mi lugar seguro. Te amo, má.",
      audioUrl:
        "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
    },
  ],
  video: {
    url: "https://res.cloudinary.com/dfschbyq2/video/upload/v1759353379/7394151-uhd_2160_3840_30fps_lclfxf.mp4",
    caption: "Un repaso por nuestros mejores recuerdos",
  },
  timeline: <TimelineItem[]>[
    {
      year: "2002",
      title: "Nacimiento de Lucas",
      image:
        "https://res.cloudinary.com/dfschbyq2/image/upload/v1759353472/pexels-pixabay-208189_hdapbj.jpg",
    },
    {
      year: "2010",
      title: "Mar del Plata en familia",
      description: "La primera vez que vimos el mar juntos.",
    },
    {
      year: "2022",
      title: "Tus 50 🎉",
      description: "Una fiesta inolvidable.",
    },
  ],
  closing: {
    text: "Sos lo mejor que nos pasó. Gracias por tanto amor. ¡Feliz día!",
    signature: "Con amor, tus hijos",
  },
  bgMusic: {
    url: "https://res.cloudinary.com/dfschbyq2/video/upload/v1759352665/Enredados_-_Veo_en_ti_la_luz_Letra_g78sjb.mp3",
  },
};