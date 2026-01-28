// Mock data para CINEGATA - Cinematográfica

export const navLinks = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'quienes-somos', label: 'Quienes Somos', href: '#quienes-somos' },
  // { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'trailer', label: 'Trailer', href: '#trailer' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const services = [
  {
    id: 1,
    title: 'Producción Audiovisual',
    description: 'Creamos contenido cinematográfico de alta calidad desde la pre-producción hasta la entrega final.',
    icon: 'Film',
  },
  {
    id: 2,
    title: 'Dirección de Fotografía',
    description: 'Capturamos la esencia de cada proyecto con un enfoque visual único y profesional.',
    icon: 'Camera',
  },
  {
    id: 3,
    title: 'Post-Producción',
    description: 'Edición, corrección de color, efectos visuales y sonorización de nivel profesional.',
    icon: 'Video',
  },
  {
    id: 4,
    title: 'Spots Publicitarios',
    description: 'Desarrollamos campañas publicitarias impactantes que conectan con tu audiencia.',
    icon: 'Sparkles',
  },
  {
    id: 5,
    title: 'Documentales',
    description: 'Narramos historias reales con profundidad y sensibilidad cinematográfica.',
    icon: 'BookOpen',
  },
  {
    id: 6,
    title: 'Videoclips Musicales',
    description: 'Transformamos música en experiencias visuales memorables y creativas.',
    icon: 'Music',
  },
];

export const projects = [
  {
    id: 1,
    title: 'El Último Refugio',
    category: 'Cortometraje',
    description: 'Drama intimista sobre segundas oportunidades',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    year: '2024',
  },
  {
    id: 2,
    title: 'Campaña Velocity',
    category: 'Spot Publicitario',
    description: 'Comercial dinámico para marca automotriz',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    year: '2024',
  },
  {
    id: 3,
    title: 'Raíces Urbanas',
    category: 'Documental',
    description: 'Explorando la cultura hip-hop latinoamericana',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    year: '2023',
  },
  {
    id: 4,
    title: 'Eclipse',
    category: 'Videoclip',
    description: 'Producción visual para banda alternativa',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    year: '2023',
  },
  {
    id: 5,
    title: 'Noche de Gala',
    category: 'Evento Corporativo',
    description: 'Cobertura premium de evento internacional',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    year: '2024',
  },
  {
    id: 6,
    title: 'Horizontes',
    category: 'Cortometraje',
    description: 'Sci-fi experimental sobre límites humanos',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    year: '2023',
  },
];

// Productores de "El llanto del perro"
export const producers = [
  {
    id: 1,
    name: 'MIRANDA DE LA SERNA',
    role: 'Co-fundadora · Productora',
    image: '/images/foto-mir.jpg',
    bio: 'Actriz, guionista y productora argentina formada con Nora Moseinco y Gaby Ferrero. Fue revelación en Errante Corazón (Premio Sur) y trabajó en Amor Urgente, Bruja, Now & Then y Elena Sabe. Es cofundadora de Cinegata y guionista, productora y protagonista de El Llanto del Perro, film con el que obtuvo premios a Mejor Guion Iberoamericano, Mejor Guion en el Rojo Sangre y Mejor Actriz Iberoamericana. Es una de las voces más potentes del nuevo cine de género argentino.',
  },
  {
    id: 2,
    name: 'FEDERICO VENZI',
    role: 'Co-fundador · Productor',
    image: '/images/foto-fede.jpg',
    bio: 'Actor, director, productor y guionista argentino nacido en Buenos Aires y formado en el IUNA y el Teatro San Martín. Participó en las teleseries argentinas Esperanza Mía, Divina y Tercer Tiempo, y en dos producciones internacionales: la serie española Entre Olivos y la serie mexicana La Piloto. En cine actuó en Un Viaje a la Luna, Alemania y El Sótano. Es cofundador de Cinegata y guionista, productor y director de El Llanto del Perro, película premiada por su guión, actuación y edición en la competencia iberoamericana del festival Buenos Aires Rojo Sangre. Su trabajo lo posiciona como una voz creativa emergente dentro del cine independiente argentino.',
  },
];

// Información de la película destacada
export const featuredFilm = {
  title: 'El llanto del perro',
  genre: 'Thriller Psicológico',
  year: '2025',
  description: 'Un thriller psicológico que explora los límites de la cordura humana. Cuando los sonidos de la noche revelan secretos enterrados, la línea entre la realidad y la pesadilla se desvanece.',
  synopsis: 'Una familia se muda a una casa aislada en el campo. Durante las noches, escuchan el llanto persistente de un perro que nadie más parece oír. Lo que comienza como un misterio se transforma en una pesadilla psicológica que desenterrará oscuros secretos del pasado.',
  posterImage: '/images/frame1.jpg',
  // trailerUrl: '/video/ELDP_EDIT_TRAILER_SUBS.mp4',
  awards: ['Mejor Thriller - Festival de Cine Independiente 2024', 'Mención Especial - Dirección'],
};

export const testimonials = [
  {
    id: 1,
    name: 'María González',
    company: 'Estudio Creativo XYZ',
    text: 'CINEGATA transformó nuestra visión en una pieza audiovisual extraordinaria. Su profesionalismo y creatividad superaron todas nuestras expectativas.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Méndez',
    company: 'Marca Velocity',
    text: 'El equipo de CINEGATA entiende perfectamente cómo contar historias que conectan con las audiencias. Resultados excepcionales.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    company: 'Productora Indie Films',
    text: 'Trabajar con CINEGATA fue una experiencia increíble. Atención al detalle, creatividad sin límites y entrega impecable.',
    rating: 5,
  },
];

export const galleryImages = [
  {
    id: 1,
    url: '/images/frame2.jpg',
    alt: 'Behind the scenes rodaje',
  },
  {
    id: 2,
    url: '/images/frame3.jpg',
    alt: 'Equipo de producción',
  },
  {
    id: 3,
    url: '/images/frame4.jpg',
    alt: 'Set de grabación',
  },
  {
    id: 4,
    url: '/images/frame5.jpg',
    alt: 'Dirección de fotografía',
  },
  {
    id: 5,
    url: '/images/frame6.jpg',
    alt: 'Equipo técnico',
  },
  {
    id: 6,
    url: '/images/frame7.jpg',
    alt: 'Post-producción',
  },
];

export const contactInfo = {
  email: 'producción.gata@gmail.com',
  phone: '+54 11 1234-5678',
  address: 'Av. Corrientes 1234, Buenos Aires, Argentina',
  social: {
    instagram: 'https://instagram.com/cinegata',
    facebook: 'https://facebook.com/cinegata',
    youtube: 'https://youtube.com/@cinegata',
    vimeo: 'https://vimeo.com/cinegata',
  },
};