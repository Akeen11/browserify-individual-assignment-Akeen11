const createPlace = require("./places")
const DataManager = require("./dataManager")
const $ = require("jquery")

listPlace = () => {
    DataManager.getPlace()
        .then(results => {
            $("#placeList").empty()
            results.forEach(place => {
                let placeComponent = createPlace(place.location, place.date)
                writePlacesToDOM(placeComponent)
            })
        });
    }
    writePlacesToDOM = (place) => {
        $("#placeList").append(place)
}

module.exports = listPlace