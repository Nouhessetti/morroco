import { useState, useEffect } from 'react'
import './Slider.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function Slider(Data){
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Data.Data.length);
    }, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

const gotoprevious= ()=>{
  const isaFirst = currentSlide === 0;
  const currentIndex = isaFirst ? Data.Data.length - 1 : currentSlide -1;
  setCurrentSlide(currentIndex)
}
const gotonext= ()=>{
  const isaLast = currentSlide === Data.Data.length - 1;
  const currentIndex = isaLast ? 0 : currentSlide + 1;
  setCurrentSlide(currentIndex)
}
const goToSlide =(index)=>{
 setCurrentSlide(index)
}

    return(
        <div className='slider'>
        
          {Data.Data.map((item, index) =>
           <div
           key={item.id}
           className={`slide ${index === currentSlide ? 'active' : ''}`}
           style={{ backgroundImage: `url(${item.img})` }}
         >
          <h2>{item.title}</h2>
      
          </div>
            
          )}
         
         <span className='left'><FaAngleLeft className='icon' onClick={gotoprevious}/></span>
         <span className='right'><FaAngleRight className='icon' onClick={gotonext} /></span>
          <div className='dots'>
            {Data.Data.map((item, index)=>
            <span key={index} style={{color: currentSlide === index ? 'red': 'rgb(32, 100, 160)'}}
              onClick={()=>{
                goToSlide(index)
              }}
            >
              &#9673;
            </span>
            )}
          </div>
        </div>
    )
}