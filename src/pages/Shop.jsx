import React from 'react'
import ShopHero from '../components/ShopHero'
import Shopproducts from '../components/Shopproducts'
import Modern from '../components/Modern'
import ShopApp from '../components/ShopApp'
import CheckOut from '../components/CheckoutPage'
import Guide from '../components/Guide'
import Bespoke from '../components/Bespoke'
const Shop = () => {
  return (
    <div>
<ShopHero />.
<CheckOut />
<Shopproducts />
<ShopApp />
<Modern />
<Guide />
<Bespoke />

    </div>
  )
}

export default Shop