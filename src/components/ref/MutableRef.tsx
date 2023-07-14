import { useState,useEffect } from "react"

export const MutableRef = ()=>{
    const [ timer,setTimer ] = useState(0);
    const intervalRef = useRef(null);

    const stopTimer = () => {
        window.clearInterval(intervalRef.current)
    }

    useEffect(()=>{
        intervalRef.current = window.setInterval(()=>{
            setTimer((timer)=> timer + 1)
        },1000)
        return ()=>{
            stopTimer()
        }
    },[])
}