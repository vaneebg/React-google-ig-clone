import '../Home/Home'
// import React from 'react';
import './Home.css'

// class Home extends React.Component {
// render() {
// return(
//         <div className="container">
//         <div className='linksleft'>
//        <a href={this.props.links.aboutGoogle}>{this.props.infolink1}</a>
//        <a href={this.props.links.shop}>{this.props.infolink2}</a>
//       </div>
//       <div className='linksright'>
//       <a href="#">{this.props.infolink3}</a>
//        <a href="#">{this.props.infolink4}</a>
//        <button class="loginButton">Iniciar Sesión</button>
//       </div>
//       </div>
//       )
// }
// }

const Home =({img1,search,micro,lang, buttons})=>{
    const listLang=lang.map((language=>  <a href="">{language}</a>))
    const listButtons=buttons.map((button=><button>{button}</button>))
 
    return (
    <div className="google-container">
            <img src={img1} alt=""/>
            <div className="input-container">
                <img className="search" src={search} alt=""/>
                <input type="text" name="" id=""/>
                <img className="microphone"src={micro} alt=""/>
            </div>
        <div className="buttons-container">
           {listButtons}
        </div>
        <div className="language-container">
            <span>Ofrecido por Google en:</span>
             {listLang}
        </div>
    </div>
  )
}





export default Home;


