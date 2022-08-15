import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp}from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Contacts = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ew0xnlk', 'template_2xoult4', form.current, 'hsSgiXvGR4VQHVndn')
    e.target.reset();
  };

  return (
    <Section id="contact">
      <div className="email_app">
      <div className="titles">
        <h5>Get In Touch</h5>
        <h2>Contact Us</h2>
      </div>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>{"admin[at]behindmaskssociety[dot]com"}</h5>
            <a href="mailto:admin@behindmaskssociety.com" target="_blank" rel="noreferrer">Send a email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/dani.83.rsr" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Whatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone=34617726453" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div>
        </div>
      </div>    
      </div>
    </Section>
  )
}

const Section = styled.section`
height:900px;
background:var(--color-bg);

.email_app{
  .titles{
    padding-top:100px;
    text-align:center;
  }
}

.container{
 background:var(--color-bg);
 margin-top:50px;
 display:grid;
 grid-template-columns: 30% 52% 6%;
    gap:12%;
  .contact__container{
    padding-left:100px;
    width:58%;
   
  }
  .btn-primary{
      width:80%;
    }
}

.contact__options{
  display:flex;
  flex-direction: column;
  gap:1.2rem;
}

.contact__option{
  margin-left:200px;
  background:rgb(71, 16, 98);
  width:60%;
  height:60%;
  border-radius:1.2rem;
  text-align: center;
  border:1px solid transparent;
  transition:var(--transition);
}

.contact__option:hover{
  background: transparent;
  border-color:var(--secondary-color);
}

.contact__option-icon{
  color:#000;
  font-size:1.5rem;
  margin-top:1rem;
  margin-bottom:0.2rem;
}

.contact__option a{
  color:#000;
  margin-top: 0.7rem;
  display: inline-block;
  font-size:0.8rem;
}

.contact__option h5{
  text-align:center;
  color:var(--color-light-gray);
}

.titles h2{
  font-size: 2.5rem;
  color:rgb(71, 16, 98);
}

.titles h5{
  font-size: 1.5rem;
}

.contact__option h4{
  text-align:center;
  color:#000;
}

form{
  display:flex;
  flex-direction:column;
  gap:1.2rem;
}

input, textarea{
  width:80%;
  padding:1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border:2px solid var(--color-orange);
  resize:none;
  color:var(--color-white)
}

.scroll__up{  
  position: absolute;
  right:13rem;
  margin-top:500px;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 1.2rem;
  color:var(--color-orange);

}


/*============= Media queries (MEDIUM DEVICES) ============== */
@media screen and (min-width: 280px) and (max-width: 1080px) {
  height:1100px;
  .contact__option{
    margin-left:-8px;
    background:rgb(71, 16, 98);
    width:85%;
    height:85%;
    border-radius:1.2rem;
    text-align: center;
    border:1px solid transparent;
    transition:var(--transition);
  }
  .container.contact__container{
      padding-left:65px;
      grid-template-columns: 1fr;
      gap:2rem;
  }


  .scroll__up{  
      right:2rem;
      margin-top:-8px;
      transform: rotate(90deg);
      font-weight: 300;
      font-size: 1.2rem;
      color:var(--color-orange);
  
  }

}

/*============= Media queries (SMALL DEVICES) ============== */
@media screen and (max-width: 1600px) {
  .container.contact__container{
      width:var(--container)
  }

  .scroll__up{  
      right:0.1rem;
      margin-top:-8px;
      transform: rotate(90deg);
      font-weight: 300;
      font-size: 1.2rem;
      color:var(--color-orange);
  
  }
}

}
`

export default Contacts