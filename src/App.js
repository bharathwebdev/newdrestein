import logo from './logo.svg';
import './App.css';
import Plx from 'react-plx';
import Nav from './components/Nav';
import Main from './components/Main';
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

    properties: [
      {
        startValue: 100,
        endValue: -600,
        
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
  return (
    <div className="App">
      {/* <Plx className="MyAwesomeParallax" parallaxData={data}> */}
      {/* <h1 style={{
        display:'flex',
        justifyContent:'center'
        ,
        alignItems:'center'
      }}>welcome </h1> */}
      {/* </Plx> */}
      <Nav/>
      <Main/>

<Plx className="MyAwesomeParallax img" parallaxData={exampleParallaxData}>
 
      </Plx>
<div style={{
  height:'200vh'
}}>

</div>
    </div>
  );
}

export default App;
