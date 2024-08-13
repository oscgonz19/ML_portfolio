import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: "La Nube que Todo lo Sostiene, IA y El Procesamiento Masivo de Datos",
    description: "Cada clic, cada scroll y cada compra son gotas que contribuyen a un torrente interminable. Es el mundo del Big Data, un lugar donde la información fluye incesantemente.",
    author: "Óscar Antonio González",
    readingTime: "4 min de lectura",
    imageUrl: "/nube.jpg",
    link: "https://www.linkedin.com/pulse/la-nube-que-todo-lo-sostiene-ia-y-el-procesamiento-masivo-gonz%25C3%25A1lez-anfje/?trackingId=oO29lttNTzmMdsdAE9AQvQ%3D%3D",
  },
  {
    title: "Explorando la Ciencia de Datos: Navegando Un Mar de Datos...",
    description: "Con la expansión constante del internet y el desarrollo tecnológico, la capacidad de extraer conocimientos útiles de grandes volúmenes de datos es más crucial que nunca. ",
    author: "Óscar Antonio González",
    readingTime: "6 min de lectura",
    imageUrl: "/faro.jpg",
    link: "https://www.linkedin.com/pulse/explorando-la-ciencia-de-datos-transformando-el-mar-en-gonz%25C3%25A1lez-q5yke/?trackingId=oO29lttNTzmMdsdAE9AQvQ%3D%3D",
  },
  {
    title: "Python. La Hegemonía de la Serpiente",
    description: "Dentro de este vasto universo de códigos y lenguajes, Python brilla con luz propia, consolidándose no solo como una herramienta poderosa, sino también como un símbolo de simplicidad y versatilidad.",
    author: "Óscar Antonio González",
    readingTime: "5 min de lectura",
    imageUrl: "/python.jpg",
    link: "https://www.linkedin.com/pulse/python-la-hegemon%25C3%25ADa-de-serpiente-%25C3%25B3scar-antonio-gonz%25C3%25A1lez-z9kue/?trackingId=oO29lttNTzmMdsdAE9AQvQ%3D%3D",
  },
  // Más artículos...
];

const renderArticles = () => {
  return articles.map((article, index) => (
    <div key={index} className="flex flex-col bg-gray-300 p-6 rounded-lg shadow-lg text-black h-full">
      <div className="relative w-full h-60 mb-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }} // Aquí utilizamos el nuevo sistema de estilos
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-3xl font-semibold mb-2">{article.title}</h3>
        <p className="text-lg mb-4 flex-grow">{article.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">{article.author}</span>
          <span className="text-sm text-gray-600">{article.readingTime}</span>
        </div>
      </div>
      <div className="mt-auto">
        <Link href={article.link} legacyBehavior>
          <a className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800">
           Read Article
          </a>
        </Link>
      </div>
    </div>
  ));
};

export default function Articles() {
  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-semibold mb-4 text-center">Featured articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {renderArticles()}
        </div>
      </div>
    </section>
  );
}