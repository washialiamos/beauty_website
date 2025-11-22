import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Clock, Award, Users } from 'lucide-react';

const Services: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Rejuvenating facial treatments using premium skincare products for glowing, healthy skin.",
      features: ["Deep Cleansing", "Anti-Aging", "Hydrating Masks", "Custom Solutions"],
      price: "From $120",
      duration: "60-90 min",
      color: "rose"
    },
    {
      icon: Award,
      title: "Hair Styling",
      description: "Professional hair cutting, coloring, and styling services for every occasion.",
      features: ["Cuts & Trims", "Color Services", "Special Events", "Hair Treatments"],
      price: "From $80",
      duration: "45-120 min",
      color: "pink"
    },
    {
      icon: Users,
      title: "Makeup Artistry",
      description: "Expert makeup application for weddings, events, or your daily beauty routine.",
      features: ["Bridal Makeup", "Event Looks", "Makeup Lessons", "Product Consultation"],
      price: "From $100",
      duration: "30-90 min",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Nail Services",
      description: "Complete nail care including manicures, pedicures, and artistic nail designs.",
      features: ["Manicures", "Pedicures", "Gel Polish", "Nail Art"],
      price: "From $50",
      duration: "30-60 min",
      color: "indigo"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      rose: 'from-rose-500 to-pink-500 group-hover:from-rose-600 group-hover:to-pink-600',
      pink: 'from-pink-500 to-rose-500 group-hover:from-pink-600 group-hover:to-rose-600',
      purple: 'from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600',
      indigo: 'from-indigo-500 to-purple-500 group-hover:from-indigo-600 group-hover:to-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.rose;
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our comprehensive range of beauty services, each designed to enhance your natural radiance and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(service.color)} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-lg font-bold text-rose-600">{service.price}</p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <button className={`px-6 py-2 rounded-full bg-gradient-to-r ${getColorClasses(service.color)} text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;