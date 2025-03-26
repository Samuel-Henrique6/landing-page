'use client'

import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export function AosInit() {
    React.useEffect(() => {
        Aos.init({ duration: 800, once: true })
    }, [])

    return null
}
