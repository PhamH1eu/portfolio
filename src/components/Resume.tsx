"use client";
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

const works = [
  {
    title: "Fullstack Developer",
    company: "Kalapa. JSC",
    duration: "Jul 2025 - Present",
    responsibilities: [
      "Developed and maintained a franchise user management system leveraging serverless architecture using AWS components, reducing overall cost to pay by 40%.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "CMC Global",
    duration: "Apr 2024 - Jun 2025",
    responsibilities: [
      "Developed and maintained a franchise user management system leveraging serverless architecture using AWS components, reducing overall cost to pay by 40%.",
      "Implemented query result caching, decreasing loading times by 50% and network usage by 80%, significantly enhancing user experience; utilized Zustand for efficient global state management.",
      "Integrated two-factor authentication (2FA) using AWS Cognito and custom Lambda functions, improving application security with a seamless user authentication and authorization flow for over 10,000 users.",
    ],
  },
];
const WorkExperience = () => {
  return works.map((item, index) => (
    <div className="mt-4 space-y-4" key={index}>
      <p className="font-semibold mb-0">{item.title}</p>
      <p className="font-light text-gray-500 text-sm">
        {item.company} | {item.duration}
      </p>
      <ul className="list-disc list-inside text-lightGray">
        {item.responsibilities.map((responsibility, idx) => (
          <li key={idx}>{responsibility}</li>
        ))}
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
        <li>
          2nd prize in provincial competition for gifted students in Physics by
          Ministry of Education and Training in 2020
        </li>
        <li>
          2nd prize in provincial competition for gifted students in Math by
          Ministry of Education and Training in 2019
        </li>
        <li>
          3rd prize in provincial competition for gifted students in English by
          Ministry of Education and Training in 2018
        </li>
      </ul>
    </div>
  );
};

const skillList = [
  {
    type: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
  },
  { type: "Frameworks", skills: ["Spring", "Spring Boot", "React"] },
  {
    type: "Databases",
    skills: ["DynamoDB", "PostgreSQL", "Firestore", "Redis"],
  },
  { type: "Cloud Platforms", skills: ["AWS", "Google Cloud"] },
  {
    type: "Tools & Technologies",
    skills: ["Docker", "Git", "Github", "Postman"],
  },
];
const Skills = () => {
  return (
    <div className="mt-2">
      <ul className="list-disc list-inside text-lightGray">
        {skillList.map((skillGroup, index) => (
          <li key={index} className="mb-0 text-md">
            <span className="">{skillGroup.type}:</span>{" "}
            {skillGroup.skills.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProjectsList = [
  {
    title: "Book System",
    description:
      "Designed and implemented backend system for managing books and authors with full-text search and caching functionalities. The system includes Oauth2 token authorization, book operations with search and author management. Redis is used to cache logged out user's token, improving performance for authorization status.",
    duration: "Jul 2025 - Present",
  },
  {
    title: "HobShare",
    description:
      "Developed a social networking platform for sharing hobbies and interests, enabling users to connect and collaborate on various activities, using GeminiAI for content analysis and personalized recommendations, Neo4j for modeling relationships.",
    duration: "Apr 2024 - Jun 2025",
  },
];
const Projects = () => {
  return ProjectsList.map((item, index) => (
    <div className="mt-4 space-y-4" key={index}>
      <p className="font-semibold mb-0">{item.title}</p>
      <p className="font-light text-gray-500 text-sm mb-1">{item.duration}</p>
      <p>{item.description}</p>
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
  const handleDownload = () => {
    const filePath = "/Pham_Hieu_Resume_Fullstack.pdf";

    const link = document.createElement("a");
    link.href = filePath;

    link.download = "Pham_Hieu_Resume_Fullstack.pdf"; 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="p-14">
      <h2 className="text-3xl font-bold mb-6 text-center">My Resume</h2>
      <Card>
        {/* Work Experience */}
        <h2 className="text-3xl font-bold text-center">Pham Minh Hieu</h2>
        <Contact />
        <h2>
          Detail-oriented Fullstack Engineer with a passion for crafting
          efficient web solutions with experience in cloud-based projects. Eager
          to contribute to innovative projects and learn new skills.
        </h2>
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
            onClick={handleDownload}
            className="bg-black text-white w-auto p-2 mt-4 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            Download Resume
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Resume;
