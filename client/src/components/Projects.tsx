import { projects } from "@/data/projectsData";

// SVG placeholder patterns
const placeholderPatterns = [
  {
    id: "pattern1",
    svg: (
      <>
        <rect width="100%" height="100%" fill="#f9fafb" className="dark:fill-gray-800" />
        <circle cx="50%" cy="50%" r="50" fill="#e5e7eb" className="dark:fill-gray-700" />
        <rect x="30%" y="30%" width="40%" height="40%" fill="#d1d5db" className="dark:fill-gray-600" />
      </>
    )
  },
  {
    id: "pattern2",
    svg: (
      <>
        <rect width="100%" height="100%" fill="#f9fafb" className="dark:fill-gray-800" />
        <path d="M0,0 L100,100 M100,0 L0,100" stroke="#e5e7eb" strokeWidth="2" className="dark:stroke-gray-700" />
      </>
    )
  },
  {
    id: "pattern3",
    svg: (
      <>
        <rect width="100%" height="100%" fill="#f9fafb" className="dark:fill-gray-800" />
        <circle cx="30%" cy="30%" r="30" fill="#e5e7eb" className="dark:fill-gray-700" />
        <circle cx="70%" cy="70%" r="30" fill="#d1d5db" className="dark:fill-gray-600" />
      </>
    )
  },
  {
    id: "pattern4",
    svg: (
      <>
        <rect width="100%" height="100%" fill="#f9fafb" className="dark:fill-gray-800" />
        <rect x="20%" y="20%" width="60%" height="60%" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="4" className="dark:fill-gray-700 dark:stroke-gray-600" />
      </>
    )
  },
  {
    id: "pattern5",
    svg: (
      <>
        <rect width="100%" height="100%" fill="#f9fafb" className="dark:fill-gray-800" />
        <polygon points="50,20 80,80 20,80" fill="#e5e7eb" className="dark:fill-gray-700" />
      </>
    )
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold font-poppins mb-4">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-16 h-1 bg-primary-500 mx-auto"
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of the projects I've been working on. Each project represents my passion
            for technology and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {placeholderPatterns[index % placeholderPatterns.length].svg}
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#4b5563"
                    fontSize="16"
                    fontWeight="bold"
                    className="dark:fill-gray-300"
                  >
                    {project.title}
                  </text>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.inProgress && (
                    <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 text-xs font-medium rounded">
                      In Progress
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                  >
                    <svg
                      className="w-5 h-5 inline mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 italic text-sm">
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
