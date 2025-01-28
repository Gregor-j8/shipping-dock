import { DockList } from './docks.js'
import { HaulerList } from './hauler.js'
import { ShipList } from './ships.js'

const container = document.querySelector("#container")

const shippingDockHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="ship-tracker">
    <section class="list">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="list">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="list">
        <h2>Cargo Ships</h2>
        ${ShipList()}
    </section>
</article>
`

container.innerHTML = shippingDockHTML
