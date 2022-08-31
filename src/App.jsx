import './App.css'
import fotoPerfil from './img/yo.png'
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import gmail from './img/gmail.png'
import whatsapp from './img/whatsapp.png'
import react from './img/react.svg'

function App() {

  return (
    
    <div className='card animate__animated animate__fadeInDown'>

      <div className='wrapper'>

        <div className='desc'>
          <h1>Matías Ezequiel Sosa</h1>
          <span>Fullstack developer</span>

          <p>¡Hola!, soy Matías estudiante avanzado de la Tecnicatura en Programación y también de forma autodidacta.
             Me considero una persona comprometida con el estudio,  día a día me capacito para poder 
             incrementar mis conocimientos y habilidades en el mundo IT.
          </p>
          <div className='contenedorRedes'>
            <h4>Te invito a que me conozcas un poco más </h4>
            <a href="https://www.linkedin.com/in/matiasezequielsosa/" target="_blank" rel="noreferrer" ><img className='redes' src={linkedin} alt="linkedin" /></a>
            <a href="https://github.com/SosaMati" target="_blank" rel="noreferrer" ><img className='redes' src={github} alt="linkedin" /></a>
            <a href="mailto:matiasezequielsosa@gmail.com" target="_blank" rel="noreferrer" ><img className='redes' src={gmail} alt="linkedin" /></a>
            <a href="https://api.whatsapp.com/send?phone=5493484342298" target="_blank" rel="noreferrer" ><img className='redes' src={whatsapp} alt="linkedin" /></a>

          </div>
        </div>

        <div className='contenedorFoto'>
          <img className='logo' src={react} alt="react logo" />
          <img className='foto' src={fotoPerfil} alt="yo" />
        </div>

      </div>

        <div className='contenedorCv'>
          <div className='cv'> <a href="https://www.canva.com/design/DAEo4LWsASs/7aF5F49495bUy1PgDnFNQw/view?" target="_blank" rel="noreferrer">VER CV</a> </div>
          <div className='cv'> <a href="https://matiasezequielsosa.vercel.app/" target="_blank" rel="noreferrer">VER PORTFOLIO</a> </div>
        </div>


    </div>      
  
  )
}

export default App
