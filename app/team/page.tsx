'use client'

import Header from '@/components/Header'

const teamMembers = [
  {
    name: 'Sushen Sirohi',
    role: 'CEO & Co-Founder',
    bio: 'Former tech executive ',
    image: '👨‍💼'
  },
  {
    name: 'Ishaan Raj',
    role: 'CTO & Co-Founder',
    bio: 'Responsible for Resolving techinical aspects of the company',
    image: '👩‍💻'
  },
  {
    name: 'Sparsh Singh',
    role: 'Head of Operations',
    bio: 'Logistics and supply chain specialist with expertise in e-waste management and recycling.',
    image: '👨‍🔧'
  },
  {
    name: 'Rudransh Paliwal',
    role: 'Head of Sustainability',
    bio: 'Environmental scientist focused on circular economy and sustainable technology solutions.',
    image: '👩‍🔬'
  },
  {
    name: 'Sonesh',
    role: 'Lead Developer',
    bio: 'Full-stack developer passionate about building scalable platforms for social impact.',
    image: '👨‍💻'
  },
 // {
    //name: 'Lisa Park',
    //role: 'Head of Partnerships',
    //bio: 'Business development expert connecting manufacturers, refurbishers, and recyclers.',
    //image: '👩‍💼'
  //}
]

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Meet the passionate team building the future of e-waste management
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mt-1">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a passionate group of students driven to rethink how society handles electronic waste. Our mission is to design smart, accessible solutions that make e-waste recovery simple, transparent, and rewarding for everyone. We believe innovation and responsible technology can empower communities, protect the environment, and inspire a more sustainable digital future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Devices Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Tons Diverted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented individuals who share our passion for sustainability and innovation.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

