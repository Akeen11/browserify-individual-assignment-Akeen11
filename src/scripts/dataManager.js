const APIManager = Object.create(null, {
    savePlace: {
        value: (place) => {
            return fetch("http://localhost:8088/place", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(place)
            })
                .then(response => response.json())
        }
    },
    getPlace: {
        value: () => {
            return fetch("http://localhost:8088/place").then(r => r.json())
        }
    },
    deletePlace: {
        value: (id) => {
            return fetch(`http://localhost:8088/place/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    },
})

module.exports = APIManager