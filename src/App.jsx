
import './App.css'
import AxiosComponent from './Axios/AxiosComponent'
// import Display from './Components/Display/Display'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import Recharts from './Components/Recharts/Recharts'

function App() {




  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      {/* <Display></Display> */}
      <PriceOptions></PriceOptions>
      <Recharts></Recharts>
      <AxiosComponent></AxiosComponent>
    </div>
  )
}

export default App
