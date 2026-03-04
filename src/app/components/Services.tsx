import { Wrench, Building2, Home, Truck, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "MIG & TIG Welding",
    description: "Expert welding services for all metal types including steel, aluminum, and stainless steel."
  },
  {
    icon: Building2,
    title: "Structural Welding",
    description: "Heavy-duty structural welding for commercial and industrial construction projects."
  },
  {
    icon: Home,
    title: "Custom Fabrication",
    description: "Custom metal fabrication for railings, gates, furniture, and architectural elements."
  },
  {
    icon: Truck,
    title: "Mobile Welding",
    description: "On-site welding services bringing our expertise directly to your location."
  },
  {
    icon: Shield,
    title: "Repair & Maintenance",
    description: "Professional metal repair and maintenance services for equipment and structures."
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "24/7 emergency welding services for urgent repairs and critical situations."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-zinc-900 mb-4">Our Services</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Comprehensive welding and metal fabrication solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-zinc-200"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl text-zinc-900 mb-3">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
