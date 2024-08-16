'use client'

import { useEffect } from "react"

export default function CheckSlide() {
    
    useEffect(() => {
        let cont = 1
        let radio = document.querySelectorAll(".manualBtn")

        document.getElementById('radio1').defaultChecked = true

        setInterval(() => {
            proximaImg()
        }, 5000)

        function proximaImg() {
            cont++
        
            if(cont > 3) {
                cont = 1
            }
        
            document.getElementById(radio + cont).defaultChecked = true
        }

    }, [])
}
