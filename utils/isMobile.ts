export const isMobile = (window: Window) => {
    const windowWidth = window.innerWidth

    if (windowWidth < 987) {
        return true
    }
    return false
}