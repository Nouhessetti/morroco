import './Nav.css'
import Menu from './Menu/Menu'
import Info from './Info/Info'
import Logo from './logo.png'
export default function Header(){
    return(
        <div className ='header'>
            <img  className='logo'src={Logo} alt='logo' />
            <Menu />
            <Info />
        </div>
    )
};