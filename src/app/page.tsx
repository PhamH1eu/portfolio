import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";

const Home: React.FC = () => {
  return (
    <div className="bg-[#ffffff] text-black">
      <Navbar />
      <main className="container mx-auto px-4">
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
