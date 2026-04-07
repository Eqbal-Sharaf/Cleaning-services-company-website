import { CheckCircle2, Leaf, DollarSign, HeadphonesIcon, Shield, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reasons = [
  {
    icon: CheckCircle2,
    title: "100% Satisfaction Guarantee",
    description: "We stand behind our work. If you're not completely satisfied, we'll come back and make it right at no extra charge."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use environmentally safe, non-toxic cleaning products that are safe for your family, pets, and the planet."
  },
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "All our team members are fully insured and background-checked for your peace of mind and security."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Get premium cleaning services at fair, transparent prices with no hidden fees. Free quotes available."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Our friendly customer service team is always available to answer questions and accommodate your needs."
  },
  {
    icon: ThumbsUp,
    title: "Experienced Team",
    description: "Our professional cleaners have years of experience and undergo continuous training to deliver exceptional results."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            The CleanPro Difference
          </h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We're not just another cleaning company. Here's what sets us apart and makes us
            Toronto's preferred choice for professional cleaning services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-blue-100 mb-6">
            Ready to experience the best cleaning service in Toronto?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}
