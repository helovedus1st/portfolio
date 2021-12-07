import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        
        <p>
          I am a full stack web developer who graduated from UCF's Coding Bootcamp in December 2021.
          <br></br>
          I am also the CEO of <a href="http://lutherantech.com/"  rel="noreferrer noreferrer" target="_blank">Lutheran Tech</a>, a niche-oriented web&#47;graphics design and marketing company, and have been in that role since 2016.
        </p>
        <p>
          Prior to becoming a coder, I worked as a graphic designer and a communications and marketing expert, and I have over 15 years experience in these combined fields.
      </p>
      </div>
    </section>
  );
}

export default About;
