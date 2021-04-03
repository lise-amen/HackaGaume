"useStrict";

const materials = [
    {
        "name": "Multimédia",
        "inventory": [
            {
                "object": "Projecteur",
                "quantity": 4
            },
            {
                "object": "Écran de projecteur",
                "quantity": 4
            },
            {
                "object": "Microphone",
                "quantity": 10
            }
        ]
    },
    {
        "name": "Catering / mobilier",
        "inventory": [
            {
                "object": "Chaise",
                "quantity": 200
            },
            {
                "object": "Banc",
                "quantity": 50
            },
            {
                "object": "Table",
                "quantity": 50
            },
            {
                "object": "Verre",
                "quantity": 600
            }
        ],
    },
    {
        "name": "Événementiel",
        "inventory": [
            {
                "object": "Projecteur lumineux",
                "quantity": 10
            },
            {
                "object": "Projecteur colorés",
                "quantity": 10
            },
            {
                "object": "Morceau de scène",
                "quantity": 10
            },
            {
                "object": "Pupitre",
                "quantity": 2
            }
        ]
    }
];

const inventoryList = document.querySelector("#inventoryList");
materials.forEach(category => {
    const title = document.createElement("h3");
    title.classList.add("admin-inventory__subtitle");
    title.innerText = category.name;
    const list = document.createElement("ul");
    list.classList.add("admin-inventory__list");
    category.inventory.forEach(item => {
        const element = document.createElement("li");
        element.classList.add("admin-inventory__item");
        element.innerText = `${item.object} (${item.quantity})`;
        list.appendChild(element);
    });
    inventoryList.appendChild(title);
    inventoryList.appendChild(list);

})