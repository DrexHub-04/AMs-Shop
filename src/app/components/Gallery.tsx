import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1615990860014-99e51245218c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbCUyMHdvcmtlcnxlbnwxfHx8fDE3NzIwMDA0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Industrial Welding"
  },
  {
    url: "https://images.unsplash.com/photo-1683830932134-2d06849534eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdlbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcyMDAwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Steel Construction"
  },
  {
    url: "https://images.unsplash.com/photo-1764283715791-ddca32e8c1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtZXRhbHdvcmslMjBkZXNpZ258ZW58MXx8fHwxNzcyMDAwNDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Custom Metalwork"
  },
  {
    url: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcxOTEzNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Metal Fabrication"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Our Work</h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Browse our portfolio of completed projects showcasing our expertise and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-xl p-6">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
