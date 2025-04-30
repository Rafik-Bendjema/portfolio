import { motion } from 'framer-motion';
import projects from '../public/projects.json';

export default function Projects() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-4 md:p-20">
      <div className="text-4xl md:text-6xl mb-8">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map(project => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            key={project.title}
            className="h-[26rem] bg-blue-900 flex flex-col items-center rounded-xl p-6 
                     shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                     transition-shadow duration-300"
          >
            <div className="text-2xl md:text-3xl pb-2 font-bold text-center">{project.title}</div>
            <div className="text-md md:text-lg flex-grow text-gray-300 overflow-auto text-center">{project.description}</div>
            <div className="flex flex-wrap justify-center mt-2">
              {project.category.map((cat, index) => (
                <div key={index} className="m-1 bg-white text-blue-900 px-3 py-1 text-xs md:text-sm rounded-3xl">{cat}</div>
              ))}
            </div>
            <div className="text-lg md:text-xl mt-4">
              <a href={project.link} className="underline">source code {"->"}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}