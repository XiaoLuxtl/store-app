/* eslint-disable react/prop-types */
import { Card } from '../Card/Card'
import { useFetch } from '../../hooks/useFetch'

import './FeaturedProducts.scss'

export function FeaturedProducts ({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

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
        {
          error
            ? 'Something went wrong'
            : loading
              ? 'Loading...'
              : data.map(item => (
                <Card item={item} key={item.id} />
              ))
        }
      </div>
    </div>
  )
}
