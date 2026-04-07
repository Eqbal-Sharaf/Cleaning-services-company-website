import { Award, Shield, Clock, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1742483359033-13315b247c74?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional Cleaning Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl mt-12">
                <img
                  src="https://images.unsplash.com/photo-1648475236583-2e25a6cbf3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU0MTI2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Clean Modern Home"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-6 rounded-xl shadow-2xl z-10">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                About CleanPro Toronto
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Toronto's Most Trusted Cleaning Service
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Since 2011, CleanPro Toronto has been delivering exceptional cleaning services to
                homes and businesses across the Greater Toronto Area. Our commitment to quality,
                reliability, and customer satisfaction has made us the preferred choice for
                thousands of satisfied clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on our attention to detail, professional staff, and eco-friendly
                cleaning solutions. Whether you need regular home cleaning, deep cleaning, or
                commercial services, we have the expertise and equipment to exceed your expectations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Certified Professionals</h4>
                <p className="text-sm text-gray-600">All staff are trained and certified</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Fully Insured</h4>
                <p className="text-sm text-gray-600">Complete liability coverage</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                <p className="text-sm text-gray-600">Book at your convenience</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">5000+ Clients</h4>
                <p className="text-sm text-gray-600">Trusted by thousands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}