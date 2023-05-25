import { useParams } from 'react-router-dom'
import { List } from '../../components/List/List'
import { useState } from 'react'
import './Products.scss'

export function Products () {
  const [maxPrice, setmaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  const catId = parseInt(useParams().id)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Categoría del producto</h2>
          <div className='inputItem'>
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Dama</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Caballero</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Zapatos</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2> Filtrar por precio</h2>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e) => setmaxPrice(e.target.value)} />
          <span>{maxPrice}</span>
        </div>
        <div className='filterItem'>
          <h2>Ordenar por</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={(e) => setSort('asc')} />
            <label htmlFor='asc'>Precio (menor primero)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value='desc' name='price' onChange={(e) => setSort('desc')} />
            <label htmlFor='desc'>Precio (mayor primero)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}
