const createPlace = (location, date, id) => {
    return `
    <article>
        <h2>
            ${location}
        </h2>
        <section>
            <time>${date}</time>
        </section>
        <button id="deletePlaceButton--${id}" class="place__delete">Delete Place</button>
    </fieldset>
    `
}

module.exports = createPlace
