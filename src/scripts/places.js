const createPlace = (location, date, id) => {
    return `
    <fieldset>
    <article>
        <h2>
            ${location}
        </h2>
        <section>
            <time>${date}</time>
        </section>
        <button id="deletePlaceButton--${id}" class="placeDelete">Delete Place</button>
    </fieldset>
    `
}

module.exports = createPlace
