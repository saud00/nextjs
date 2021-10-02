import Link from 'next/link'
import style from '../styles/Nav.module.css'

function Nav() {
    return (
        <div className={style.nav}>
            <ul >
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li>Products</li>
                <li>Contact Us</li>
            </ul>
            
        </div>
    )
}

export default Nav
