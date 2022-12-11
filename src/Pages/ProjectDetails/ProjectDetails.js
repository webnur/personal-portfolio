import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectDetails = () => {
    const projectDetails = useLoaderData();
    // console.log(projectDetails)
    return (
        <div className='container mx-auto mt-5'>
            <div className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <PhotoProvider>
                                    <PhotoView src={projectDetails.image1}>
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src={projectDetails.image1} />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <PhotoProvider>
                                    <PhotoView src={projectDetails.image2}>
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src={projectDetails.image2} />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <PhotoProvider>
                                    <PhotoView src={projectDetails.image3}>
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src={projectDetails.image3} />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">

                                <PhotoProvider>
                                    <PhotoView src={projectDetails.image4}>
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src={projectDetails.image4} />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-3xl lg:ml-16 font-semibold mt-4">{projectDetails.project_name}</h2>
                <p className='text-xl lg:ml-16'><span className='font-bold'>* Website name:</span> {projectDetails.short_des1}</p>
                <p className='text-xl lg:ml-16'><span className='font-bold'>* Description </span>: {projectDetails.short_des2}</p>
                <p className='text-xl lg:ml-16'><span className='font-bold'>* Technology used</span>:
                    {
                        projectDetails.technology.map((tech, i) => <button className="btn btn-outline btn-success ml-2 my-4" key={i}>{tech}</button>)
                    }
                </p>
                <div className='flex py-8'>
                    <a className='ml-6 lg:ml-16 font-bold' href={projectDetails.live_side}>Live Link</a>
                    <a className='ml-6 lg:ml-16 font-bold' href={projectDetails.client_code}>Client Side Code</a>
                    <a className='ml-6 lg:ml-16 font-bold' href={projectDetails.server_code}>Server Side Code</a>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;