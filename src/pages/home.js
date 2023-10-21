import React from 'react';
import Navbar from '../components/navbar';
import webdevelopement from '../images/website-development.webp';
import Footer from '../components/footer';
import ContactForm from '../components/contactform';

const Home = () => {
    return ( <>
    <Navbar/>
    <div className="my-mother">
       <div className="my-col-6 xs-11 down-2 off-1">
         <div className="xs-off-1 xs-down-15 xs-px30 down-4 px50">The #1 Agency For High Top-Notch Service.</div>
         <div className="xs-off-1 xs-down-2">We empower your businesses and individuals with innovative digital solutions that
              drive success, foster creativity, and build lasting connection in the ever-evolving
              digital landscape. </div>
         <div className="xs-6 xs-down-2 xs-off-3 my-col-4 down-2">
           <div className="my-container bg-blue">
             <div className="xs-down-7 centered bold white down-7 my-bottom-20 px13">Redesign your website <i className='fas fa-solid fa-arrow-right'/></div>
           </div> 
         </div>
       </div>
    </div>
    <div className="down-3 xs-down-6 my-mother my-bottom-50 bg-blue">
     <div className="my-col-6 xs-11 xs-down-6 down-4">
        <div className="white xs-off-1 bold px20 off-1">Why Choose Us?</div>
        <div className="white px13 off-1 xs-off-1 xs-down-1 down-1">We are here because we consistently deliver satisfaction. If you're looking for a digital marketing agency that can help 
                                     your achieve your  goals, then we're the perfect choice for you.</div>
        <div className="my-col-2 xs-4 xs-down-3 xs-off-4 off-1 down-2">
            <div className=" centered roundbox px10 down-2">READ MORE</div>
        </div>
     </div>
    </div>
    <div className="my-col-6 xs-10">
        <div className="down-2 xs-off-1 xs-down-3 off-1 xs-px30 px40">What We Do</div>
        <div className="xs-off-1 off-1 px13">You've got a business, we have got brillant minds. From <strong>Health</strong> and <strong>Education</strong> to <strong>Finance</strong>,
             we've got engineering experts who know your industry, and all of its unique complexities.
        </div>
    </div>
    <div className="my-col-4">
      <div><img className="normalsize" src={webdevelopement} alt="" /></div>
    </div>
    <div className="my-col-3 frontbox down-1">
      <div className="my-container">
        <div className="my-col-5 down-5">
          <div className="white off-1 xs-off-1 xs-down-2 px15 down-2">Digital Marketing</div>
          <div className="px13 off-1 xs-off-1 textdown white">Learn more <i className='mg-3 fas fa-thin fa-arrow-right'/><i className="mg-9 px30 white fas fa-solid fa-chart-simple" /></div>
        </div>

      </div>

    </div>
    <div className="my-col-3 xs-down-3 greenbox down-1">
      <div className="my-container">
        <div className="my-col-5 down-5">
          <div className="off-1 xs-off-1 xs-down-2 black px15">Web Development</div>
          <div className="off-1 xs-off-1 px13 textdown black">Learn more <i className='mg-3 fas fa-solid fa-arrow-right'/> <i className="mg-9 px30 black fas fa-solid fa-terminal" /></div>
        </div>

      </div>

    </div>
    <div className="my-col-3 purplebox xs-down-3 down-1">
      <div className="my-container">
        <div className="my-col-7 down-5">
          <div className="black off-1 xs-off-1 xs-down-2 px15">SEO & Content Writing</div>
          <div className="off-1 xs-off-1 px13 textdown black">Learn more <i className='mg-3 fas fa-solid fa-arrow-right'/> <i className="mg-9 px30 black fa-brands fa-searchengin" /></div>
        </div>

      </div>

    </div>
    <div className="my-col-3 yellowfrontbox xs-down-3 down-2">
      <div className="my-container">
        <div className="my-col-7 down-5">
          <div className="off black xs-off-1 xs-down-2 px15">Social Media Management</div>
          <div className="off xs-off-1 px13 textdown black">Learn more <i className='mg-3 fas fa-solid fa-arrow-right'/><i className="mg-95 px30 black fas fa-solid fa-star-of-life" /></div>
        </div>

      </div>

    </div>
    <div className="my-col-3 darkgreenbox xs-down-3 down-2">
      <div className="my-container">
        <div className="my-col-5 down-5">
          <div className="off-1 xs-off-1 xs-down-2 white px15">UI/UX Design</div>
          <div className="off-1 xs-off-1 px13 textdown white">Learn more <i className='mg-3 fas fa-solid fa-arrow-right'/><i className="mg-9 px30 white fas fa-solid fa-palette" /></div>
        </div>

      </div>

    </div>
    <div className="off-1 my-col-3 redbox xs-down-3 down-2">
      <div className="my-container">
        <div className="my-col-5 down-5">
          <div className="off-1 xs-off-1 xs-down-2 white px15">Event Coverage</div>
          <div className="off-1 xs-off-1 px13 textdown white">Learn more <i className='mg-3 fas fa-solid fa-arrow-right'/><i className="mg-9 px30 white fas fa-solid fa-video" /></div>
        </div>

      </div>

    </div>
    <div className="my-mother my-bottom-50 xs-down-6 down-2 bg-purple">
      <div className="my-col-11 xs-11 xs-down-5 down-1">
        <div className="off-1 poppings xs-px30 xs-off-1 px40">Our tech stack: designed to work with yours</div>
      </div>
      <div className="xs-off-2 my-col-10 off-1">
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-java" /></div>
        <div className="px13 down-8">Java</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-python" /></div>
        <div className="px13 down-8">Python</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-php" /></div>
        <div className="px13 mg-3 down-8">Php</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-react" /></div>
        <div className="px13 mg-3 down-8">React</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-node" /></div>
        <div className="px13 mg-3 down-8">Node</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-angular" /></div>
        <div className="px13 down-8">Angular</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-vuejs" /></div>
        <div className="px13 mg-3 down-8">Vue</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-html5" /></div>
        <div className="px13 down-8">HTML</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-css3-alt" /></div>
        <div className="px13 mg-2 down-8">CSS</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-android" /></div>
        <div className="px13 mg-2 down-8">Android</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-apple" /></div>
        <div className="px13 mg-2 down-8">IOS</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-1">
        <div><i className="px50 fa-brands fa-swift" /></div>
        <div className="px13 mg-2 down-8">Swift</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-3">
        <div><i className="px50 fa-brands fa-aws" /></div>
        <div className="px13 mg-3 down-8">AWS</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-3">
        <div><i className="px50 fa-brands fa-github" /></div>
        <div className="px13 mg-2 down-8">Github</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-3">
        <div><i className="px50 fa-brands fa-linux" /></div>
        <div className="px13 mg-2 down-8">Linux</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-3">
        <div><i className="px50 fa-brands fa-ubuntu" /></div>
        <div className="px13 mg-2 down-8">Ubuntu</div>
      </div>
      <div className="my-col-1 xs-4 xs-down-3 down-3">
        <div><i className="px50 fas fa-brands fa-terminal" /></div>
        <div className="px13 down-8">Terminal</div>
      </div>

      </div>
    </div>
    <ContactForm/>
    <Footer/>
    </>

    )
}

export default Home;