import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Professional Cleaning Services in{" "}
              <span className="text-blue-600">Toronto</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the difference with CleanPro Toronto. We provide top-quality cleaning services
              for homes and businesses across the Greater Toronto Area. Professional, reliable, and thorough.
            </p>
            
            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Eco-Friendly Cleaning Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">Same-Day Service Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToBooking} className="text-lg px-8">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToBooking} className="text-lg px-8">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1663602003573-d2a029baa5fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMENOJTIwdG93ZXJ8ZW58MXx8fHwxNzc1NDc2Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Toronto Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Proudly Serving Toronto</h3>
                <p className="text-white/90">Your trusted local cleaning experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
