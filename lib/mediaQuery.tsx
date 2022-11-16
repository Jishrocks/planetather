import { useMediaQuery as _ } from 'react-responsive'

type ScreenBasedAttributes = {
    screen_sm: any
    screen_md?: any
    screen_lg?: any
    screen_xl?: any
}

function screenBasedAttribute(screens: Array<boolean>, attributes: ScreenBasedAttributes) {
    let _screens = ['screen_sm', 'screen_md', 'screen_lg', 'screen_xl']
    for (let i = 0; i < screens.length; i++) {
        const screen = screens[i]
        if(screen) {
            return attributes[_screens[i]]
        }
    }
    return attributes[_screens[0]]
}

export default function useMediaQuery() {
    let screen_sm = _({query: '(min-width: 640px) and (max-width: 767px)'})
    let screen_md = _({query: '(min-width: 768px) and (max-width: 1023px)'})
    let screen_lg = _({query: '(min-width: 1024px) and (max-width: 1279px)'})
    let screen_xl = _({query: '(min-width: 1280px)'})

    return {
        screen_sm,
        screen_md,
        screen_lg,
        screen_xl,
        screens: [
            screen_sm,
            screen_md,
            screen_lg, 
            screen_xl
        ]
    }
}

export {
    useMediaQuery,
    screenBasedAttribute
}