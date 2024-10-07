import './Menu.css'
import {Link} from 'react-router-dom'
export default function Menu(){
    return (
        <div className='menu_container'>
           <Link to={'/'} ><a>Home</a></Link>
           <Link to={'/cities'} ><a>Cities</a></Link>
           <Link to={'/places'} ><a>Places</a></Link>
           <Link to={'/foods'} ><a>Foods</a></Link>
           <Link to={'/travel_info'} ><a>Travel Info</a></Link>
           <Link to={'/tours'} ><a>Tours</a></Link>
         
        </div>
    )
}