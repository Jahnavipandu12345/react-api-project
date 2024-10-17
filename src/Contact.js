import React from 'react'
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function Contact() {
  return (
    <>
    <h1 className='contact-head'>Contact Us</h1>
    <form>
      <label>First Name : </label>
      <input type='text' placeholder='Maddiralla Jahnavi' className='box1'></input><br></br>
      <label>Email Address : </label>
      <input type='email' placeholder='Ex: janu@gmail.com' className='box'></input><br></br>
      <label>Phone Number: </label>
      <input type='number' placeholder='Ex: 1234567890' className='box'></input><br></br>
      <label> Full Address: </label>
      <input type='text' placeholder='Enter Full Address' className='box1'></input><br></br>
      <label> Gender: </label>
    <span className='radio-box'> Male </span><input type='radio'name='gender'></input>
    <span className='radio-box'>Female </span> <input type='radio'name='gender'></input><br></br>
    <label>Your Message : </label>
    <textarea className='box4'></textarea>
    <input type='submit' className='box2' value="Submit"></input>
    <input type='reset' className='box3' value="Clear"></input>
      </form>
    </>
  )
}
