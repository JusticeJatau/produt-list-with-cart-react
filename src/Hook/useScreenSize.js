import { useEffect, useState } from "react"

const useScreenSize = () => {
    const [screeSize, setScreenSize] = useState('');
  
    const handleSetScreenSize = ()=>{
        const width = window.innerWidth
    
        if(width <= 750){
          setScreenSize("Mobile")
        }else if(width > 750 && width <=1020){
          setScreenSize("Tablet")
        }else{
          setScreenSize("Desktop")
        }
    }
    
    useEffect(()=>{
        handleSetScreenSize()

        window.addEventListener('resize', handleSetScreenSize)

        return ()=>{
            window.removeEventListener("resize", handleSetScreenSize)
        }
    }, [])

    return screeSize.toLowerCase()
}

export default useScreenSize