import '../Header/Header'
// import React from 'react';
import './Header.css'

// class Header extends React.Component {
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
//        <button className="loginButton">Iniciar Sesión</button>
//       </div>
//       </div>
//       )
// }
// }

const Header =({links, infolink1,infolink2, infolink3, infolink4})=>{
    return (
    <div className="container">
        <div className='linksleft'>
            <a href={links.aboutGoogle}>{infolink1}</a>
            <a href={links.shop}>{infolink2}</a>
        </div>
        <div className='linksright'>
            <a href="#">{infolink3}</a>
            <a href="#">{infolink4}</a>
            <button className="loginButton">Iniciar Sesión</button>
        </div>
    </div>
  )
}





export default Header;


