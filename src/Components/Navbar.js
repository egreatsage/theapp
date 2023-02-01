import React from 'react'
import {Menu,Container,Button,Image} from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Menu inverted borderless style={{padding:'0.3rem', marginBottom:'10px'}} attached>
      <Container>
        <Menu.Item name='home'>
          <Link to=''>
            <Image size='mini' src='https://media.timeout.com/images/105942164/750/422/image.jpg' alt='logo'/>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <h2>The App</h2>
        </Menu.Item>
        <Menu.Item position='right'>
         <Button size='mini' primary onClick={()=>navigate('/add')}>
          Add User
         </Button>
        </Menu.Item>
      </Container>

    </Menu>
  )
}

export default Navbar