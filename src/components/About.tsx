import Card from "@/shared/Card";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="about" className="px-14 pt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <Card>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
          {/* Image on the left */}
          <div className="flex-shrink-0 rounded-full object-cover shadow-2xl transition-transform duration-300 p-1 hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0 rounded-full object-cover overflow-hidden w-48 h-48 relative">
              <Image
                src="/avatar.jpg" // Replace with the actual image path
                alt="Pham Minh Hieu"
                width={192}
                height={192}
              />
            </div>
          </div>

          {/* Text content on the right */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Hello, I&apos;m Pham Minh Hieu
            </h3>
            <p className="text-lightGray text-lg leading-relaxed text-justify">
              I am a highly skilled Fullstack Engineer with a strong passion for
              designing and building efficient, elegant web solutions that
              address complex challenges. I bring expertise in Java, Node.js,
              and ReactJS, utilizing technologies to create robust and
              scalable applications.
            </p>
            <p className="text-lightGray text-lg leading-relaxed mt-4 text-justify">
              My experience includes successfully delivering cloud-based
              projects, ensuring high performance and reliability. I am deeply
              motivated to contribute to innovative projects and continuously
              expand my knowledge and skill set in the ever-evolving tech
              landscape.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
