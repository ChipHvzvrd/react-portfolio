import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [contactForm, setContactForm] = useState({ name: '', email: '',message: '' });

    const [errorMessage, setErrorMessage] =useState('');

    const { name, email, message } = contactForm;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if(!isValid) {
                setErrorMessage('Invalid Email Entered!');
            } else {
                if(!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else{
                    setErrorMessage('');
                }
            }
          }  
        if(!errorMessage) {
        setContactForm({...contactForm, name: e.target.value})
    }
}

    console.log('errorMessage', errorMessage);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(contactForm);
    }
    
    return(
        <Container>
            <Row>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                    </div>
                        <button type="submit">Submit</button>
                </form>
            </Row>
        </Container>
    );
}

export default Contact;