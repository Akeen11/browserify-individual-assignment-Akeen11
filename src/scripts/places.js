const createPlace = (location, date, id) => {
    return `
    <article>
        <section>
            ${location}
        </section>
        <section>
            <time>${date}</time>
        </section>
        <button id="deleteEventButton--${id}" class="event__delete">Delete Event</button>
    </fieldset>
    `
}

module.exports = createPlace
