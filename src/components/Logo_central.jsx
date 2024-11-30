import './logo_central.css'
import Logo from '../assets/LogoTransparente.png'
import { useNavigate } from 'react-router-dom'

const Logo_central = ({ theme, setTheme }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
        <img 
          src={Logo} 
          alt='No hay logo' 
          className='logo-img' 
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    );
  }
  
export default Logo_central;
