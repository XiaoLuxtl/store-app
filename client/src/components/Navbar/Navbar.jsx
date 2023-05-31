import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { Cart } from '../Cart/Cart'
import './Navbar.scss'

export function Navbar () {
  const [open, setOpen] = useState(false)
  const products = useSelector(state => state.cart.products)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='./img/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>Dama</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>Caballero</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3'>Niños</Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>TIENDITA</Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>Inicio</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Nosotros</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Contacto</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>Tiendas</Link>
          </div>
          <div className='icons'>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon' onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}
