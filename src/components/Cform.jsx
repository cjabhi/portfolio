import React, { useState } from 'react'
import { Form } from 'react-router-dom';
import './Cform.css';

const Cform = () => {
const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [subject , setSubject] = useState("");
const [description , setDescription] = useState("");
  const submithandler = async (e) => {
    e.preventDefault();
    const data = { name , email , subject , description };
    try {

      const response = await fetch("https://email-senter.onrender.com/sentmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        }
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.error);
      }
      else if (response.ok) {
        alert(result.error);
        console.log(result.error);
        setName("");
        setEmail("");
        setSubject("");
        setDescription("");
      }
    } catch (err) {
      alert(err)
    }
  }
    
  return (
    <div className='parentbox'>
      <div className='contactbox'>
        <div className='formbox'>
          <form action='https://formspree.io/f/xbjvkknb' method='POST' >
           <h2>Contact Me</h2>

           <div className='input-box'>
            <input type='text' name='Name' required value={name} onChange={ (e)=> setName(e.target.value)} />
            <label>Name</label>
           </div>

           <div className='input-box'>
            <input type='email' name='email' required value={email} onChange={ (e)=> setEmail(e.target.value)} />
            <label>Email</label>
           </div>

           <div className='input-box'>
            <input type='text' name='subject' required value={subject} onChange={ (e)=> setSubject(e.target.value)} />
            <label>Subject</label>
           </div>

           <div className='tbox'>
            <textarea placeholder='describe here' name='message' value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
           </div>
          
          <button type='submit' value='sent' className='btn' style={{borderRadius:"10px"}}>Submit</button>

          </form>
        </div>
    </div>
    </div>
  )
}

export default Cform