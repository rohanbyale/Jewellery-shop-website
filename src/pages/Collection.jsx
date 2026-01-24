import React from 'react'
import CollectionHero from '../components/CollectionHero'
import CollectionGrid from '../components/CollectionGrid'
import ProductDetail from '../components/ProductPage'
import StoneSelection from '../components/StoneSelection'
import BestMaterial from '../components/BestMaterial'
import Heritage from '../components/Heritage'

const Collection = () => {
  return (
    <div>
        <CollectionHero />
        <CollectionGrid />
        {/* <ProductDetail /> */}
        <StoneSelection />
        <BestMaterial />
        <Heritage />
    </div>
  )
}

export default Collection