import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
            const dockId = itemClicked.dataset.dockid
            const dockLocation = itemClicked.dataset.location
            let parkedShips = ' '
            let shipAmount = 0
                const haulingShips = getHaulingShips()
                for (const ship of haulingShips) {
            if (ship.dockId === parseInt(dockId)) {
                    shipAmount++
                    parkedShips += ship.name + ", "
                    } else {
                    null
                }
            }
                if (shipAmount === 0) {
                    window.alert(`The ${dockLocation} dock is currently unloading nothing`)
                } else if (shipAmount === 1) {
                    window.alert(`The ${dockLocation} dock is currently unloading ${parkedShips}`)
                } else {
                    window.alert(`The ${dockLocation} dock is currently unloading  ${parkedShips}`)
                } 
        }
    }
)

export const DockList = () => {
    const docks = getDocks()
    let docksHTML = "<ul class='list-items'>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock" data-location="${dock.location}" data-dockid="${dock.id}">${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}
