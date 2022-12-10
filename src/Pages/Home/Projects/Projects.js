import React from 'react';
import project1 from '../../../assets/projects/project1.png'
import project2 from '../../../assets/projects/project2.png'
import project3 from '../../../assets/projects/project3.png'

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className="text-3xl text-center my-10 font-bold">My Projects</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto my-6'>


                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={project1} className='w-full h-[270px] p-3 rounded' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sales Bd</h2>
                        <p>a full stack used car selling application</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project2} className='w-full h-[270px] p-3 rounded' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">NUR KITCHEN</h2>
                        <p>a react js food packages selling application</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={project3} className='w-full h-[270px] p-3 rounded' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hero Learning</h2>
                        <p>a React js Learning application</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Projects;