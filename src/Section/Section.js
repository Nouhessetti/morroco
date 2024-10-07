import './Section.css'
import Articlesection from './Articlesection/Articlesection'
import Data from '../Main/Data'
export default function Section(){
    return(
        <div className ='section'>
            {Data.map((item,id) =>
                 <Articlesection key={id} item = {item} />
            )}
         
        </div>
    )
};