// page.tsx
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI solutions leveraging Machine Learning and Deep Learning for your business needs.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: "💻",
    },
    {
      title: "Chatbot Services",
      description: "Intelligent chatbots powered by advanced NLP for enhanced customer engagement.",
      icon: "💬",
    },
  ]

  return (
    <>
      <Hero />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge AI solutions and web technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions and web development expertise can help you achieve your goals.
            </p>
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}