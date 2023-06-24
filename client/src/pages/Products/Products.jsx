import { List } from '../../components/List/List'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Products.scss'

export function Products () {
  const [selectedSubCats, setselectedSubCats] = useState([])
  const [maxPrice, setmaxPrice] = useState(1000)
  const [sort, setSort] = useState('asc')
  const catId = parseInt(useParams().id)

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  )

  function handlechange (e) {
    const value = e.target.value
    const isChecked = e.target.checked

    setselectedSubCats(
      isChecked
        ? [...selectedSubCats, value.trim()]
        : selectedSubCats.filter(item => item !== value)
    )
  }

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Categoría del producto</h2>
          {data.map((item) => (
            <div className='inputItem' key={item.id}>
              <input type='checkbox' id={item.id} value={item.id} onChange={handlechange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
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
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}
