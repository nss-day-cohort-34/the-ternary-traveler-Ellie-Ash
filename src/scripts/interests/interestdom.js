import travelFactory from "./interestfactory"

const renderToDom = {
    renderAddInterestForm() {
        const formContainer = document.querySelector("#interestFormContainer")
        formContainer.innerHTML = travelFactory.newInterestFormHtml()
    },
    renderCardsToDom(htmlString) {
        const interestsContainer = document.querySelector("#interestCardsContainer")
        interestsContainer.innerHTML += htmlString
    },
    renderInterestEditForm(interestObj) {
        const editInterestCard = document.querySelector(`#interestCard--${interestObj.id}`)
        editInterestCard.innerHTML = travelFactory.editInterestHtml(interestObj)
    }
}

export default renderToDom