const DataManager = require("./dataManager")
const listPlaces = require("./listPlaces")
const FormManager = require("./placesForm")
const $ = require("jquery")

$("#placeForm").html(FormManager.renderPlaceForm())
listPlaces()

$("#savePlaceButton").on("click", () => {
    const newPlace = { 
        location: $("#placeLocation").val(),
        date: $("#placeDate").val(),
    }

    DataManager.savePlace(newPlace).then(() => {
        FormManager.clearForm()

        $("#placeList").html("")
        listPlaces()
    })
})



