import Card from "@/shared/Card";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="px-16 pt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">My Resume</h2>
      <Card>
        {/* Work Experience */}
        <h3 className="text-2xl font-semibold text-secondary mt-10">
          Work Experience
        </h3>
        <div className="mt-6 space-y-4">
          <p className="font-semibold">
            Software Engineer - Random Company (2024 - Present)
          </p>
          <ul className="list-disc list-inside text-lightGray mt-2">
            <li>
              Developed scalable web applications to improve user engagement.
            </li>
            <li>Optimized database queries, reducing response time by 30%.</li>
          </ul>
        </div>
        {/* Education */}
        <h3 className="text-2xl font-semibold text-secondary mt-10">
          Education
        </h3>
        <div className="mt-6">
          <div>
            <p>
              <span className="font-semibold">
                Bachelor of Computer Science
              </span>{" "}
              - Random University (2020 - 2024)
            </p>
          </div>
        </div>
        {/* Skills */}
        <h3 className="text-2xl font-semibold text-secondary mt-10">Skills</h3>
        <div className="mt-6">
          <ul className="list-disc list-inside text-lightGray">
            <li>JavaScript, React, Node.js</li>
            <li>Python, Django, Flask</li>
            <li>Docker, Kubernetes</li>
          </ul>
        </div>
      </Card>
    </section>
  );
};

export default Resume;
