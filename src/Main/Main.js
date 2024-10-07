import {useState} from 'react'

import './Main.css'
import Slider from './Slider/Slider'
import ArticleBox from './ArticleBox/Article'
import Data from './Data'
import Socialmedia from '../Socialmedia/Socialmedia'
export default function Main(){
    return(
        <div className='slider_container'>
            <div className='slider_ccontainer'>
             <Slider Data = {Data} />
            </div>
            <div className='article_ccontainer'>
                <ArticleBox Data = {Data} />
            </div>
           
            <div className='social_ccontainer'>
                <Socialmedia /> 
            </div>
          
        </div>
    )
}

