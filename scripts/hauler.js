import { getHaulingShips, getShippingShips } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulingShips()
    let counter = 0
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if (itemClicked.dataset.type === 'hauler') {
                const haulerId = itemClicked.dataset.haulerid
                const shippingShip = getShippingShips() 
                
                for (const ship of shippingShip) {
                    if (ship.id === parseInt(haulerId)) { 
                    counter++
                    }
                }  
                window.alert(`this hauler is hauling ${counter} shipping ships`) 
                counter = 0
            }
        }
    )

    let haulerHTML = "<ul class='list-items'>"

    for (const hauler of haulers) {
        haulerHTML += `<li data-type="hauler" data-haulerid="${hauler.id}">${hauler.name}</li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}


