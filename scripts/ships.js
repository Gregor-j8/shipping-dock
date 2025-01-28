import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.dataset.type === 'ship') {
                const haulerId = itemClicked.dataset.haulerid 
                const shipName = itemClicked.dataset.shipname
                let haulingShip = { name: "Incorrect" }
                const haulerShip = getHaulingShips() 
                for (const hauler of haulerShip) {
                    if (hauler.id === parseInt(haulerId)) {
                        haulingShip.name = hauler.name
                    }
                }
                    window.alert(`${shipName} is being hauled by ${haulingShip.name}`)
            }
    }
)

export const ShipList = () => {
    const ships = getShippingShips()
    let shipHTML = "<ul class='list-items'>"

    for (const ship of ships) {
        shipHTML += `<li data-type='ship' data-shipname="${ship.name}" data-haulerid="${ship.id}" >${ship.name}</li>`
    }

    shipHTML += "</ul>"

    return shipHTML
}
