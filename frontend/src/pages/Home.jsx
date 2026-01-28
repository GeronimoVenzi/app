import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Film,
  Camera,
  Video,
  Sparkles,
  BookOpen,
  Music,
  Star,
  ArrowRight,
  Play,
  Award,
  Users,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { useToast } from '../hooks/use-toast';
import {
  services,
  projects,
  producers,
  featuredFilm,
  testimonials,
  galleryImages,
} from '../data/mock';

const iconMap = {
  Film,
  Camera,
  Video,
  Sparkles,
  BookOpen,
  Music,
};

const Home = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const categories = ['Todos', 'Cortometraje', 'Spot Publicitario', 'Documental', 'Videoclip'];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock submission - backend integration will come later
    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto contigo pronto.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80"
            alt="Cinematography"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">Creamos</span>{' '}
              <span className="text-red-600">Historias</span>
              <br />
              <span className="text-white">que Inspiran</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Producción audiovisual de excelencia que transforma ideas en experiencias
            cinematográficas inolvidables
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full group"
              onClick={() => {
                document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Proyectos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full"
              onClick={() => {
                document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Quienes Somos Section */}
      <section id="quienes-somos" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quienes <span className="text-red-600">Somos</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1574267432644-f74f8ec1e933?w=800&q=80"
                alt="Equipo CINEGATA"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Pasión por el Cine
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  CINEGATA es una productora audiovisual fundada por un equipo de
                  apasionados cineastas con más de 15 años de experiencia en la
                  industria. Nos especializamos en crear contenido cinematográfico que
                  no solo cuenta historias, sino que las hace vivir.
                </p>
                <p>
                  Desde cortometrajes independientes hasta campañas publicitarias de
                  gran envergadura, nuestro compromiso es siempre el mismo: excelencia
                  técnica y narrativa en cada fotograma.
                </p>
                <p>
                  Creemos que cada proyecto es una oportunidad única para innovar,
                  experimentar y empujar los límites de lo que es posible en el medio
                  audiovisual.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
                  <div className="text-sm text-gray-400 uppercase">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-gray-400 uppercase">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">15</div>
                  <div className="text-sm text-gray-400 uppercase">Años</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-red-600">Servicios</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ofrecemos soluciones audiovisuales integrales para dar vida a tu visión
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div key={service.id} variants={fadeInUp}>
                  <Card className="bg-zinc-900 border-zinc-800 hover:border-red-600 transition-all duration-300 h-full group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                        <Icon className="text-red-600 group-hover:text-white transition-colors" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-red-600">Proyectos</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12" />

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  className={`rounded-full px-6 ${
                    activeFilter === category
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'border-zinc-700 text-gray-400 hover:border-red-600 hover:text-white'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-red-600 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 rounded-full"
                      >
                        <Play className="mr-2" size={20} />
                        Ver Proyecto
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-red-500 mb-2 font-semibold">
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Film Section - El llanto del perro */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #dc2626 2px, #dc2626 4px)' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600 rounded-full mb-6">
              <span className="text-red-500 font-semibold uppercase text-sm tracking-wider">
                Proyecto Destacado
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">{featuredFilm.title}</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {featuredFilm.genre} • {featuredFilm.year}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video/Poster Section */}
            <motion.div {...fadeInUp} className="relative group">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-zinc-800">
                <img
                  src={featuredFilm.posterImage}
                  alt={featuredFilm.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-semibold">{featuredFilm.duration}</span>
                </div>
              </div>

              {/* Awards */}
              {featuredFilm.awards && featuredFilm.awards.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 space-y-2"
                >
                  {featuredFilm.awards.map((award, index) => (
                    <div key={index} className="flex items-center text-gray-400 text-sm">
                      <Award className="text-red-600 mr-2 flex-shrink-0" size={16} />
                      {award}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Film Info Section */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Sinopsis
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p className="text-lg">{featuredFilm.description}</p>
                <p>{featuredFilm.synopsis}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full group"
                  onClick={() => window.open(featuredFilm.trailerUrl, '_blank')}
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" />
                  Ver Trailer
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6 text-lg rounded-full group"
                    >
                      <Users className="mr-2 group-hover:scale-110 transition-transform" />
                      Ver Productores
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-red-600 mb-2">
                        Productores de "{featuredFilm.title}"
                      </DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Conoce al equipo creativo detrás de este thriller psicológico
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {producers.map((producer) => (
                        <motion.div
                          key={producer.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: producer.id * 0.1 }}
                        >
                          <Card className="bg-zinc-800 border-zinc-700 overflow-hidden h-full">
                            <div className="relative aspect-square overflow-hidden">
                              <img
                                src={producer.image}
                                alt={producer.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-2 text-white">
                                {producer.name}
                              </h3>
                              <p className="text-red-500 font-semibold mb-3 text-lg">
                                {producer.role}
                              </p>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {producer.bio}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lo que Dicen <span className="text-red-600">Nuestros Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card className="bg-zinc-900 border-zinc-800 h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-red-600 fill-red-600" size={20} />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Behind</span> the Scenes
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="relative overflow-hidden aspect-square group rounded-lg"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hablemos de tu <span className="text-red-600">Proyecto</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-400">
              Estamos listos para dar vida a tus ideas
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Nombre
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Asunto
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Mensaje
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg rounded-full"
                  >
                    Enviar Mensaje
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;