import { experiences } from "@/data/experienceData";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-3xl font-bold font-poppins mb-4">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-16 h-1 bg-primary-500 mx-auto"
          ></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`${index < experiences.length - 1 ? "mb-12" : ""} flex flex-col md:flex-row gap-6`}
            >
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <span className="text-primary-500 text-2xl font-bold">{exp.logo}</span>
                </div>
              </div>

              <div className="md:w-3/4">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-bold font-poppins">{exp.position}</h3>
                  <span className="text-primary-500 font-medium">{exp.company}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
