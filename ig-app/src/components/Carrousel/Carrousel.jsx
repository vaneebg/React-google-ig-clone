import './Carrousel'
import './Carrousel.css'
import background from './assets/moviles.png'

const Carrousel =({images})=>{
    const listImages=images.map((image=> <img className="img1" src={image}/>))
    return(
       
<div className='mobile' style={{backgroundImage: `url(${background})`, backgroundPosition: '-46px 0',
      backgroundSize: '468.32px 634.15px',backgroundRepeat:'no-repeat'
    }}>
            <div class="mobileimg">
               {listImages}
            </div>
        </div>
    )
}

export default Carrousel