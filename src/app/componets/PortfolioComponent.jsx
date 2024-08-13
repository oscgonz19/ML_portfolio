import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Unstructured Notebooks',
    description: 'Un conjunto de notebooks para el análisis de datos no estructurados. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/unsu.png',
    link: 'https://github.com/oscgonz19/unstructured_notebooks',
    highlights: [
      'Developed a comprehensive PyTorch / HuggingFace text classification pipeline',
      'Built multiple transformers including BERT and RoBERTa with custom pooling layers',
      'Implemented an interactive web app for custom text reading complexity estimation'
    ],
    tags: ['natural language processing', 'deep learning', 'web app'],
    category: 'Machine Learning'
  },
  {
    title: 'Exposing Bias in Credit Germany',
    description: 'Analysis of credit bias in the German credit dataset using various machine learning techniques.',
    imageUrl: '/unsu.png',
    link: 'https://github.com/oscgonz19/unstructured_notebooks',
    highlights: [
      'Analyzed bias using logistic regression and decision trees',
      'Explored data preprocessing techniques to handle missing data',
      'Developed visualizations to illustrate the impact of bias'
    ],
    tags: ['data analysis', 'machine learning', 'bias detection'],
    category: 'Data Science'
  },
  {
    title: 'ML Portfolio',
    description: 'A collection of data science projects that I have worked on over the years.',
    imageUrl: '/wallpaperwebMLgithub.jpg',
    link: 'https://github.com/oscgonz19/ML_portfolio',
    highlights: [
      'Implemented a variety of machine learning algorithms from scratch',
      'Developed a custom data pipeline for data preprocessing and model evaluation',
      'Created a web app for interactive model training and testing'
    ],
    tags: ['machine learning', 'data analysis', 'web app'],
    category:'Software Developer'
  }

  
  // Agrega más proyectos aquí...
];

const categoryBackgrounds = {
  "Machine Learning": "bg-cyan-950",
  "Data Science": "bg-green-800",
  "Software Developer": "bg-red-900",
};

export default function PortfolioComponent() {
  const [selectedCategory, setSelectedCategory] = useState("Machine Learning");

  const renderProjects = () => {
    return projects
      .filter(project => project.category === selectedCategory)
      .map((project, index) => (
        <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg text-black">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-md"
            />
          </div>
          <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
          <p className="text-lg mb-4">{project.description}</p>
          <ul className="mb-4">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="list-disc ml-5 text-sm">{highlight}</li>
            ))}
          </ul>
          <div className="mb-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">{tag}</span>
            ))}
          </div>
          <Link href={project.link} legacyBehavior>
            <a className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800">
              Learn more
            </a>
          </Link>
        </div>
      ));
  };

  return (
    <section className={`${categoryBackgrounds[selectedCategory]} text-gray-800 py-10 transition-colors duration-500`}>
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-semibold font-sans mb-4 text-center text-white">Explore Projects</h1>
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setSelectedCategory("Machine Learning")}
            className={`px-4 py-2 mx-2 rounded-lg font-semibold ${selectedCategory === "Machine Learning" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setSelectedCategory("Data Science")}
            className={`px-4 py-2 mx-2 rounded-lg font-semibold ${selectedCategory === "Data Science" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Data Science
          </button>
          <button
            onClick={() => setSelectedCategory("Software Developer")}
            className={`px-4 py-2 mx-2 rounded-lg font-semibold ${selectedCategory === "Software Developer" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Software Development
          </button>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects()}
        </div>        
      </div>
    </section>
  );
}
