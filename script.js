import ymaps from "ymaps";

ymaps
    .load()
    .then(maps => {
        let mapContainer = document.getElementById("map-container");
        mapContainer.style.height = "320px";
        mapContainer.style.width = "420px";
        console.log(mapContainer);
        const map = new maps.Map(mapContainer,
            {
                center: [43.102030, 131.922720],
                zoom: 7
            });
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error))


