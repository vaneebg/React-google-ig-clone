import './App.css';
import Session from './components/Session/Session'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/Footer/Footer'
import img1 from './components/Carrousel/assets/image1.png'
import img2 from './components/Carrousel/assets/image2.png'
import img3 from './components/Carrousel/assets/image3.png'
import img4 from './components/Carrousel/assets/image4.png'
import iconface from './components/Session/assets/iconoface.png'
import ig from './components/Session/assets/instagramletras.png'
import separation from './components/Session/assets/separacion.png'
import apple from './components/Session/assets/aple.png'
import googleplay from './components/Session/assets/googleplay.png'

const images=[img1,img2,img3,img4]
const links=['Meta','Información','Blog','Empleo','Ayuda','API','Privacidad','Condiciones','Cuentas destacadas','Hashtags','Ubicaciones','Instagram Lite','Danza','Comida y bebida','Hogar y jardinería','Música','Artes visuales']

function App() {
  return (
    <div className="body">
      <div className="main">
      <Carrousel images={images} />
      
      <Session iconface={iconface} separation={separation} ig={ig} apple={apple} googleplay={googleplay}/>
      </div>  
      <div className="footer">
      <Footer links={links}/>
    </div>
    </div>
   
  );
}

export default App;
