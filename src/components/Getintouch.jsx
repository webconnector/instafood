import React from 'react'
import img from '../assets/images/contactus.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Getintouch = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jrn585i', 'template_8wofl5q', form.current, 'KfDM2LHtWILlvRlTz')
            .then((result) => {
                console.log(result.text);
                showAlert("Message sent successfully!", "text-green-600"); // Alert for successful message send
            }, (error) => {
                console.log(error.text);
                showAlert("Failed to send message. Please try again.", "text-red-600"); // Alert for message send failure
            });
    };
    
    const showAlert = (message, textColor) => {
        alert(message);
        // You can also use a more sophisticated alert or notification library here
        // if you want to style it further with Tailwind classes
    };
    

    return (
        <div className='min-h-screen flex flex-col-reverse  lg:flex-row justify-center gap-8  items-center mt-8 px-5 '>
            <div className='space-y-4'>
                <h1 class='text-center font-semibold text-4xl mt-4 md:text-start md:inline-block overflow-hidden hover:bg-brightColor hover:text-white transition duration-300'>Send us a message</h1>
                <form ref={form} onSubmit={sendEmail} className="space-y-8 flex flex-col">
                    <div className="flex flex-row justify-between gap-4">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Enter your name"
                            className="p-2 border border-gray-300 rounded-md w-48 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Enter your email"
                            className="p-2 border border-gray-300 rounded-md w-48 focus:outline-none"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Type your message here"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none"
                        rows="5"
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value="Send Message"
                        className="p-2 bg-brightColor text-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-brightColor transform hover:scale-105"
                    />
                </form>


            </div>
            <img src={img} alt="abaout-image" className='md:w-1/4 focus:outline-none transform hover:scale-110 transition duration-300 ease-in-out" ' />
        </div>
    );
};

export default Getintouch