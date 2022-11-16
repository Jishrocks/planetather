import '../styles/globals.css'
import '../styles/responsive-font-sizes.css'
import 'css.gg/icons/all.css'

import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	return (
		<Component {...pageProps} />
	)
}


export default MyApp