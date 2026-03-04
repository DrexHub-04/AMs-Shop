import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1615990860014-99e51245218c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMHdvcmtlcnxlbnwxfHx8fDE3NzIwMDA0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Welding sparks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 max-w-3xl">
          Professional Welding & Metal Fabrication
        </h1>
        <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl">
          Precision welding services for industrial, commercial, and residential projects. 
          Quality craftsmanship backed by 20+ years of experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <button
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Get a Quote
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border-2 border-zinc-300 text-zinc-300 hover:border-orange-500 hover:text-orange-500 px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
