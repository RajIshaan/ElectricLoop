'use client'

import Header from '@/components/Header'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            About ElectricLoop
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Transforming e-waste into value through innovation and sustainability
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              ElectricLoop is a smart e-waste marketplace that revolutionizes how we handle electronic waste. 
              We connect individuals and businesses who want to sell their old electronics with buyers who 
              need refurbished devices or raw materials. Our AI-powered platform makes it easy to estimate 
              value, find the right buyers, and contribute to a circular economy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">1. List Your Device</h3>
                <p className="text-gray-600">
                  Upload photos and details of your electronic device. Our platform makes it simple 
                  to create listings with all the necessary information.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">2. AI Valuation</h3>
                <p className="text-gray-600">
                  Our AI analyzes your device and provides an instant valuation estimate. Get insights 
                  into the device's condition, potential refurbishment value, and material worth.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">3. Multiple Sales Channels</h3>
                <p className="text-gray-600">
                  Your device can be sold through various channels: refurbishment companies, manufacturers 
                  needing raw materials, or direct sales to consumers. We find the best match for maximum value.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-2">4. Logistics & Tracking</h3>
                <p className="text-gray-600">
                  We handle pickup and delivery logistics. Track your device through the entire process, 
                  from collection to refurbishment, resale, or recycling.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why ElectricLoop?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">For Sellers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Earn money from devices you'd otherwise discard</li>
                  <li>• Instant AI-powered valuation</li>
                  <li>• Multiple buyer options for best prices</li>
                  <li>• Easy listing and management</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">For Buyers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access to affordable refurbished devices</li>
                  <li>• Raw materials for manufacturing</li>
                  <li>• Support sustainability initiatives</li>
                  <li>• Quality-assured products</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Impact</h2>
            <p className="text-gray-600 mb-6">
              Every year, millions of tons of electronic waste end up in landfills, causing environmental 
              damage and wasting valuable materials. ElectricLoop promotes a circular economy by:
            </p>
            <ul className="space-y-3 text-gray-600 mb-12">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Reducing e-waste in landfills</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Extending device lifespans through refurbishment</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Recovering valuable materials for reuse</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Supporting sustainable manufacturing practices</span>
              </li>
            </ul>

            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Movement</h3>
              <p className="text-gray-600 mb-6">
                Be part of the solution. Start selling or buying today and make a positive impact on the environment.
              </p>
              <a href="/signup" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

