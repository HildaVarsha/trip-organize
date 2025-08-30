"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Globe,
  Shield,
  Award,
} from "lucide-react";

interface TripPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  highlights: string[];
}

interface Destination {
  name: string;
  image: string;
  packages: number;
}

const TripPlannerWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const destinations: Destination[] = [
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      packages: 45,
    },
    {
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      packages: 38,
    },
    {
      name: "Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
      packages: 32,
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
      packages: 28,
    },
    {
      name: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      packages: 25,
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      packages: 22,
    },
  ];

  const tripPackages: TripPackage[] = [
    {
      id: 1,
      title: "Romantic Bali Honeymoon",
      location: "Bali, Indonesia",
      duration: "6 Days 5 Nights",
      price: 45999,
      originalPrice: 55999,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      highlights: [
        "Private Villa Stay",
        "Couple Spa",
        "Sunset Dinner",
        "Cultural Tours",
      ],
    },
    {
      id: 2,
      title: "Thailand Adventure Tour",
      location: "Bangkok & Phuket",
      duration: "7 Days 6 Nights",
      price: 38999,
      originalPrice: 48999,
      rating: 4.6,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      highlights: [
        "Island Hopping",
        "Thai Cooking Class",
        "Temple Visits",
        "Beach Activities",
      ],
    },
    {
      id: 3,
      title: "Japan Cultural Experience",
      location: "Tokyo & Kyoto",
      duration: "8 Days 7 Nights",
      price: 89999,
      originalPrice: 109999,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
      highlights: [
        "Cherry Blossom Tour",
        "Traditional Ryokan",
        "Mount Fuji Visit",
        "Tea Ceremony",
      ],
    },
    {
      id: 4,
      title: "Maldives Luxury Escape",
      location: "Male, Maldives",
      duration: "5 Days 4 Nights",
      price: 125999,
      originalPrice: 145999,
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
      highlights: [
        "Overwater Villa",
        "Snorkeling",
        "Dolphin Watching",
        "Spa Treatments",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">
                TripCraft
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Packages
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Reviews
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Plan My Trip
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Destinations
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Packages
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                About Us
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Reviews
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Plan My Trip
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Create Your Perfect
              <span className="block text-yellow-300">Dream Vacation</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover amazing destinations, customize your itinerary, and
              create memories that last a lifetime
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="bg-transparent outline-none text-gray-700 flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <input
                    type="date"
                    className="bg-transparent outline-none text-gray-700 flex-1"
                  />
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <Users className="h-5 w-5 text-gray-500" />
                  <select className="bg-transparent outline-none text-gray-700 flex-1">
                    <option>2 Travelers</option>
                    <option>1 Traveler</option>
                    <option>3 Travelers</option>
                    <option>4+ Travelers</option>
                  </select>
                </div>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold">
                  Search Trips
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the world's most amazing places
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">
                      {destination.packages} packages
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Trip Packages
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked experiences for every type of traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tripPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{pkg.originalPrice! - pkg.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pkg.location}
                  </p>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700 ml-1">{pkg.rating}</span>
                    </div>
                    <span className="text-gray-500 ml-2">
                      ({pkg.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.slice(0, 2).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {pkg.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <div className="text-2xl font-bold text-orange-600">
                        ₹{pkg.price.toLocaleString()}
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose TripCraft?
            </h2>
            <p className="text-gray-600 text-lg">
              We make your travel dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                100% Safe & Secure
              </h3>
              <p className="text-gray-600">
                Your safety and security is our top priority with verified
                partners and secure payments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Award Winning Service
              </h3>
              <p className="text-gray-600">
                Recognized for excellence in travel planning with thousands of
                happy customers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support to assist you before, during,
                and after your trip
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our travel experts create the perfect itinerary for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold">
              Plan My Trip Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition duration-300 font-semibold">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">TripCraft</span>
              </div>
              <p className="text-gray-400 mb-4">
                Creating unforgettable travel experiences since 2020. Your
                journey, our passion.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trip Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@tripcraft.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Travel Street, Mumbai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TripCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TripPlannerWebsite;
