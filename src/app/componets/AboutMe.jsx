import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="bg-black p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/path/to/your/profile-picture.jpg"
            alt="Profile Picture"
            className="rounded-full"
            width={300}
            height={200}
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quasi error itaque blanditiis porro mollitia alias ut, perspiciatis nisi tempore, ipsam voluptatem at distinctio animi commodi, velit quibusdam. Praesentium, sit..
          </p>
          <h3 className="text-2xl font-semibold mb-2">Habilidades</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Python, R, JavaScript</li>
            <li>TensorFlow, PyTorch</li>
            <li>Data Analysis, Data Visualization</li>
            <li>Machine Learning, Deep Learning</li>
            <li>SQL, NoSQL</li>
            <li>Cloud Computing (AWS, Azure)</li>
            <li>Linux, Docker, Kubernetes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}