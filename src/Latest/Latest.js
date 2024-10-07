
import './Latest.css'
import Secondary from './Secondary/Secondary'
export default function Latest(Data){

    return(
        <div className='latest_container'>
          <div className='first_latest_container'>
           {Data.Data.slice(0,1).map((item, index)=>
              <div key={index} className='main_latest_container'>
                    <img src={item.img} alt='latest' />
                    <div>
                    <h4>{item.title}</h4>
                    
                     
                    </div>
                    
                    
              
              </div>
                )}</div>
              <div className='secondary_latest_container'>
                <Secondary Data = {Data}/>
              </div>
           <hr></hr>
        </div>
       
    )
}