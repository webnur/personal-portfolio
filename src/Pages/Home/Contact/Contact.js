import React from 'react';
import JotformEmbed from 'react-jotform-embed';
import './Contact.css'

const Contact = () => {
    return (
        <div className='my-16 container mx-auto' id='contact'>
            <JotformEmbed src="https://form.jotform.com/223433498712459" />
        </div>
    );
};

export default Contact;