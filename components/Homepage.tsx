import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from "next/image";

const Homepage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/backgrounds.jpg')",
         // Ensure this image is in the `public` folder
      }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10 mt-[-60px]">
        <div className="text-3xl  text-white tracking-widest italic  opacity-100 ml-6">
          15 DAYS LEFT
        </div>
        <div className="pt-2"> {/* Adjusted padding */}
          <Image
            src="/image copy.png"
            alt="Logo"
            width={250} // Adjusted width for better alignment
            height={72} // Adjusted height for better alignment
            className="object-contain"
          />
        </div>
      </header>

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-b flex items-center justify-center px-4">
        <div className="text-center mt-28 md:mt-48">
          <h1 className="text-4xl md:text-6xl text-white italic tracking-widest font-lemonmilk " >
            SOMETHING EXCITING IS ON THE WAY!
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90 font-normal leading-relaxed font-jakarta">
            We&apos;re getting ready to help your brand shine online. Stay tuned!
          </p>
          <div className="mt-12">
            <button className="mt-8 px-6 py-2 bg-white hover:shadow-md text-black text-lg md:text-xl font-normal rounded-3xl shadow-md transition-all duration-200 ease-in-out font-jakarta">
              NOTIFY ME
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-white">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-white hover:text-white transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-white hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="text-white/60 text-sm">
          © 2024 SolidSocials. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
