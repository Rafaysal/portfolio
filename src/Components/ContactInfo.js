import React from 'react';
import linkedin from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/linkedin.png'
import fb from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/fb.png'
import gmail from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/gmail.png'
import './ContactInfo.css'
import phone from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/phone.png'
import bg from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/bg.jpg'
import call from '/Users/rafaysalahuddin/Portfolio/rafay/src/Components/call.jpeg'

export class ContactInfo extends React.Component{
    render(){
        return (
        <div >
            <img className = 'bg4' src ={bg}></img>
            <div className = "contact">Get in touch!</div>
         <div className = "logos">
            
            <figure>
                
            <a target = '_blank' href = 'https://www.linkedin.com/in/rafay-salahuddin/'>
            <img className = "linkedin" src = {linkedin}/>  
            <figcaption className='caption1'><button>Connect</button></figcaption> 
            </a>
            </figure>

            <figure>
            <a target = '_blank' href = 'https://www.facebook.com/rafay.salahuddin'>
            <img className = "fb" src = {fb}/> 
            <figcaption className='caption1'><button>Connect</button></figcaption>
            </a> 
            </figure>
            

            <figure>
            <a>
            <img className = "gmail" src = {gmail}/>
            </a>  
            <figcaption className='caption'>rafaysalahuddin@gmail.com</figcaption>   
            </figure>
      

            <figure>
            <a>
            <img className = "phone" src = {phone}/>
            </a>  
            <figcaption className='caption'>+1(514)-715-8384</figcaption>   
            </figure>

        </div>
       
        </div>)}
}