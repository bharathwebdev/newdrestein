
import './App.css';
import Plx from 'react-plx';
import Nav from './components/Nav';
import Main from './components/Main';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';

import { Image } from './test/test';
import { useEffect, useRef } from 'react';
// const parallaxData = [
//   {
//     start: 'self',
//     end: '50%',
    
//     properties: [
//       {
//         startValue: 1,
//         endValue: 5,
//         property: "scale",
//       },
//     ],
//   },
// ];
const exampleParallaxData = [
  {
  
    start: 0,
    end:1000,
    duration:10,
    properties: [
      {
        startValue: 0,
        endValue: -400,

        
        property: "translateY",
      },
    ]
       
      // Blur is not performant
  }
]
const data = [
  {
    start:0,
    end:300,
    properties:[
      {
        startValue:100,
        endValue:360,
        property:'rotate'
      },
      {
        startValue:0,
        endValue:1000,
        property:'translateY'
      }
    ]
  }
]
function App() {
  const {parallax}= useParallax<HTMLDivElement>({speed: 10 });

const yeah = useRef(null)
  // updates cached values after image dimensions have loaded

useEffect(()=>{
  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    yeah.current.style.marginBottom = value * 2 + 'px'; 
    //  yeah.current
  })
  return ()=>{
    window.removeEventListener('scroll', () => {
      let value = window.scrollY;
      yeah.current.style.marginBottom = value * 2 + 'px';
    
    })
  }
})

  return (
    <ParallaxProvider>
    <div className="App">
      <Nav/>
      <Main/>
      {/* <Plx className="MyAwesomeParallax img" parallaxData={exampleParallaxData}> */}
<Parallax className='img' translateY={[0, -100]}>

           <Image  src='earth.png'/>
</Parallax>
{/* <h1  ref={yeah} style={{
  fontSize:'50px',
  color:'white'
}}>helo</h1> */}

      {/* </Plx> */}
      <div ref={parallax} style={{
  height:'200vh',
  // width:'200px',
  // background:'red'
}}>

</div>
    </div>
</ParallaxProvider>
  );
}

export default App;
