/* eslint-disable react/prop-types */
import './List.scss'
import { Card } from '../Card/Card'
import { useFetch } from '../../hooks/useFetch'

export function List ({
  catId,
  maxPrice,
  sort,
  subCats
}) {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`).join('')
    }&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )

  return (
    <div className='list'>
      {loading
        ? 'loading'
        : data?.map(item => (
          <Card item={item} key={item.id} />
        ))}
    </div>
  )
}
