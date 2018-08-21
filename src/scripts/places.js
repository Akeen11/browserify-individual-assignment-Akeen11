const createPlace = (location, date, id) => {
    return `
    <div id="newPlace" class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://loremflickr.com/g/320/240/brazil,rio?random=1" alt="Card image cap">
        <div class="card-body">
        <h2>
            Location: ${location}
        </h2>
        <section>
            <time>${date}</time>
        </section>
        </div>
        <button id="deletePlaceButton--${id}" class="placeDelete">Delete Place</button>

    </div>
    `
}

module.exports = createPlace



