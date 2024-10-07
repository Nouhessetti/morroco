import './Socialmedia.css'
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { useState, useEffect } from 'react';
export default function Socialmedia(city){
    const moroccanCities = [
        { id: 1, city: "Casablanca" },
        { id: 2, city: "Rabat" },
        { id: 3, city: "Marrakesh" },
        { id: 4, city: "Fes" },
        { id: 5, city: "Tangier" },
        { id: 6, city: "Agadir" },
        { id: 7, city: "Oujda" },
        { id: 8, city: "Meknes" },
        { id: 9, city: "Tetouan" },
        { id: 10, city: "Essaouira" },
        { id: 11, city: "Nador" },
        { id: 12, city: "El Jadida" },
        { id: 13, city: "Kenitra" },
        { id: 14, city: "Safi" },
        { id: 15, city: "Taza" },
        { id: 16, city: "Mohammedia" },
        { id: 17, city: "Beni Mellal" },
        { id: 18, city: "Khouribga" },
        { id: 19, city: "Khemisset" },
        { id: 20, city: "Ifrane" },
        { id: 21, city: "Ouarzazate" },
        { id: 22, city: "Larache" },
        { id: 23, city: "Sidi Kacem" },
        { id: 24, city: "Guelmim" },
        { id: 25, city: "Dakhla" },
        { id: 26, city: "Al Hoceima" },
        { id: 27, city: "Taourirt" },
        { id: 28, city: "Tiznit" },
        { id: 29, city: "Chefchaouen" },
        { id: 30, city: "Sefrou" }
      ];
      
    const [Weath, setWeath] = useState(false)
    const [traking, setTraking] = useState('')
   const url =' https://shorturl.at/6i2SN'

   async function getweatgerinfo(city, Morocco){
    try{
    const key = '8532b1dd0a787661b839f3dcb4fcbac4'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${Morocco}&appid=${key}`
    const response = await fetch(url)
    const data = await response.json()
 
    setWeath({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temp:data.main.temp ,
        location:data.name
      
    })
  
    }catch (error){

    }
  
  
   }

 useEffect(()=>{
    if(traking[0] === ''){
        getweatgerinfo('Rabat', 'Morocco')
    }else{
        getweatgerinfo(traking, 'Morocco')
    }

 }, [traking])

    return(
        <div className='socialmedia' style={{backgroundImage:`url(${url})`}}>
            

            <div className="search_container">
       
                <form action="">
                    <label style={{color:'white'}}>All Cities: </label>
                    <input list="cars" placeholder='City'onChange={(e)=>{
                       setTraking(e.target.value)
                    }}></input>
                    <datalist id="cars">
                        
                        {moroccanCities.map((item,id)=>
                                <option key={id} value={item.city} />
                        )}
                    </datalist>
                 </form>
            </div>
            <h4>{Weath.location}</h4>
            <div className='cloud_container'>
              <FaCloudSun className='cloud' />
              <h1>{Weath.temp}</h1>
            </div>
            <div className='humidity_container'>
                <div>
                    <WiHumidity className='humidity cloud' /><span>{Weath.humidity}</span>
                   
                </div>
                <div>
                    <FaWind className='humidity cloud' /><span>{Weath.windSpeed}</span>
                </div>
               
            
            </div>



        </div>
    )
}