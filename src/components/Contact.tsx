"use client";
import Card from "@/shared/Card";
import { log } from "console";
import { useRef, useState } from "react";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = async () => {
    setLoading(true);
    console.log(nameRef.current?.value, emailRef.current?.value, messageRef.current?.value, "ref");

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // CORS header
        },
        body: JSON.stringify({
          name: nameRef.current?.value || '',
          email: emailRef.current?.value || '',
          message: messageRef.current?.value || '',
        }),
      });

      if (!res.ok) {
        const errorText = await res.text(); // fallback
        throw new Error(errorText || `HTTP ${res.status}`);
      }

      const data = await res.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="mx-auto max-w-102 self-center pt-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <Card>
        <div className="p-2">
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
              ref={nameRef}
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
              ref={emailRef}
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
              ref={messageRef}
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="bg-black text-white w-full p-2 mt-4 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
