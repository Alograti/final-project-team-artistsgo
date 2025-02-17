//import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css'

const Sidebar = props=>{
    
    return(
        <Menu>
            <a className='menu-item' href="/">
                Home
            </a>
            <a className='menu-item' href="/Music">
                Music
            </a>
            <a className='menu-item' href="/Dance">
                Dance
            </a>
            <a className='menu-item' href="/Arts-And-Crafts">
                Arts & Crafts
            </a>
            <a className='menu-item' href="/Services">
                Services
            </a>
            <a className='menu-item' href="/Marketplace">
                Marketplace
            </a>  
            <a className='menu-item' href='./Login'  >
                Login
            </a>
            <a className='menu-item' href="/Upload">
                Upload
            </a>  
        </Menu>
        
    )

}
export default Sidebar;