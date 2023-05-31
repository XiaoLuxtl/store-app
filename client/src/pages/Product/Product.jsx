import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import './Product.scss'

import { useFetch } from '../../hooks/useFetch'
import { addToCart } from '../../redux/cartReducer'

export function Product () {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState('img')
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const { data, loading } = useFetch(
    `/products/${id}?populate=*`
  )

  return (
    <div className='product'>
      {loading
        ? 'Loading...'
        : (
          <>
            <div className='left'>
              <div className='images'>
                <img
                  src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                  alt=''
                  onClick={e => setSelectedImg('img')}
                />
                <img
                  src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                  alt=''
                  onClick={e => setSelectedImg('img2')}
                />
              </div>
              <div className='mainImg'>
                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg].data?.attributes?.url} alt='' />
              </div>
            </div>

            <div className='right'>
              <h1>{data?.attributes?.title}</h1>
              <span className='price'>${data?.attributes?.price}</span>
              <p>
                {data?.attributes?.description}
              </p>
              <div className='quantity'>
                <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
                {quantity}
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
              </div>
              <button
                className='add' onClick={() => dispatch(addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  description: data.attributes.description,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity
                }))}
              >
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
          </>)}
    </div>
  )
}
