import React from 'react';
import '../About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="background-image">
        <div className="overlay">
          <h1>About Us</h1>
          <p>
            The Gateway to SA Literature
           </p>
          <a className='btn btn-danger'>Create Membership Account</a>
        </div>
      </div>
      <div className='about-text'>
        <h2 className='my-5 text-center'>The Gateway to SA Literature</h2>
      <p>
            SA Books Online is South Africa's first book repository that is positioning itself as the primary platform for everything that is and connects to South African literature. Founded in 2021, South African Books Online Pty Ltd offers marketing services to all South African literature products in all various formats. We are a 100% black youth-owned organization. (B-BBEE level 1).
          </p>
          <p>
            The agenda around the documentation of South African literature contributes to the global library that fills particular gaps in history’s timeline whether fact or fiction which is significantly crucial, that SA Books Online has stepped up and taken responsibility as the go-to platform for everything that is South African literature. SA Books Online’s purpose is to give easy access to South African literature and content directly to the consumers of South African literature onto one platform and redirect specifically to the owners of the literary content. The intention behind this is to make the South African literature industry more lucrative for all the parties involved.
          </p>
          <p>
            The rich history of this country before colonization, during the invasion, in the dark times of apartheid right to the current rainbow years of a worldly admired democracy, and whenever the future may place this country, it is an important study to the understanding of human behaviour by both its citizens and the global community. As such, it is vital to make access to its literary works in all formats from political, and socio-economic activities right up to the different facets of culture lifestyle, architectural and educational developments as well as the fictional works that vividly demonstrate the evolving imaginations of the minds that are being groomed by this land. The historic footprint of SA Books Online is not only exclusive to present times, but will be enjoyed and appreciated by forthcoming generations.
          </p>
          <blockquote>
            <p>
              "Without a doubt, history is dictated by those who document it, thus for too long South African history has been scattered resulting in great difficulty to trace or retrace it. That was until SA Books Online, that is why we exist, to correct an unnoticed injustice to our land. As important as it is to document information, it is equally important that it is easily accessed."
            </p>
            <footer>- Founder & MD of SA Books Online, Sbusiso Manqa</footer>
          </blockquote>
        </div>
    </div>
  );
};

export default About;
