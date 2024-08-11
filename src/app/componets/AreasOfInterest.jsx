'use client';

import { FaCloud, FaLanguage, FaRobot,FaServer, FaRocket, FaChartBar, FaChartPie, FaLaptopCode, FaCode, FaChess, FaCodepen } from 'react-icons/fa';

const areasOfInterest = [
  {
    title: 'Cloud Compute',
    description: 'I maintain servers for database storage, model training, and model deployment.',
    icon: <FaCloud className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'AI',
    description: 'I have worked with researchers to apply NLP techniques to make sense of the motivations behind human interactions.',
    icon: <FaLanguage className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Machine Learning Operations',
    description: 'Machine learning is more than an API call to scikit-learn. I love the math and theory as well as the implementation.',
    icon: <FaRobot className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },

    {
    title: 'Deep Learning',
    description: 'I regularly extract data from Hadoop databases using the Hive framework.',
    icon: <FaCodepen  className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Model Deployment',
    description: 'I implement machine learning models in real world production systems using REST APIs.',
    icon: <FaRocket className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'FinTech',
    description: 'I love telling a story. Making a beautiful and compelling presentation is one of my favorite skills.',
    icon: <FaChartBar className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Game Theory',
    description: 'I develop strategies to protect systems and networks from cyber attacks.',
    icon: <FaChess className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Data Science',
    description: 'I analyze complex data sets to extract valuable insights and drive decision-making.',
    icon: <FaLaptopCode className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Software Developer',
    description: 'I write and maintain code for various applications, ensuring functionality and performance.',
    icon: <FaCode className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  // Agrega más áreas según sea necesario
];

export default function AreasOfInterest() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">Focus Areas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasOfInterest.map((area, index) => (
            <div key={index} className="text-center p-8 border border-gray-600 rounded-lg shadow-lg">
              {area.icon}
              <h3 className="text-gray-700 text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
