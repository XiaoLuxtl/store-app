import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import PinterestIcon from '@mui/icons-material/Pinterest'
import './Contact.scss'

export function Contact () {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>¡PONTE EN CONTÁCTO!</span>
        <div className='mail'>
          <input type='text' placeholder='Ingresa tu correo...' />
          <button>ÚNETE</button>
        </div>
        <div className='icons'>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  )
}
