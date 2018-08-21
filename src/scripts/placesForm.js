const $ = require("jquery")

const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#placeLocation").val("")
            $("#placeDate").val("")
        }
    },
    renderPlaceForm: {
        value: () => {
            return `
            <h2 id="formHeader">Places</h2>

                <label for="placeLocation">Location:</label>
                <input required type="text" id="placeLocation">

                <label for="placeDate">Date:</label>
                <input required type="date" id="placeDate">

                <button id="savePlaceButton" class="place__save">Save Place</button>

            `
        }
    }
})

module.exports = FormManager