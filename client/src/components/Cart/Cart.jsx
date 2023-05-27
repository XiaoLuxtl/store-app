import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Cart.scss'

export function Cart () {
  const data = [
    {
      id: 2,
      img: 'https://images.pexels.com/photos/16777247/pexels-photo-16777247/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/16777225/pexels-photo-16777225/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Audifonos divis divis',
      desc: 'Los mejores audifonos del mundo mundial',
      isNew: true,
      oldPrice: 22,
      price: 18
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/6664300/pexels-photo-6664300.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/6188771/pexels-photo-6188771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Zapatos deportivos',
      desc: 'Con estos tenis corres más rápido',
      isNew: false,
      oldPrice: 50,
      price: 35
    }
  ]
  return (
    <div className='cart'>
      <h1>Productos en tu carrito</h1>
      {data?.map(item => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h1>
              {item.title}
            </h1>
            <p>
              {item.desc?.substring(0, 100)}
            </p>
            <div className='price'>
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEDER AL PAGO</button>
      <span className='reset'>
        Vaciar Carrito
      </span>
    </div>
  )
}
