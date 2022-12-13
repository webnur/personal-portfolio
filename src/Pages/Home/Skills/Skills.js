import React from 'react';

const Skills = () => {
    return (
        <div className='container mx-auto bg-base-200 p-8'>
           <h2 className="text-3xl font-bold text-center pt-2 pb-12">My Skills</h2> 

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                <div>
                    <h2 className="text-2xl font-bold my-3 text-center">Front End</h2>
                    <hr />
                    <p className='text-center my-2 font-semibold'>HTML & CSS</p>
                    <p className='text-center font-semibold'>Javascript</p>
                    <p className='text-center mt-2 font-semibold'>React Js</p>
                </div>
                <div>
                <h2 className="text-2xl font-bold my-3 text-center">UI / UX</h2>
                    <hr />
                    <p className='text-center my-2 font-semibold'>Bootstrap</p>
                    <p className='text-center font-semibold'>Tailwind</p>
                    <p className='text-center my-2 font-semibold'>DaisyUI</p>
                    <p className='text-center font-semibold'>Flowbite</p>
                </div>
                <div>
                <h2 className="text-2xl font-bold my-3 text-center">Back End</h2>
                    <hr />
                    <p className='text-center my-2 font-semibold'>Node Js</p>
                    <p className='text-center font-semibold'>Express Js</p>
                    <p className='text-center my-2 font-semibold'>Mongo DB</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;