import  {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './home'
import Regiok from './regiok'
function App() {
 
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/regiok" element={<Regiok/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
 
 
 
}
 
 
export default App
 