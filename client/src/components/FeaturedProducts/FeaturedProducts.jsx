/* eslint-disable react/prop-types */
import { Card } from '../Card/Card'
import './FeaturedProducts.scss'

export function FeaturedProducts ({ type }) {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/16809901/pexels-photo-16809901/free-photo-of-moda-hombre-modelo-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/16809906/pexels-photo-16809906/free-photo-of-moda-hombres-blanco-estilo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Primer Bolso de mano sensual',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/16777247/pexels-photo-16777247/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/16777225/pexels-photo-16777225/free-photo-of-moda-mujer-modelo-camisa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Audifonos divis divis',
      isNew: true,
      oldPrice: 22,
      price: 18
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/15685041/pexels-photo-15685041/free-photo-of-moda-cara-retrato-joyeria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/15685040/pexels-photo-15685040/free-photo-of-moda-mujer-modelo-joven.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Accesorios pio pio',
      isNew: false,
      oldPrice: 11,
      price: 7
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/6664300/pexels-photo-6664300.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/6188771/pexels-photo-6188771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Zapatos deportivos',
      isNew: false,
      oldPrice: 50,
      price: 35
    }

  ]

  return (
    <div className='featuredproducts'>
      <div className='top'>
        <h1>{type} products </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className='bottom'>
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
