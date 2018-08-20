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
            <h2>Places</h2>
            <div>
                    <label for="placeLocation">Location:</label>
                    <input required type="text" id="placeLocation">
                    <label for="placeDate">Date:</label>
                    <input required type="date" id="placeDate">
                <button id="savePlaceButton">Save Place</button>
            </div>
            
            `
        }
    }
})

module.exports = FormManager