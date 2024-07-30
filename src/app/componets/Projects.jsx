'use client';

import Link from 'next/link';
import Image from 'next/image';

// Actualiza los proyectos con categorías
const projects = [
  {
    title: 'Unstructured Notebooks',
    description: 'Un conjunto de notebooks para el análisis de datos no estructurados. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/unsu.png',
    link: 'https://github.com/oscgonz19/unstructured_notebooks',
    highlights: [
      'Developed a comprehensive PyTorch / HuggingFace text classification pipeline',
      'Build multiple transformers including BERT and RoBERTa with custom pooling layers',
      'Implemented an interactive web app for custom text reading complexity estimation'
    ],
    tags: ['natural language processing', 'deep learning', 'web app'],
    category: 'Machine Learning'
  },
   {
    title: 'Unstructured Notebooks',
    description: 'Un conjunto de notebooks para el análisis de datos no estructurados. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/unsu.png',
    link: 'https://github.com/oscgonz19/unstructured_notebooks',
    highlights: [
      'Developed a comprehensive PyTorch / HuggingFace text classification pipeline',
      'Build multiple transformers including BERT and RoBERTa with custom pooling layers',
      'Implemented an interactive web app for custom text reading complexity estimation'
    ],
    tags: ['natural language processing', 'deep learning', 'web app'],
    category: 'Machine Learning'
  },
   {
    title: 'Unstructured Notebooks',
    description: 'Un conjunto de notebooks para el análisis de datos no estructurados. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/unsu.png',
    link: 'https://github.com/oscgonz19/unstructured_notebooks',
    highlights: [
      'Developed a comprehensive PyTorch / HuggingFace text classification pipeline',
      'Build multiple transformers including BERT and RoBERTa with custom pooling layers',
      'Implemented an interactive web app for custom text reading complexity estimation'
    ],
    tags: ['natural language processing', 'deep learning', 'web app'],
    category: 'Machine Learning'
  },
  {
    title: 'Exposing Bias in Credic Germany',
    description: 'Un conjunto de notebooks para el análisis de datos no estructurados. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/unsu.png',
    link: 'https://github.com/oscgonz19/unstructured_notebooks',
    highlights: [
      'Developed a comprehensive PyTorch / HuggingFace text classification pipeline',
      'Build multiple transformers including BERT and RoBERTa with custom pooling layers',
      'Implemented an interactive web app for custom text reading complexity estimation'
    ],
    tags: ['natural language processing', 'deep learning', 'web app'],
    category: 'Data Science'
  }

  // Agrega más proyectos según sea necesario
];

// Función para renderizar proyectos por categoría
const renderProjectsByCategory = (category) => {
  return projects
    .filter(project => project.category === category)
    .map((project, index) => (
      <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg text-black">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
        <p className="text-lg mb-4">{project.description}</p>
        <h4 className="text-xl font-bold mb-2">Highlights</h4>
        <ul className="list-disc pl-5 mb-4">
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
        <div className="mb-4">
          <span className="font-bold">Tags: </span>
          {project.tags.join(', ')}
        </div>
        <Link href={project.link}>
          <span
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Proyecto
          </span>
        </Link>
      </div>
    ));
};

export default function Projects() {
  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-semibold mb-4 text-center">Featured articles</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {renderProjectsByCategory('Machine Learning')}
        </div>
      </div>
    </section>
  );
}

      
