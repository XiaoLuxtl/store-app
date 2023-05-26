import { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

export function Product () {
  const [selectedImg, setselectedImg] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const images = [
    'https://images.pexels.com/photos/16809901/pexels-photo-16809901/free-photo-of-moda-hombre-modelo-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/16809906/pexels-photo-16809906/free-photo-of-moda-hombres-blanco-estilo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={e => setselectedImg(0)} />
          <img src={images[1]} alt='' onClick={e => setselectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>

      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$111</span>
        <p>
          Lorem Ipsum
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> AÑADIR AL CARRITO
        </button>
        <div className='links'>
          <div className='item'><FavoriteBorderIcon /> AÑADIR A LISTA DE DESEOS</div>
          <div className='item'><BalanceIcon /> COMPARAR ARTÍCULOS</div>
        </div>
        <div className='info'>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>

      </div>
    </div>
  )
}
