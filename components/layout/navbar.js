import { useContext, useEffect, useRef } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './navItems'
import NavContext from '../../store/nav-context'

export default function Navbar() {
    const mobileRef = useRef()
    const navCtx = useContext(NavContext)
    const { mobile, setMobile } = navCtx
    // const activeNotification = notificationCtx.notification;
    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked area is not within the menu,
            // then close the menu
            if (mobile &&
                mobileRef.current &&
                !mobileRef.current.contains(e.target)) {
                setMobile()
            }

        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [mobile])

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
            <i onClick={setMobile} ref={mobileRef} className="bi bi-list bu-m-menu"></i>
            {mobile && <div className="mobile-nav">
                <ul>
                    <NavItems />
                </ul>
            </div>
            }
        </nav >
    )
}
