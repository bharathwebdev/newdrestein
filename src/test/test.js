import { useEffect } from "react";
import { useParallaxController } from "react-scroll-parallax";
import { useState } from "react";

export function Image(props) { 
  const [load ,setLoad]  = useState(useParallaxController())
  const [afterload,setAfterLoad]  = useState(useParallaxController())
  useEffect(()=>{
   
   window.addEventListener('scroll',()=>{
    window.requestAnimationFrame(()=>{
      setAfterLoad(load.update())

    })
   })
   return ()=>{
    window.removeEventListener('scroll',()=>{
      window.requestAnimationFrame(()=>{
        setAfterLoad(load.update())

      })
    })
   }
  },[])
    // const parallaxController = useParallaxController();
  
    // // updates cached values after image dimensions have loaded
    // const handleLoad = () => parallaxController.update();
  
    return <img src={props.src} onLoad={afterload}  />;
  }