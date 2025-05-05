import { skills } from "@/data/skillsData";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold font-poppins mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-16 h-1 bg-primary-500 mx-auto"
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="rounded-lg overflow-hidden shadow-xl">
            <svg
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect width="400" height="400" fill="#f3f4f6" className="dark:fill-gray-700" />
              <circle cx="200" cy="150" r="80" fill="#d1d5db" className="dark:fill-gray-600" />
              <circle cx="200" cy="120" r="30" fill="#9ca3af" className="dark:fill-gray-500" />
              <rect x="120" y="230" width="160" height="140" fill="#9ca3af" className="dark:fill-gray-500" />
              <text
                x="200"
                y="300"
                fontSize="24"
                fontWeight="bold"
                textAnchor="middle"
                fill="#4b5563"
                className="dark:fill-gray-300"
              >
                Profile Image
              </text>
            </svg>
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <h3 className="text-2xl font-bold font-poppins">Betala Shasi Kiran</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              B.Tech in Computer Science with specialization in AI & ML from CMR Technical Campus,
              Hyderabad. Passionate about AI, full-stack development, and solving real-world problems
              through technology.
            </p>

            <div>
              <h4 className="text-lg font-semibold mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg shadow-md transition duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
