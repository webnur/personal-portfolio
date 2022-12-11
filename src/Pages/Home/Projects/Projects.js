import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://portfolio-server-delta.vercel.app/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div id='projects'>
            <h2 className="text-3xl text-center my-10 font-bold">My Projects</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto my-6'>



                {
                    projects.map(project => <ProjectCard project={project} key={project.id}></ProjectCard>)
                }
                



            </div>
        </div>
    );
};

export default Projects;