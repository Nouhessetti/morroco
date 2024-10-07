import { useState, useEffect } from 'react'
import './Article.css'

export default function ArticleBox(Data){
const [currentIndex, setCurrent] = useState(0)
useEffect(()=>{
    
},[])
    return(
        <div className='articlebox'>
          
                {Data.Data.slice(0,2).map((item,id) => 
                <div key={id} className='single_article'
                 
                >
                <img  className= 'img_container_article'src={item.img} alt='article' /> 
                 <h4 className='title_article'>{item.title}</h4>
                </div>
                 
            )}

          
        
        </div>
       
    )
}