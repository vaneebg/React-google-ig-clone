import './Session'
import './Session.css'

const Session=(props)=>{
    return(
        <div className="form">
            <section className="formig">
                <a href="instagram.com"><img src={props.ig} alt="logo ig"/></a>
                <form class="formaction" action="" method="post">
                    <input type="text" class="input" name="user" placeholder="Teléfono, usuario o correo electrónico"/>
                    <input type="password" name="password" class="input" placeholder="Contraseña"/>
                    <button><a href="/instagram/pages/ig dentro.html" target="_blank">Iniciar sesión</a></button>
                </form>
                <div class="separation">
                    <img src={props.separation} alt="separation icon"/>
                </div>
                <div class="facebook">
                    <section class="face1">
                        <a href="facebook.com"> <img src={props.iconface} alt="facebook"/>Iniciar sesión con Facebook</a>
                    </section>
                    <section class="face2"> <a href="facebook.com">¿Has olvidado la contraseña?</a></section>
                </div>
            </section>
            <section class="login">
                ¿No tienes una cuenta? <a href="instagram.com">Regístrate</a></section>
            <section class="download">
                <div class="downloadapp">Descarga la aplicación.</div>
                <div class="downloadicons">
                    <div class="apple">
                        <a href="apple.com"><img src={props.apple} alt="apple"/></a>
                    </div>
                    <div class="googleplay">
                        <a href="google.com"><img src={props.googleplay} alt="googleplay"/></a>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Session