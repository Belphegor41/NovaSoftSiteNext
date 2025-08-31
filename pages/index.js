import { useState, useEffect } from 'react';

// A simple gallery dataset. These images are loaded from Unsplash and
// showcase technology and futuristic aesthetics. They help convey
// professionalism and the modern feel of NovaSoft. Feel free to
// replace these URLs with your own assets when customising the site.
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80',
    alt: 'Code on a computer screen with colourful reflections'
  },
  {
    src: 'https://images.unsplash.com/photo-1523269524500-b194da52bd6f?auto=format&fit=crop&w=800&q=80',
    alt: 'Abstract futuristic cityscape with glowing lights'
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    alt: 'Developer at work with code editor open'
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    alt: '3D wireframe structure representing data'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern office with high tech gadgets'
  },
  {
    src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80',
    alt: 'Dark server room with glowing lights'
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalImage, setModalImage] = useState(null);

  // Highlight the active navigation item based on scroll position
  useEffect(() => {
    const handler = () => {
      const sections = ['home', 'about', 'models', 'showreel', 'offers', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Navigation bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-darkbg/80 backdrop-blur border-b border-darkbg/40 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-sm">
          <div className="font-bold text-primary text-lg">NovaSoft</div>
          <ul className="hidden md:flex space-x-6">
            {['home','about','models','showreel','offers','gallery','contact'].map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`uppercase tracking-wide transition-colors hover:text-primary ${activeSection === section ? 'text-primary' : 'text-gray-300'}`}
                >
                  {section === 'home' && 'Accueil'}
                  {section === 'about' && 'Qui sommes-nous'}
                  {section === 'models' && 'Modèles'}
                  {section === 'showreel' && 'Showreel'}
                  {section === 'offers' && 'Offres'}
                  {section === 'gallery' && 'Galerie'}
                  {section === 'contact' && 'Contact'}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="pt-20 space-y-32">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-darkbg via-darkbg to-gray-900">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Bienvenue chez <span className="text-primary">NovaSoft</span></h1>
            <p className="text-gray-300 text-lg mb-3">Création de logiciels et sites web innovants</p>
            <p className="text-gray-500 text-sm">Une filiale du groupe Berry&amp;Co</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Qui sommes-nous ?</h2>
          <p className="text-gray-300 leading-relaxed">
            NovaSoft est une entreprise spécialisée dans le développement de logiciels et de sites web sur mesure. Nous appartenons au groupe
            Berry&amp;Co et sommes fiers de proposer des solutions digitales adaptées aux besoins des entreprises, qu'il s'agisse de startups,
            de PME ou de grandes entreprises. Notre mission est de fournir des produits esthétiques, performants et évolutifs qui façonnent
            l'avenir du numérique.
          </p>
        </section>

        {/* Models Section */}
        <section id="models" className="bg-darkbg/70 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">Modèles intégrés</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Template SaaS', description: 'Idéal pour les plateformes de services en ligne' },
                { title: 'Template e‑commerce', description: 'Parfait pour lancer votre boutique en ligne' },
                { title: 'Template Portfolio', description: 'Mettez en valeur vos projets et réalisations' },
                { title: 'Template Dashboard', description: 'Visualisation de données interactive' },
                { title: 'Template Blog', description: 'Partagez vos idées et votre expertise' },
                { title: 'Template Corporate', description: 'Une présence web professionnelle pour votre entreprise' },
              ].map(({ title, description }) => (
                <div key={title} className="border border-darkbg/50 rounded-2xl p-6 bg-darkbg/50 hover:border-primary transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showreel Section */}
        <section id="showreel" className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Showreel 3D</h2>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-darkbg/50">
            {/* Placeholder for a 3D showcase – you can replace this div with an embedded Spline
                design or a video. */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <p className="text-gray-500">Démo 3D en cours de chargement...</p>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section id="offers" className="bg-darkbg/70 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Nos offres &amp; tarifs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Essentiel',
                  price: '750€',
                  features: ['Site vitrine moderne', 'Réactivité mobile', 'Support par e‑mail'],
                },
                {
                  name: 'Professionnel',
                  price: '1500€',
                  features: ['Site dynamique (blog, boutique)', 'SEO de base', 'Support prioritaire'],
                },
                {
                  name: 'Premium',
                  price: '3000€',
                  features: ['Application complète (web + mobile)', 'Design sur mesure', 'Maintenance avancée'],
                },
              ].map(({ name, price, features }) => (
                <div key={name} className="border border-darkbg/50 rounded-2xl p-6 bg-darkbg/50 hover:border-primary transition-colors flex flex-col">
                  <h3 className="text-2xl font-semibold text-primary mb-4">{name}</h3>
                  <p className="text-4xl font-bold text-white mb-4">{price}</p>
                  <ul className="space-y-2 flex-1">
                    {features.map(feature => (
                      <li key={feature} className="text-gray-400 text-sm">• {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-6 inline-block bg-primary text-darkbg px-4 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors text-center">
                    Nous contacter
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Galerie</h2>
          <p className="text-gray-400 mb-8">Explorez nos récentes créations et projets.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map(({ src, alt }, idx) => (
              <button
                key={idx}
                onClick={() => setModalImage({ src, alt })}
                className="relative group focus:outline-none"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-40 object-cover rounded-xl transform group-hover:scale-105 transition-transform"
                />
                <span className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-darkbg/70 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Contact</h2>
            <p className="text-gray-400 mb-4">Vous avez un projet ou une question ? N'hésitez pas à nous contacter.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-primary text-xl">📞</span>
                <a href="tel:+33659924752" className="text-gray-300 hover:text-primary">
                  06&nbsp;59&nbsp;92&nbsp;47&nbsp;52
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary text-xl">✉️</span>
                <a href="mailto:contact.berryj@gmail.com" className="text-gray-300 hover:text-primary">
                  contact.berryj@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal viewer for gallery */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-2xl leading-none hover:text-primary"
            >
              ×
            </button>
            <img src={modalImage.src} alt={modalImage.alt} className="w-full h-auto rounded-xl" />
            <p className="text-gray-400 mt-2 text-center text-sm">{modalImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
