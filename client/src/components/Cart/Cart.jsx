import { useSelector, useDispatch } from 'react-redux'
import { makeRequest } from '../../makeRequest'
import { loadStripe } from '@stripe/stripe-js'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Cart.scss'

import { removeItem, resetCart } from '../../redux/cartReducer'

export function Cart () {
  const products = useSelector((state) => state.cart.products)

  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2)
  }

  const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_TEST)

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise

      const res = await makeRequest.post('/orders', { products })

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='cart'>
      <h1>Productos en tu carrito</h1>
      {products?.map((item) => (
        <div className='item' key={item.id}>
          <img
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
            alt=''
          />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className='delete'
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEDER AL PAGO</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>
        Vaciar Carrito
      </span>
    </div>
  )
}
