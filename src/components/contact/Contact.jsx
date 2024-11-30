import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7vhsc3k', // Your Service ID
        'template_81lyid7', // Your Template ID
        form.current, // Form reference
        'ClkW1D-_y22-cunm9' // Public key
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show success toast
          toast.success("Your message has been sent successfully! 🎉 ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // Clear form fields
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          // Show error toast
          toast.error("Failed to send the message. Please try again later.", {
            position: "top-right ❌",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>anushkadspatil@gmail.com</h5>
            <a href="mailto:anushkadspatil@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact_option'>
            <FaTwitter className='contact_option-icon' />
            <h4>Twitter</h4>
            <h5>@Anushkaspatil</h5>
            <a href="https://twitter.com/intent/tweet?recipient_id=Anushkaspatil" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>Only for important purposes</h5>
            <a href="https://wa.me/+919579285836" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="10" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
