import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown Toronto",
    rating: 5,
    text: "CleanPro Toronto has been cleaning our condo for over a year now. They're always punctual, professional, and do an amazing job. Our home has never looked better!",
    date: "March 2026"
  },
  {
    name: "Michael Chen",
    location: "North York",
    rating: 5,
    text: "We use CleanPro for our office cleaning and they're fantastic. The team is thorough, respectful, and always goes above and beyond. Highly recommend!",
    date: "February 2026"
  },
  {
    name: "Emily Rodriguez",
    location: "Scarborough",
    rating: 5,
    text: "I needed a deep clean before moving into my new home. CleanPro did an incredible job - every corner was spotless! The pricing was fair and the service was excellent.",
    date: "January 2026"
  },
  {
    name: "David Thompson",
    location: "Etobicoke",
    rating: 5,
    text: "As a busy professional, having CleanPro come bi-weekly has been a lifesaver. They're reliable, trustworthy, and do exceptional work. Worth every penny!",
    date: "March 2026"
  },
  {
    name: "Jennifer Lee",
    location: "Mississauga",
    rating: 5,
    text: "The best cleaning service in Toronto! They use eco-friendly products which was important to us with young kids. Professional team and outstanding results every time.",
    date: "February 2026"
  },
  {
    name: "Robert Williams",
    location: "Vaughan",
    rating: 5,
    text: "We've tried several cleaning companies over the years, but CleanPro Toronto is by far the best. Consistent quality, friendly staff, and great communication.",
    date: "January 2026"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients across the
            Greater Toronto Area.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-blue-600 text-blue-600" />
            <span className="font-semibold text-gray-900">4.9/5.0</span>
            <span className="text-gray-600">Average Rating from 500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
