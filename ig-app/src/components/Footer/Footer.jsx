import './Footer'
import './Footer.css'

const Footer=({links})=>{
    const listLinks=links.map((link=><a href="">{link}</a>))
return(
    <div className='links'>
{listLinks}
    </div>
)
}
export default Footer;