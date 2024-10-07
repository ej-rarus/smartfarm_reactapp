import React from 'react';

function About() {
  return (
    <div className='content-wrap'>
      <h1 className='page-title'>About Page</h1>
      <hr style={{border: 'none', height: '2px', backgroundColor: 'gray', width:'13rem', marginTop:"0.5rem"}}/>
      <p className='page-content'>This is the About page.</p>
    </div>
  );
}

export default About;