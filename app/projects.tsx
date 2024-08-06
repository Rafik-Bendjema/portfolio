import projects from '../public/projects.json'; 

export default function Projects() {
  return (
    <div className="w-full h-screen flex items-center flex-col p-4 md:p-20">
      <div className="text-4xl md:text-6xl">
        <h1>Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {projects.map(project => (
          <div key={project.title} className='w-72 md:w-[30rem] h-auto m-4 p-4 md:m-20 md:p-10 bg-blue-900 flex flex-col items-center rounded-xl'>
            <div className='text-2xl md:text-4xl pb-2 md:pb-5'>{project.title}</div>
            <div className='text-md md:text-xl flex-grow text-gray-300'>{project.description}</div>
            <div className='flex flex-wrap justify-center'>
              {project.category.map((cat, index) => (
                <div key={index} className='m-1 md:m-2 bg-white text-blue-900 p-1 md:p-2 text-[10px] md:text-[15px] text-center flex items-center rounded-3xl'>{cat}</div>
              ))}
            </div>
            <div className='text-xl md:text-2xl m-2 md:m-3'>
              <a href={project.link}>source code {"->"}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
