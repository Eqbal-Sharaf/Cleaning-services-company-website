import { Home, Building2, Sparkles, Package } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Professional home cleaning services tailored to your needs. From regular maintenance to deep cleaning, we keep your home spotless.",
    image: "https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzc1NDYzMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Weekly/Bi-weekly/Monthly", "Deep Cleaning", "Kitchen & Bathrooms", "Dusting & Vacuuming"]
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Keep your workplace pristine with our comprehensive commercial cleaning services. Perfect for offices, retail spaces, and more.",
    image: "https://images.unsplash.com/photo-1762235634143-6d350fe349e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb21tZXJjaWFsJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzc1NDg5MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Office Spaces", "After-Hours Service", "Floor Care", "Restroom Sanitization"]
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning for every corner of your space. Perfect for spring cleaning, post-renovation, or whenever you need that extra shine.",
    image: "https://images.unsplash.com/photo-1714058973555-a255930b9a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwY2xlYW5pbmclMjBiYXRocm9vbXxlbnwxfHx8fDE3NzU0ODkxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Detailed Scrubbing", "Hard-to-Reach Areas", "Appliance Cleaning", "Grout & Tile"]
  },
  {
    icon: Package,
    title: "Move In/Out Cleaning",
    description: "Make moving stress-free with our thorough move in/out cleaning. We ensure your old or new place is immaculate.",
    image: "https://images.unsplash.com/photo-1585458808362-e5b83a52178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZlJTIwb3V0JTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc3NTQ4OTEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Walls & Baseboards", "Inside Cabinets", "Window Cleaning", "Carpet Cleaning"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Cleaning Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential to commercial, we offer a full range of professional cleaning services
            to meet all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
