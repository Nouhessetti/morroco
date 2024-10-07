import './Articlesection.css'
import { CiCalendarDate } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
export default function Articlesection(item){
   
    return(
        <div className ='article_section'>
          <img src={item.item.img} alt='article' />
            <h4>the testimanll for animal uknown</h4>
          <p>this is a formula that we tested for more than three months, and we are proveing with eash test that the detected location of eash animal is determed by his her urin , 
            and with that we can confirme that to proventing 
            the 39373 problems we need some kind

          </p>
          <button>Read More</button>
          <div className='tag'>
            <span>Cities</span>
          </div>
          <hr style={{width:"100%"}}></hr>
          <div className='comments_date'>
             <div>
             <CiCalendarDate /> <span>{item.item.info}</span>
             </div>
             <div>
             <RxAvatar /> <span>{item.item.info}</span>
             </div>
          </div>
        </div>
    )
};