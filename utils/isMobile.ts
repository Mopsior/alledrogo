export const isMobile = (window: Window) => {
    // pobieramy window (argument HTML)
    const windowWidth = window.innerWidth
    // pobieramy szerokość okna

    if (windowWidth < 987) {
        // jeśli szerokość okna jest mniejsza niż 987px
        // to przełączamy się na wersję mobilną
        return true
    }
    return false
}