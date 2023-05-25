import { Categories } from '../../components/Categories/Categories'
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts'
import { Slider } from '../../components/Slider/Slider'

export function Home () {
  return (
    <>
      <Slider />
      <FeaturedProducts type='featured' />
      <Categories />
      <FeaturedProducts type='trending' />
    </>
  )
}
