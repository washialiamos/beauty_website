import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Clients', color: 'rose' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'pink' },
    { icon: Heart, value: '98%', label: 'Satisfaction Rate', color: 'purple' },
    { icon: Sparkles, value: '50+', label: 'Beauty Awards', color: 'indigo' }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Aesthetician",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Facial Treatments", "Skin Analysis", "Anti-Aging"]
    },
    {
      name: "Maria Rodriguez",
      role: "Hair Stylist",
      image: "https://images.pexels.com/photos/3985368/pexels-photo-3985368.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Color Expert", "Bridal Styling", "Hair Extensions"]
    },
    {
      name: "Emma Davis",
      role: "Makeup Artist",
      image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Bridal Makeup", "Editorial Looks", "Color Matching"]
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
      rose: 'from-rose-500 to-pink-500',
      pink: 'from-pink-500 to-rose-500',
      purple: 'from-purple-500 to-pink-500',
      indigo: 'from-indigo-500 to-purple-500'
    };
    return colors[color as keyof typeof colors] || colors.rose;
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            About Omwami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that beauty is an art form, Omwami has been transforming lives through exceptional beauty services for over 15 years. Our passion for perfection and commitment to excellence makes us the premier destination for all your beauty needs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${getColorClasses(stat.color)} mb-4 transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div 
          data-index="4"
          className={`bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-20 transform transition-all duration-700 ${
            visibleItems.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Omwami, we believe that every person deserves to feel confident and beautiful in their own skin. Our mission is to provide exceptional beauty services that not only enhance your natural features but also boost your confidence and well-being.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine traditional beauty techniques with cutting-edge innovations, using only the finest products and equipment to deliver results that exceed expectations.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented professionals are passionate about beauty and dedicated to helping you look and feel your absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const teamIndex = index + 5;
            const isVisible = visibleItems.includes(teamIndex);
            
            return (
              <div
                key={index}
                data-index={teamIndex}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-rose-500 font-medium mb-4">{member.role}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 font-medium">Specialties:</p>
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                        {specialty}
                      </div>
                    ))}
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

export default About;