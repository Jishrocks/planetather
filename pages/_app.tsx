import '../styles/globals.css'
import 'css.gg/icons/all.css'
import "swiper/css";
import "swiper/css/pagination";

import React, { useEffect, useRef } from 'react'

function MyApp({ Component, pageProps }) {

	return (
		<>
			<Component {...pageProps} />
		</>
	)
}


export default MyApp