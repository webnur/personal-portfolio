import React from 'react';

const Footer = () => {
    return (
        // <footer className="footer footer-center p-4 bg-base-200 text-base-content text-lg font-semibold">
        //     <div>
        //         <p>Copyright © 2022 - All right reserved by Nurul Islam</p>
        //     </div>
        // </footer>


        <footer className="footer footer-center p-10 bg-base-200 ">
            <div>
                <h2 className="text-2xl font-bold">Nurul Islam</h2>
                <p className="font-bold">
                    Email: mdnuruli291@gmail.com
                </p>
                <p className="font-bold">
                    phone: +8801634146292
                </p>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/webnur' className='font-bold'>Github</a>
                        <a href='https://www.linkedin.com/in/nurul-islam-a8ab9b175/' className='font-bold'>Linkedin</a>
                    </div>
                </div>
                <p>Copyright © 2022 - All right reserved by Nurul Islam</p>
            </div>
        </footer>

    );
};

export default Footer;