import React from 'react';
  
function Contact (){
 return (
    <div className='container'>
        <div className='container-message'>
        <h4>Leave us a message!</h4>
        <input className='Email' type="Text" placeholder='Email'></input>
        <input className='Message' type="Text" placeholder='Message'></input>
        <button type="button">Send</button>
        </div>
        </div>
 )
}
  
export default Contact;