const travelFactory = {

    newInterestFormHtml() {
        return `
        <fieldset id="new-interest-form">
            <input id="interest-name" type="text" placeholder="Point of Interest">
            <input id="interest-description" type="text" placeholder="Description">
            <input id="interest-cost" type="text" placeholder="Cost">
            <select id="interest-dropdown">
                <option value="france">France</option>
                <option value="italy">Italy</option>
                <option value="switzerland">Switzerland</option>
            </select>
            <button id="save-interest-btn">Save New Point of Interest</button>
            <button id="cancel-interest-btn">Cancel</button>
        </fieldset>
        `
    },
    interestCardHtml(interestObj) {
        return `
        <div id="interestCard--${interestObj.id}">
            <h2>${interestObj.name}</h2>
            <p> ${interestObj.description}</p>
            <p>${interestObj.cost}</p>
            <p>${interestObj.review}</p>
            <button id="edit-interest-btn--${interestObj.id}">Edit</button>
            <button id="delete-interest-btn--${interestObj.id}">Delete</button>
        </div>
        `
    },
    editInterestHtml(interestObj) {
        return `
        <fieldset id="new-interest-form">
        <input id="edit-interest-name" type="text" value="${interestObj.name}" placeholder="name">
        <input id="edit-interest-description" type="text" value="${interestObj.description}" placeholder="description">
        <input id="edit-interest-cost"" type="text" value="${interestObj.cost}" placeholder="cost">
        <input id="edit-interest-review"" type="text" value="${interestObj.review}" placeholder="Add review">
        <button id="save-interest-edit-btn--${interestObj.id}">Save Changes</button>
    </fieldset>`
    },
    rerenderAddInterestBtn() {
        return `
        <button id="add-interest-btn">Add New Point of Interest</button>`
    }
}

export default travelFactory