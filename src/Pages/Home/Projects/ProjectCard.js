import React from 'react';

const ProjectCard = ({project}) => {
    console.log(project)
    const {name, image1, id} = project;
    const singleProject = id => {
        console.log(id)
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={image1} className='w-full h-[200px] p-2 rounded' alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>a full stack used car selling application</p>
            <div className="card-actions justify-start">
                <button className="btn btn-primary" onClick={() => singleProject(project)}>See Details</button>
            </div>
        </div>
    </div>
    );
};

export default ProjectCard;