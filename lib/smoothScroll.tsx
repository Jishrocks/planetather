import { useEffect } from "react";
import { useSpring } from "react-spring";

export default function useSmoothScroll() {
    const [, setY] = useSpring(() => ({ y: 0 }))

	useEffect(() => {
		// left: 37, up: 38, right: 39, down: 40/;,
		// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		function preventDefault(e) {
			e.preventDefault();

			let scrollDown = e.deltaY > 0

			let config = {
				mass: 1,
				tension: 170,
				friction: 26,
			}

			if (scrollDown) {
				setY({
					y: window.scrollY + e.deltaY,
					reset: true,
					from: { y: window.scrollY },
					config,
					onChange: props => {
						window.scroll({
							top: props.value.y,
						})
					},
				})
			} else {
				setY({
					y: window.scrollY + e.deltaY,
					reset: true,
					from: { y: window.scrollY },
					config,
					onChange: props => {
						window.scroll({
							top: props.value.y,
						})
					},
				})
			}
		}

		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

		// modern Chrome requires { passive: false } when adding event
		var supportsPassive = false;
		try {
			(window as any).addEventListener("test", null, Object.defineProperty({}, 'passive', {
				get: function () { supportsPassive = true; } 
			}))
		} catch(e) {}

		var wheelOpt: any = supportsPassive ? { passive: false } : false
		var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

		window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
		window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
		window.addEventListener('keydown', preventDefaultForScrollKeys, false);

		return () => {
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
			window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
			window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
		}
	})
}