import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
    title: 'Automated Financial Analysis using LLM and RAG Techniques',
    description: ' This project leverages advanced techniques in Language Learning Models (LLM) and Retrieval-Augmented Generation (RAG) to streamline and enhance the analysis of financial reports, specifically 10-K and 10-Q filings.',
    imageUrl: '/financialAnalisis.jpg',
    link: 'https://github.com/oscgonz19/Automated-Financial-Analysis-LLM-RAG',
    highlights: [
      'A project that uses LLM and RAG techniques to automate financial analysis.',
      'Aims to streamline and enhance the analysis of financial reports.',
      'Specifically focuses on 10-K and 10-Q filings.'
    ],
    tags: ['Machine Learning', 'Unstructured Data', 'Financial Analysis'],
    category: 'Machine Learning'
    
  },
  {
    title: "Analysis of Machine Learning Models for Breast Cancer Classification",
    description: 'This project compares the performance of supervised and unsupervised machine learning techniques for breast cancer detection. It uses the Wisconsin Breast Cancer dataset to train and evaluate the models.',
    imageUrl: '/pexels-cottonbro.jpg',
    link: 'https://github.com/oscgonz19/BreastCancerDetection/blob/main/AprendizajeSupervisado_NoSupervisado.ipynb',
    highlights: [
      'A project that compares supervised and unsupervised machine learning techniques.',
      'Uses the Wisconsin Breast Cancer dataset to train and evaluate the models.'
    ],
    tags: ['Machine Learning', 'Breast Cancer Detection', 'Supervised Learning', 'Unsupervised Learning'],
    category: 'Machine Learning'
  },

  {
    title: 'COMPAS: Exploring Bias in Criminal Profiling Management',
    description: 'Analyzed bias in criminal profiling management using the COMPAS dataset. Explored data preprocessing techniques to handle missing data and developed visualizations to illustrate the impact of bias.',
    imageUrl: '/compas.jpg',
    link: 'https://github.com/oscgonz19/fair_scoring_AIF360/blob/main/compass_bias_%26_fairness.ipynb',
    highlights: [
      'Analyzed bias in criminal profiling management using the COMPAS dataset',
      'Explored data preprocessing techniques to handle missing data',
      'Developed visualizations to illustrate the impact of bias'
    ],
    tags: ['data analysis', 'machine learning', 'bias detection'],
    category: 'Data Science'
  },
  {
    title: 'Monitoring the Financial Market of Psychedelics and Cannabis Using AI',
    description: 'This project uses Langchain to monitor the financial market of psychedelics and cannabis using AI. It leverages OpenAI API and NewsAPI to analyze financial news and provide insights.',
    imageUrl: '/cannabisnews.jpg',
    link: 'https://github.com/oscgonz19/PsyCannaFinance',
    highlights: [
      "Langchain for financial news analysis using OpenAI api and NewsAPI",
      "Exploratory data analysis and visualization for insights",
    ],
    tags: ['LangChain', 'OpenAI', 'Financial News'],
    category: 'Data Science'
  },
  {
    title: 'ML Portfolio built with Next.js and Tailwind CSS',
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
  },
  {
    title: 'CRUD application built with NestJs',
    description: 'A simple CRUD application built with NestJs and PostgreSQL.',
    imageUrl: '/nestjs.jpg',
    link: 'https://github.com/oscgonz19/CRUD-NestJs-firstProject-scheme"',
    highlights: [
      'A progressive Node.js framework for building efficient and scalable server-side applications.',
      'Uses TypeScript, a superset of JavaScript that combines type checking and static analysis.',
      'Utilizes PostgreSQL, a powerful, open-source object-relational database system.'
    ],
    tags: ['NestJs', 'CRUD', 'Web App'],
    category: 'Software Developer'
  },


  
  // Agrega más proyectos aquí...
];

const categoryBackgrounds = {
  "Machine Learning": "bg-cyan-950",
  "Data Science": "bg-green-800",
  "Software Developer": "bg-red-900",
  "DataViz": "bg-purple-800",
  "Data Engineer": "bg-teal-700",
};

export default function PortfolioComponent() {
  const [selectedCategory, setSelectedCategory] = useState("Machine Learning");

  const renderProjects = () => {
    return projects
      .filter(project => project.category === selectedCategory)
      .map((project, index) => (
        <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg text-black flex flex-col h-full">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <ul className="mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="list-disc ml-5 text-sm">{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
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
          </div>
        </div>
      ));
  };

  return (
    <section className={`${categoryBackgrounds[selectedCategory]} text-gray-800 py-10 transition-colors duration-500`}>
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-semibold font-sans mb-4 text-center text-white">Explore Projects</h1>
        <div className="flex justify-center items-center mb-10 flex-wrap">
          <button
            onClick={() => setSelectedCategory("Machine Learning")}
            className={`px-4 py-2 mx-2 my-1 rounded-lg font-semibold ${selectedCategory === "Machine Learning" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setSelectedCategory("Data Science")}
            className={`px-4 py-2 mx-2 my-1 rounded-lg font-semibold ${selectedCategory === "Data Science" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Data Science
          </button>
          <button
            onClick={() => setSelectedCategory("Data Engineer")}
            className={`px-4 py-2 mx-2 my-1 rounded-lg font-semibold ${selectedCategory === "Data Engineer" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          >
            Data Engineer
          </button>
            <button
            onClick={() => setSelectedCategory("Software Developer")}
            className={`px-4 py-2 mx-2 my-1 rounded-lg font-semibold ${selectedCategory === "Software Developer" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
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