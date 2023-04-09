import { isMobile } from "@/utils/isMobile"
import { useEffect, useState } from "react"
import { DesktopNavbar } from "./DesktopNavbar/DesktopNavbar"
import { Hamburger } from "./Hamburger/Hamburger"

export const Navbar = () => {
    // Sprawdzamy, czy jesteśmy na urządzeniu mobilnym
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile(window))
    })
    
    return (
        <>
        {/* Jeżeli jesteśmy na urządzeniu mobilnym dajemy Hamburger */}
        {/* Inaczej dajemy Navbar */}
            {
                mobile ? <Hamburger /> : <DesktopNavbar />
            }
        </>
    )
}