import React from 'react';

function Home() {
  return (
    <section className="section home" id="Home">
      <div className="container-info">
        <h2 className="section-title">
          Hi, welcome to my <strong>porfolio</strong>
        </h2>
        <p>
          My <strong>name</strong> is Luis
        </p>
        <p>Frontend developer</p>
        <a href="#contact_me">
          <button type="button" className="button">
            Contacta me
          </button>
        </a>
      </div>
      <figure className="container-img">
        <img
          className="section-img"
          src="https://res.cloudinary.com/ddffhmxpz/image/upload/v1668455809/profile-pic_qdmuuw.png"
          alt="img-profile"
        />
      </figure>
    </section>
  );
}

export { Home };
