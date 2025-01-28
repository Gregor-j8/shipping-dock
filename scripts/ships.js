import { getShippingShips, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.dataset.type === 'ship') {
                const haulerId = itemClicked.dataset.haulerid 
                const shipName = itemClicked.dataset.shipname
                let haulingShip = { name: "Incorrect" }
            // Iterate the array of hauler objects
                const haulerShip = getHaulingShips() 
                for (const hauler of haulerShip) {
                    if (hauler.id === parseInt(haulerId)) {
                        // Does the haulerId foreign key match the id of the current hauler?
                        haulingShip.name = hauler.name
                    }
                }
                    window.alert(`${shipName} is being hauled by ${haulingShip.name}`)

                    // Reassign the value of `haulingShip` to the current hauler

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
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
