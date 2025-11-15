"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vybraa – Africa&apos;s First Fan-Commerce Engine</title>
        <meta
          name="description"
          content="Connect directly with your favorite African artists through personalized videos, exclusive content, and unforgettable experiences. Book one-on-one moments that matter."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/jpeg/logo.jpeg"
                alt="Vybraa Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
            </motion.div>
            <motion.div
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#features"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#ui-preview"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                App Preview
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#F7B708]/10 via-white to-[#2e022e]/5 pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7B708] via-white to-[#fff] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#2e022e] leading-tight">
                  Africa&apos;s First
                  <span className="text-[#F7B708]"> Fan-Commerce</span>
                  Engine
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Connect directly with your favorite African artists through
                  personalized videos, exclusive content, and unforgettable
                  experiences. Book one-on-one moments that matter.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#waitlist"
                    className="bg-[#F7B708] text-black font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    Join the Waitlist
                  </a>
                  <a
                    href="#ui-preview"
                    className="bg-[#2e022e] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    See App Preview
                  </a>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Coming to iOS & Android
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Free to Download
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative bg-gradient-to-br from-[#2e022e] to-[#4a0e4a] rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                      <div className="text-xs text-gray-500">Vybraa App</div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-[#F7B708]/10 rounded-lg p-4">
                        <h3 className="font-semibold text-[#2e022e] mb-2">
                          Personalized Video
                        </h3>
                        <p className="text-sm text-gray-600">
                          Get a custom video from your favorite artist
                        </p>
                      </div>
                      <div className="bg-[#2e022e]/5 rounded-lg p-4">
                        <h3 className="font-semibold text-[#2e022e] mb-2">
                          Live Sessions
                        </h3>
                        <p className="text-sm text-gray-600">
                          Book one-on-one video calls
                        </p>
                      </div>
                      <div className="bg-[#F7B708]/10 rounded-lg p-4">
                        <h3 className="font-semibold text-[#2e022e] mb-2">
                          Exclusive Content
                        </h3>
                        <p className="text-sm text-gray-600">
                          Access special behind-the-scenes content
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e022e]">
                Why Choose Vybraa?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of fan-artist interaction with our
                innovative platform designed specifically for African
                entertainment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Video Messages",
                  desc: "Get custom video shoutouts from your favorite African artists for birthdays, celebrations, or special moments. Each video is unique and personal.",
                  icon: "🎤",
                  features: [
                    "Custom requests",
                    "HD quality",
                    "Quick delivery",
                    "Personal touch",
                  ],
                },
                {
                  title: "Live Video Sessions",
                  desc: "Book one-on-one video calls with artists for private conversations, mini-performances, or exclusive Q&A sessions.",
                  icon: "📹",
                  features: [
                    "Real-time interaction",
                    "Scheduled sessions",
                    "Private & secure",
                    "Recorded option",
                  ],
                },
                {
                  title: "Exclusive Merchandise",
                  desc: "Own signed items, limited edition merchandise, and personal belongings from your favorite artists with authenticity guaranteed.",
                  icon: "🎁",
                  features: [
                    "Authentic signatures",
                    "Limited editions",
                    "Secure shipping",
                    "Certificate of authenticity",
                  ],
                },
                {
                  title: "Behind-the-Scenes Content",
                  desc: "Access exclusive content including studio sessions, rehearsals, and personal moments that fans never get to see.",
                  icon: "🎬",
                  features: [
                    "Exclusive access",
                    "High-quality content",
                    "Regular updates",
                    "Fan-only content",
                  ],
                },
                {
                  title: "Event Experiences",
                  desc: "Get VIP access to concerts, meet-and-greets, and exclusive events with your favorite artists across Africa.",
                  icon: "🎪",
                  features: [
                    "VIP access",
                    "Meet & greets",
                    "Photo opportunities",
                    "Exclusive events",
                  ],
                },
                {
                  title: "Community Features",
                  desc: "Connect with other fans, share experiences, and be part of exclusive fan communities for each artist.",
                  icon: "👥",
                  features: [
                    "Fan communities",
                    "Experience sharing",
                    "Exclusive groups",
                    "Social features",
                  ],
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#2e022e] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 bg-[#F7B708] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e022e]">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with Vybraa is simple. Follow these easy steps
                to connect with your favorite artists.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Download & Sign Up",
                  desc: "Download the Vybraa app from your app store and create your account in minutes.",
                  icon: "📱",
                },
                {
                  step: "02",
                  title: "Browse Artists",
                  desc: "Explore our curated list of African artists and discover their available services.",
                  icon: "🔍",
                },
                {
                  step: "03",
                  title: "Book Your Experience",
                  desc: "Choose your preferred service, select a time slot, and make your booking.",
                  icon: "📅",
                },
                {
                  step: "04",
                  title: "Enjoy & Connect",
                  desc: "Receive your personalized content or join your live session with the artist.",
                  icon: "✨",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F7B708] to-[#fce580] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2e022e] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2e022e] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* UI Preview Section */}
        <section
          id="ui-preview"
          className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#2e022e] to-[#4a0e4a] text-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                App Preview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take a sneak peek at the Vybraa app interface and see how easy
                it is to connect with your favorite artists.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#F7B708]">
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-[#F7B708] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Intuitive Artist Discovery
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Browse and search through verified African artists
                          with detailed profiles and service offerings.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-[#F7B708] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Secure Booking System
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Book services with confidence using our secure payment
                          system and scheduling interface.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-[#F7B708] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Real-time Notifications
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Stay updated with push notifications for bookings,
                          messages, and new content from artists.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-[#F7B708] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          High-Quality Video Player
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Enjoy your personalized videos and live sessions with
                          our optimized video player.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Mock Phone Frame */}
                  <div className="relative bg-black rounded-[3rem] p-4 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-[#2e022e] text-white px-6 py-3 flex justify-between items-center text-sm">
                        <span>9:41</span>
                        <span>Vybraa</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="p-6 space-y-4">
                        <div className="text-center mb-6">
                          <h3 className="text-lg font-bold text-[#2e022e]">
                            Featured Artists
                          </h3>
                        </div>

                        {/* Artist Cards */}
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-[#F7B708]/10 to-[#2e022e]/5 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-[#F7B708] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">A</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-[#2e022e]">
                                  Artist Name
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Music • Available Now
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-bold text-[#F7B708]">
                                  $25
                                </p>
                                <p className="text-xs text-gray-500">
                                  per video
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-[#2e022e]/5 to-[#F7B708]/10 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-[#2e022e] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">B</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-[#2e022e]">
                                  Another Artist
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Comedy • Live Session
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-bold text-[#F7B708]">
                                  $50
                                </p>
                                <p className="text-xs text-gray-500">
                                  per hour
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-4">
                          <button className="flex-1 bg-[#F7B708] text-black font-bold py-3 rounded-lg text-sm">
                            Book Now
                          </button>
                          <button className="flex-1 bg-[#2e022e] text-white font-bold py-3 rounded-lg text-sm">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F7B708] rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="waitlist"
          className="bg-gradient-to-br from-[#F7B708] via-[#fce580] to-white text-[#2e022e] py-24 px-6 md:px-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to Connect with Your
                  <span className="text-[#2e022e]"> Favorite Artists?</span>
                </h3>

                <p className="text-lg md:text-xl mb-8 text-[#2e022e]/90 leading-relaxed">
                  Join thousands of fans who are already on the waitlist. Be the
                  first to experience personalized connections with African
                  artists when Vybraa launches.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#2e022e] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#2e022e] font-medium">
                      Early access to the app
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#2e022e] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#2e022e] font-medium">
                      Exclusive launch discounts
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#2e022e] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#2e022e] font-medium">
                      Priority booking for popular artists
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/waitlist"
                    className="bg-[#2e022e] text-white py-4 px-8 rounded-lg font-bold hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    Join the Waitlist
                  </a>
                  <a
                    href="#ui-preview"
                    className="bg-white text-[#2e022e] border-2 border-[#2e022e] py-4 px-8 rounded-lg font-bold hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    See App Preview
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2e022e] mb-6 text-center">
                    Join the Waitlist
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B708] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I&apos;m interested in
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B708] focus:border-transparent"
                        aria-label="Select your area of interest"
                      >
                        <option>Personalized Videos</option>
                        <option>Live Sessions</option>
                        <option>Exclusive Merchandise</option>
                        <option>All Services</option>
                      </select>
                    </div>

                    <button className="w-full bg-[#F7B708] text-black font-bold py-3 rounded-lg hover:bg-[#fce580] transition-colors">
                      Get Early Access
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We&apos;ll notify you as soon as Vybraa is available in your
                    region.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section
          id="contact"
          className="bg-gradient-to-br from-gray-50 to-white py-24 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e022e]">
                Get in Touch
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about Vybraa? We&apos;d love to hear from you.
                Reach out to us through any of these channels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F7B708] to-[#fce580] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📍</span>
                </div>
                <h4 className="text-xl font-bold text-[#2e022e] mb-4">
                  Visit Us
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  06 Tawakalitu Olabisi Lane
                  <br />
                  Lekki, Lagos
                  <br />
                  Nigeria
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F7B708] to-[#fce580] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📞</span>
                </div>
                <h4 className="text-xl font-bold text-[#2e022e] mb-4">
                  Call Us
                </h4>
                <a
                  href="tel:+2349068018564"
                  className="text-lg text-gray-600 hover:text-[#F7B708] transition-colors font-medium"
                >
                  +234 906 801 8564
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Mon-Fri 9AM-6PM WAT
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F7B708] to-[#fce580] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">✉️</span>
                </div>
                <h4 className="text-xl font-bold text-[#2e022e] mb-4">
                  Email Us
                </h4>
                <a
                  href="mailto:support@vybraa.com"
                  className="text-lg text-gray-600 hover:text-[#F7B708] transition-colors font-medium break-all"
                >
                  support@vybraa.com
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  We respond within 24 hours
                </p>
              </motion.div>
            </div>

            {/* Additional Contact Info */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-r from-[#F7B708]/10 to-[#2e022e]/5 rounded-2xl p-8 max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold text-[#2e022e] mb-4">
                  Partnership & Business Inquiries
                </h4>
                <p className="text-gray-600 mb-6">
                  Are you an artist interested in joining Vybraa? Or do you have
                  a business partnership opportunity? We&apos;d love to discuss
                  how we can work together to revolutionize fan-artist
                  connections in Africa.
                </p>
                <a
                  href="mailto:support@vybraa.com?subject=Partnership Inquiry"
                  className="inline-block bg-[#2e022e] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#4a0e4a] transition-colors"
                >
                  Send Partnership Inquiry
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2e022e] text-white py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <Image
                    src="/jpeg/logo.jpeg"
                    alt="Vybraa Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="text-xl font-bold">Vybraa</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Africa&apos;s first fan-commerce engine connecting fans with
                  their favorite artists through personalized experiences.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Personalized Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Live Sessions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Exclusive Merchandise
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Behind-the-Scenes
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="#how-it-works"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ui-preview"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      App Preview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/waitlist"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Join Waitlist
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="/terms"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>06 Tawakalitu Olabisi Lane</p>
                  <p>Lekki, Lagos, Nigeria</p>
                  <p>
                    <a
                      href="tel:+2349068018564"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      +234 906 801 8564
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:support@vybraa.com"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      support@vybraa.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Vybraa. Built for the
                heartbeat of Africa. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
