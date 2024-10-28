
import './App.css'
// import Display from './Components/Display/Display'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {




  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      {/* <Display></Display> */}
      <PriceOptions></PriceOptions>
    </div>
  )
}

export default App
