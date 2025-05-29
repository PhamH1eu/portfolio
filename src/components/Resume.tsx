import Card from "@/shared/Card";
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center p-3">
      <a
        href="tel:+1234567890"
        className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        <FaPhone className="text-xl" />
        <span className="font-medium">+84 365 280 358</span>
      </a>

      <span className="text-gray-400">•</span>

      <a
        href="mailto:yourname@gmail.com"
        className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        <FaEnvelope className="text-xl" />
        <span className="font-medium">hieuphm03@gmail.com</span>
      </a>

      <span className="text-gray-400">•</span>

      <a
        href="https://www.linkedin.com/in/phieu/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        <FaLinkedin className="text-xl" />
        <span className="font-medium">linkedin.com/in/phieu</span>
      </a>

      <span className="text-gray-400">•</span>

      <a
        href="https://github.com/PhamH1eu?tab=overview"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors duration-200"
      >
        <FaGithub className="text-xl" />
        <span className="font-medium">github.com/PhamH1eu</span>
      </a>
    </div>
  );
};

const WorkExperience = () => {
  return [1, 2].map((_, index) => (
    <div className="mt-4 space-y-4" key={index}>
      <p className="font-semibold mb-0">Fullstack Developer</p>
      <p className="font-light text-gray-500 text-sm">
        CMC Global | Apr 2024 - Jun 2025
      </p>
      <ul className="list-disc list-inside text-lightGray">
        <li>Developed scalable web applications to improve user engagement.</li>
        <li>Optimized database queries, reducing response time by 30%.</li>
      </ul>
    </div>
  ));
};

const Education = () => {
  return (
    <div className="mt-2">
      <p className="font-semibold">Bachelor of Information Technology</p>
      <p className="font-light text-gray-500 text-sm">
        VNU University of Engineering and Technology Hanoi | Jun 2021 - Jan 2025
      </p>
      <p>GPA: 3.45/4.0</p>
      <ul className="list-disc list-inside text-lightGray mt-2">
        <li>Second prize bla blabla blabla blabla blabla bla</li>
        <li>Second prize bla blabla blabla blabla blabla bla</li>
        <li>Second prize bla blabla blabla blabla blabla bla</li>
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="mt-2">
      <ul className="list-disc list-inside text-lightGray">
        {[1, 2].map((_, index) => (
          <li key={index}>Skill {index + 1}</li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  return [1, 2].map((_, index) => (
    <div className="mt-4 space-y-4" key={index}>
      <p className="font-semibold mb-0">LOL</p>
      <p className="font-light text-gray-500 text-sm mb-1">Apr 2024 - Jun 2025</p>
      <p>ÁUYGDUYGWUIGWD DUGYWSAU DƯGAUAWGDU ĂDGVUJKGD UKA DĂGUKYWGDK</p>
    </div>
  ));
};

const Languages = () => {
  return (
    <div className="mt-2">
      <ul className="list-disc list-inside text-lightGray">
        <li>Vietnamese (Native proficiency)</li>
        <li>English (Professional working proficiency)</li>
      </ul>
    </div>
  );
};

const Resume: React.FC = () => {
  return (
    <section id="resume" className="p-16">
      <h2 className="text-3xl font-bold mb-6 text-center">My Resume</h2>
      <Card>
        {/* Work Experience */}
        <h2 className="text-3xl font-bold text-center">Pham Minh Hieu</h2>
        <Contact />
        <h2 className="text-xl font-semibold mt-8">Work Experience</h2>
        <WorkExperience />

        <h2 className="text-xl font-semibold text-secondary mt-4">Education</h2>
        <Education />

        <h2 className="text-xl font-semibold text-secondary mt-4">Skills</h2>
        <Skills />

        <h2 className="text-xl font-semibold text-secondary mt-4">Projects</h2>
        <Projects />

        <h2 className="text-xl font-semibold text-secondary mt-4">Languages</h2>
        <Languages />

        <div className="w-full text-center">
          <button
            type="submit"
            className="bg-black text-white w-auto p-2 mt-4 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Resume;
