import { isMobile } from "@/utils/isMobile"
import { useEffect, useState } from "react"
import { DesktopNavbar } from "./DesktopNavbar/DesktopNavbar"
import { Hamburger } from "./Hamburger/Hamburger"

export const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile(window))
    })
    
    return (
        <>
            {
                mobile ? <Hamburger /> : <DesktopNavbar />
            }
        </>
    )
}