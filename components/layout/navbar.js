
import { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './navItems'

export default function Navbar() {
    const [mobile, setMobile] = useState(false)

    return (
        <nav className={styles.navbar}>
            <Link href="/" passHref>
                <a>
                    <Image src="/images/logo.png" alt="" width={109} height={40} />
                </a>
            </Link>
            <ul>
                <NavItems />
            </ul>
            <i onClick={() => setMobile(!mobile)} className="bi bi-list bu-m-menu"></i>
            {mobile && <div className="mobile-nav">
                <ul>
                    <NavItems />
                </ul>
            </div>
            }
        </nav >
    )
}
