import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'

import constants from './constants/constants'
import googlelogo from './components/Home/assets/google.png'
import search from "./components/Home/assets/search.svg"
import micro from "./components/Home/assets/microphone.svg"

const languages=['valencià','galego','euskera' ]
const buttons=['Buscar con Google','Voy a tener suerte']
       
function App() {
  return (
    <div className="App">
   <Header links={constants} infolink1='Sobre Google' infolink2='Tienda' infolink3='Gmail' infolink4='Imágenes'/>
   <Home img1={googlelogo} search={search} micro={micro} lang={languages} buttons={buttons}/>
   </div>
  )
  
}

export default App;
