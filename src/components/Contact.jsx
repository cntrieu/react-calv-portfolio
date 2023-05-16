import React, { useState } from "react";

const Contact = () => {
    
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const submitValidation = (event) => {
        event.preventDefault();
        const form = event.target
        // Get form values

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const emailInput = document.querySelector('input[name="email"]');
        const emailCheck = emailInput.value;

    
       // Check for errors
        if (!name || !email || !message) {
            // Set error messages
            if (!name) setNameError('*Name is required');
            if (!email) setEmailError('*Email is required');
            if (!message) setMessageError('*Message is required');
        } else {
            // Clear error messages
            setNameError('');
            setEmailError('');
            setMessageError('');

            if (!isValidEmail(emailCheck)) {
                event.preventDefault();
                alert("Please enter a valid email address.")
            } else {
                form.submit();
            }
         
        }
      };

      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

      // Validate using onblur event on the input fields using switch statement to check if the corresponding name element is empty
      const handleBlur = (event) => {
        const { name, value } = event.target;
      
        switch (name) {
          case 'name':
            if (!value) {
              setNameError('*Name is required');
            } else {
              setNameError('');
            }
            break;
          case 'email':
            if (!value) {
              setEmailError('*Email is required');
            } else {
              setEmailError('');
            }
            break;
          case 'message':
            if (!value) {
              setMessageError('*Message is required');
            } else {
              setMessageError('');
            }
            break;
          default:
            break;
        }
      };
 
      
    return (
        <div name='contact' className="w-full bg-gradient-to-b from-green-100 via-white to-green-100 text-black p-4 h-screen">

            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 my-6 border-gray-400">Let's Get in Touch!</p>
                </div>

                <div className="flex justify-center items-center">

                    <form action="https://getform.io/f/7c44349b-ed8a-49d2-a3dd-7262e2b283f1" method="POST" className="flex flex-col w-full md:w-1/2 m-6" onSubmit={submitValidation}>
                        <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-black" onBlur={handleBlur}></input> {nameError && <p className="text-red-500">{nameError}</p>}

                        <input type="text" name="email" placeholder="Enter your email" className="p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none text-black" onBlur={handleBlur}></input>
                        {emailError && <p className="text-red-500">{emailError}</p>}

                        <textarea name="message" rows="10" placeholder="Your message..." className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none" onBlur={handleBlur}></textarea>
                        {messageError && <p className="text-red-500">{messageError}</p>}

                        <button className="text-black bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200">Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}



export default Contact;