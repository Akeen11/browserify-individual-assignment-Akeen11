const DataManager = require("./dataManager")
const listPlaces = require("./listPlaces")
const placeFormManager = require("./placesForm")
const $ = require("jquery")

$("#placeForm").html(placeFormManager.renderPlaceForm())

$("#placeList").on("click", "savePlaceButton", event => {
    const newPlace = { 
        location: $("#placeLocation").val(),
        date: $("#placeDate").val(),
    }

    DataManager.savePlace(newPlace).then(() => {
        placeFormManager.clearForm()

        $("placeList").html("")
        listPlaces()
    })
})

