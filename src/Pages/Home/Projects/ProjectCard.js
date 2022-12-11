import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectCard = ({ project }) => {
    const { project_name, image1, title, id } = project;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image1}>
                        <img src={image1} className='w-full h-[200px] p-2 rounded' alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project_name}</h2>
                <p>{title}</p>
                <div className="card-actions justify-start">
                    <Link to={`details/${id}`} className="btn btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;