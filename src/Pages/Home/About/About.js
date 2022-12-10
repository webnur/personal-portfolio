import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto' id='about'>
            <h2 className="text-3xl text-center my-6 font-bold">About Me</h2>

            <div className="hero bg-base-200 p-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://scontent.fcgp25-1.fna.fbcdn.net/v/t1.6435-9/137309703_2858857814404049_2259188380411779180_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YnlYVLWPfugAX9GpB1u&_nc_ht=scontent.fcgp25-1.fna&oh=00_AfBeigMuG37pXEmNFHu99dCvq0Emhz_lzqbu-NZ7rdK_LA&oe=63BBEE13" className="lg:w-2/5 w-full rounded-lg shadow-2xl h-72" alt='' />
                    <div>
                        <p className="py-6 font-semibold ml-6 text-lg">Hi! I'm Nurul Islam. A junior MERN Stack developer. I have done the Complete Web Development course at Programming Hero. I have a deep interest in web development and Programming in general. I have completed three projects using React js and Node js, I tried multiple things such as Graphics Design, Video editing, WordPress Development, etc. But I couldn't find my passion until I tried Web Development. After learning some basic HTML, CSS, and JS, I feel like I'm falling in love with programming. In this journey, I realized that I was not improving rapidly, so I enrolled in Programming Hero's Complete Web Development course. Now I am constantly learning new things and evolving every day.
                        </p>
                        <p className='mt-4 font-semibold ml-6 text-lg'>Skills: JavaScript, React, Bootstrap, Tailwind CSS, NodeJS, MongoDB, Firebase Authentication, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;