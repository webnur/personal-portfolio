import React from 'react';
import SocialMedia from '../../Shared/SocialMedia/SocialMedia';

import resume from '../../../assets/resume/resume.pdf';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Banner = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }


    return (
    <div className="container px-6 py-8 mx-auto" >
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Hi, I'm Nurul Islam <br /> Junior MERN Stact developer</h1>

                        <SocialMedia></SocialMedia>

                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"  onClick={onButtonClick}>Download Resume</button>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">

                    <PhotoProvider>
                        <PhotoView src={"https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png"}>
                        <img className="w-full h-full lg:max-w-3xl" src={"https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png"} alt="Catalogue-pana.svg" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
        </div>
    );
};

export default Banner;