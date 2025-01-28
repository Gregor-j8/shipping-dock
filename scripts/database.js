const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {
            dockId: 2, 
            id: 1,
            name: "Pioneering Spirit"
        },
        { 
            dockId: 3,
            id: 2,
            name: "boaty McBoatFace"
        },
        { 
            dockId: 2,
            id: 3, 
            name: "Seawise Giant"
        },
        { 
            dockId: 4,
            id: 4,
            name: "Whispering Waves"
        },
        { 
            dockId: 4,
            id: 5,
            name: "Nautical Dreamer"
        },
        { 
            dockId: 2,
            id: 6, 
            name: "Aquatic Odyssey"
        }
    ], 
    ships: [
        {
            id: 1, 
            name: "esso Atlantic"
        },
        {
            id: 1, 
            name: "pairial"
        },
        {
            id: 3, 
            name: "Palais Royal"
        },
        {   
            id: 4, 
            name: "Rivoli"
        },
        {
            id: 5, 
            name: "Champs Elysee"
        },
        {
            id: 6, 
            name: "Ever Ace"
        },
        {
            id: 3, 
            name: "Nissei Maru"
        },
        {
            id: 5, 
            name: "MSC Gulsun"
        },
        {
            id: 2, 
            name: "HMM Rotterdam"
        },
        {
            id: 1, 
            name: "CMA CGM Trocadero"
        },
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => (dock))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => (hauler))
}

export const getShippingShips = () => {
    return database.ships.map(ship => (ship))
}
