import Card from "@/shared/Card";

const About: React.FC = () => {
  return (
    <div id="about" className="px-16 pt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <Card>
        <div className="container mx-auto px-4">
          <p className="text-lightGray text-lg leading-relaxed">
            Hello, I&apos;m Random Name. I&apos;m a passionate software
            developer with a deep interest in solving challenging technical
            problems.
          </p>
          <p className="text-lightGray text-lg leading-relaxed mt-4">
            I specialize in building web and mobile applications using modern
            technologies like React, Node.js, and Python.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;
