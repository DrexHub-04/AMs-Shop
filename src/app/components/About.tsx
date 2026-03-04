import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "AWS Certified Welders",
  "20+ Years Experience",
  "Licensed & Insured",
  "Quality Guaranteed",
  "Competitive Pricing",
  "Free Estimates"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcxOTEzNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Metal fabrication workshop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl text-zinc-900 mb-6">About Elite Welding</h2>
            <p className="text-lg text-zinc-600 mb-6">
              Since 2006, Elite Welding has been providing top-quality welding and metal fabrication 
              services to residential, commercial, and industrial clients. Our team of certified 
              welders brings decades of combined experience to every project.
            </p>
            <p className="text-lg text-zinc-600 mb-8">
              We pride ourselves on delivering exceptional craftsmanship, meeting deadlines, and 
              maintaining the highest safety standards. No job is too big or too small – from custom 
              metal artwork to large-scale industrial projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-zinc-700">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
