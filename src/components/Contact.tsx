import Card from "@/shared/Card";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mx-auto max-w-102 self-center pt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <Card>
        <form className="p-2">
          <p className="text-2xl font-bold">Get in Touch</p>
          <p className="text-[#737373] text-sm">
            If you have any questions or just want to say hi, feel free to
            contact me using the form below.
          </p>
          <div className="mt-6">
            <label htmlFor="name" className="block text-secondary font-medium text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-secondary font-medium mt-4 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-secondary font-medium mt-4 text-sm"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full p-2 mt-4 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
