'use client';

import { FaCloud, FaLanguage, FaRobot,FaMapMarkedAlt, FaRocket, FaChartBar, FaGlobe, FaLaptopCode, FaCode, FaChess, FaCodepen, FaMountain, FaBalanceScale } from 'react-icons/fa';

const areasOfInterest = [
  {
    title: 'Cloud Compute',
    description: 'Managing cloud servers for database storage, model training, and deploying models in production environments on Azure and AWS.',
    icon: <FaCloud className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'AI',
    description: 'Collaborating with researchers to apply AI techniques in the financial sector to understand and model human interactions and decision-making processes.',
    icon: <FaLanguage className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Machine Learning Operations',
    description: 'MLOps involves more than just an API call to scikit-learn; it encompasses the mathematics, theory, and practical implementation involved in the process.',
    icon: <FaRobot className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Deep Learning',
    description: 'Developing and training deep learning models, leveraging advanced frameworks and distributed computing resources.',
    icon: <FaCodepen className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Model Deployment',
    description: 'Integrating machine learning models into real-world production systems using REST APIs and scalable architectures.',
    icon: <FaRocket className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'FinTech',
    description: 'Analyzing financial data and developing predictive models to support decision-making in the financial sector, enhancing efficiency and mitigating risks.',
    icon: <FaChartBar className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Game Theory',
    description: 'Applying game theory to model and analyze strategic interactions in system optimization and decision-making.',
    icon: <FaChess className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Data Science',
    description: 'Extracting valuable insights from complex data sets through advanced statistical analysis and modeling techniques.',
    icon: <FaLaptopCode className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Software Development',
    description: 'Developing and maintaining software applications, ensuring functionality, performance, and scalability.',
    icon: <FaCode className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'Geospatial Analysis',
    description: 'Applying data science and machine learning techniques to analyze and interpret geospatial data for geological studies.',
    icon: <FaMapMarkedAlt className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
  {
    title: 'LLM Applications',
    description: 'Utilizing large language models (LLMs) to process and analyze reports, enhancing decision-making.',
    icon: <FaGlobe className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
   {
    title: 'Data Ethics and Governance',
    description: 'Ensuring responsible use of data through ethical practices and robust governance frameworks to protect privacy and integrity.',
    icon: <FaBalanceScale className="mx-auto mb-4 h-12 w-12 text-gray-700" />,
  },
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
