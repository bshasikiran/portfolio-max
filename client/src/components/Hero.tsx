import { TypewriterEffect } from "./TypewriterEffect";

export function Hero() {
  const downloadResume = () => {
    // Create a link to download the resume
    const resumeUrl = '/assets/myResume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Betala_Shasi_Kiran_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <svg 
          viewBox="0 0 1000 1000" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            </pattern>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-duration="1000" className="mb-6">
            <span className="text-sm uppercase tracking-widest text-primary-500 font-semibold">
              Welcome to my Portfolio
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-4xl md:text-6xl font-bold font-poppins mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-primary-500">Betala Shasi Kiran</span>
          </h1>

          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8"
          >
            Aspiring Full-Stack Developer | AI-ML Enthusiast
          </h2>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 h-8 mb-10"
          >
            <TypewriterEffect
              words={["Web Developer", "Data Scientist", "Student", "Tech Enthusiast"]}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={downloadResume}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </button>
            <a
              href="#contact"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-500 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              Contact Me
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            className="flex space-x-4"
          >
            <a
              href="https://github.com/bshasikiran"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/betala-shasi-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
              </svg>
            </a>
            <a
              href="https://lol-eight-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 5h2v2h-2v-2zm0 4h2v10h-2v-10z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/shasikiran_2004?igsh=MXV1b2l4bTJzeTEyeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-gray-500 dark:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
