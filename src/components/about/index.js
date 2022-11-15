import React from 'react';

function About() {
  return (
    <section className="section" id="About_me">
      <figure className="container-img">
        <img
          className="section-img"
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Devaloper"
          title="Developer"
        />
      </figure>
      <div className="container-info">
        <h2>About me</h2>
        <p>
          I am a <strong>web developer</strong>, currently I have experience in
          HTML, CSS and JS. I have done some projects, like a to-do list made in
          React and some student projects and many more things.
        </p>
      </div>
    </section>
  );
}

export { About };
