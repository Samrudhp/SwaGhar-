import React from 'react';


const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5'>
    
        <div className="flex flex-col gap-10">
          <h5 className="text-2xl font-bold">SwaGhar</h5>
          <p className='break-words'>
            Our project is dedicated to creating a seamless platform to connect users with the housing market. Whether you're looking for your dream home or seeking investment opportunities, we aim to simplify the process with an intuitive interface and reliable data. Join us as we work to innovate the housing experience!
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <h5 className="text-2xl font-bold">Quick Links</h5>
          <div className='flex flex-col gap-3 p-1'>
            <a className='hover:text-lightBlue transition duration-150' href="/">Home</a>
            <a className='hover:text-lightBlue transition duration-150' href="/features">Applications</a>
            {/* <a className='hover:text-lightBlue transition duration-150' href="/about">About</a> */}
            {/* <a className='hover:text-lightBlue transition duration-150' href="/contact">Contact</a> */}
            <a className='hover:text-lightBlue transition duration-150' href="/faq">FAQ</a>
          </div>
        </div>


        <div className="flex flex-col gap-7">
          <h5 className="text-2xl font-bold">Follow Us</h5>
          <div className='flex gap-3 flex-col p-1'>
            <a className='flex gap-3' href="javascript:void(0)">WhatsApp</a>
            <a className='flex gap-3' href="https://www.instagram.com/your_project_instagram" target='_blank' rel="noopener noreferrer">Instagram</a>
            <a className='flex gap-3' href="https://www.linkedin.com/company/your-project-linkedin" target='_blank' rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <h5 className="text-2xl font-bold">Contact Us</h5>
          <div className='flex flex-col gap-3 p-1'>
            <h5>SwaGhar</h5>
            <h5>Address Line 1, City, State, ZIP</h5>
           
            <h5>Contact: +91 123 456 7890</h5>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center py-4'>
        <span>SwaGhar © 2024</span>
      </div>
    </div>
  );
}

export default Footer;
