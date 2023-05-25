/* eslint-disable react/prop-types */
import './List.scss'
import { Card } from '../Card/Card'

export function List ({
  catId,
  maxPrice,
  sort,
  subCats
}) {
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
      img: 'https://images.pexels.com/photos/16809901/pexels-photo-16809901/free-photo-of-moda-hombre-modelo-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/16809906/pexels-photo-16809906/free-photo-of-moda-hombres-blanco-estilo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Segundo Bolso de mano sensual',
      isNew: true,
      oldPrice: 22,
      price: 18
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/16809901/pexels-photo-16809901/free-photo-of-moda-hombre-modelo-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/16809906/pexels-photo-16809906/free-photo-of-moda-hombres-blanco-estilo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Tercer Bolso de mano sensual',
      isNew: false,
      oldPrice: 11,
      price: 7
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/16809901/pexels-photo-16809901/free-photo-of-moda-hombre-modelo-blanco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/16809906/pexels-photo-16809906/free-photo-of-moda-hombres-blanco-estilo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Cuarto Bolso de mano sensual',
      isNew: false,
      oldPrice: 50,
      price: 35
    }

  ]
  return (
    <>
      <div className='list'>
        {data?.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}
