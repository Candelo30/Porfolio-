import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact_me" className="section">
      <div className="container-info">
        <h2>Contacta me</h2>
        <form
          id="contactForm"
          action="https://formsubmit.co/luiscandelo30@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-field"
              placeholder="Name"
              id="name"
              defaultValue="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-field"
              placeholder="Email"
              id="email"
              defaultValue="example@email.com"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">number</label>
            <input
              type="tel"
              className="form-field"
              placeholder="number"
              id="number"
              name="number"
            />
          </div>

          <input className="button" type="submit" />
          <input
            type="hidden"
            name="_next"
            value="https://react-4xwuhz.stackblitz.io/"
          />
          <input type="hidden" name="_subject" value="New mensaje!" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you very much for contacting me in a few minutes we will get in touch!"
          />
          <input type="hidden" name="_template" value="table" />
        </form>
      </div>
    </section>
  );
}

export { Contact };
