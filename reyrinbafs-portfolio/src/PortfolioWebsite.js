import React from 'react';
import { Layers, Target, Clock, Palette, Share2, Rocket, Shield, Heart } from 'lucide-react';

const PortfolioWebsite = () => {
  const problems = [
    {
      icon: <Clock color="#FF6B6B" size={48} />,
      title: "Laggy/Slow Website",
      description: "Poor performance drives customers away and hurts user experience."
    },
    {
      icon: <Layers color="#4ECDC4" size={48} />,
      title: "Poor Packaging",
      description: "Inefficient packaging leads to product damage and distribution challenges."
    },
    {
      icon: <Palette color="#FF8F5E" size={48} />,
      title: "Bad Branding Design",
      description: "Weak design erodes brand trust and customer perception."
    },
    {
      icon: <Share2 color="#5D3FD3" size={48} />,
      title: "Inconsistent Social Media",
      description: "Lack of cohesive online presence reduces engagement and brand recognition."
    }
  ];

  const solutions = [
    {
      icon: <Shield color="#4ECDC4" size={48} />,
      title: "Building Brand Loyalty",
      description: "Fostering trust through consistent, high-quality interactions."
    },
    {
      icon: <Heart color="#FF6B6B" size={48} />,
      title: "Customer Loyalty",
      description: "Retaining customers through exceptional service and engagement."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Problems Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-pulse">
              Challenges Businesses Face 😱
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uncover the critical issues holding your brand back from success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {problem.icon}
                  <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">
              And Here's How Reyrinbafs Can Help!! 🚀
            </h2>
          </div>
        </section>

        {/* Solutions Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-50 animate-blob"></div>
                <div className="absolute inset-0 bg-purple-200 rounded-full opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Rocket size={200} className="text-blue-600 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition transform hover:scale-110 shadow-lg">
              Let's Transform Your Brand! 💡
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioWebsite;
