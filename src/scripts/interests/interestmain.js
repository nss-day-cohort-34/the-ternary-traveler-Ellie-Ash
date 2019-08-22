import travelFactory from "./interestfactory"
import renderToDom from "./interestdom"
import interestsData from "./interestdata"

const mainFunctions = {
    addEventListenerToAddInterestButton() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "add-interest-btn") {
                renderToDom.renderAddInterestForm()
                this.cancelInterestForm()
            }
        })
    },
    saveNewInterest() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id === "save-interest-btn") {
                const newInterestName = document.querySelector("#interest-name").value
                const newInterestDescription = document.querySelector("#interest-description").value
                const newInterestCost = document.querySelector("#interest-cost").value
                const newInterestCountry = document.querySelector("#interest-dropdown").value
                if (newInterestName !== "" && newInterestDescription !== "" && newInterestCost !== "") {

                    const newInterestObj = {
                        name: newInterestName,
                        description: newInterestDescription,
                        cost: newInterestCost,
                        review: "",
                        placeId: newInterestCountry
                    }
                    const addInterestBtnContainer = document.querySelector("#interestFormContainer")
                         addInterestBtnContainer.innerHTML = travelFactory.rerenderAddInterestBtn()
                    interestsData.postNewInterest(newInterestObj)
                        .then(this.displayAllInterests)
                }
                else {
                    alert("pls fill out the form")
                }
            }
        })
    },
    cancelInterestForm() {
        const cancelInterestBtn = document.querySelector("#cancel-interest-btn")
        const addInterestBtnContainer = document.querySelector("#interestFormContainer")
        cancelInterestBtn.addEventListener("click", () => {
            addInterestBtnContainer.innerHTML = travelFactory.rerenderAddInterestBtn()
        })
    },
    deleteInterest() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.includes("delete-interest-btn")) {
                const interestId = event.target.id.split("--")[1]
                interestsData.deleteInterest(interestId)
                    .then(this.displayAllInterests)
            }
        })
    },
    editInterest() {
        const mainContainer = document.querySelector("#container")
        mainContainer.addEventListener("click", () => {
            if (event.target.id.split("--")[0] === "edit-interest-btn") {
                const interestId = event.target.id.split("--")[1]
                interestsData.getOneInterest(interestId)
                    .then((interestObj) => {
                        renderToDom.renderInterestEditForm(interestObj)
                    })
            }
            else if (event.target.id.split("--")[0] === "save-interest-edit-btn") {
                const editNameField = document.querySelector("#edit-interest-name").value
                const editDescriptionField = document.querySelector("#edit-interest-description").value
                const editCostField = document.querySelector("#edit-interest-cost").value
                const interestId = event.target.id.split("--")[1]
                const editInterestReview = document.querySelector("#edit-interest-review").value
                const updatedInterest = {
                    name: editNameField,
                    description: editDescriptionField,
                    cost: editCostField,
                    review: editInterestReview,
                    id: interestId
                }
                interestsData.editInterest(updatedInterest).then(this.displayAllInterests)
            }
        })
    },
    displayAllInterests() {
        interestsData.getAllInterests()
            .then(allInterests => {
                document.querySelector("#interestCardsContainer").innerHTML = ""
                allInterests.forEach(interest => {
                    const interestHtml = travelFactory.interestCardHtml(interest)
                    renderToDom.renderCardsToDom(interestHtml)
                })
            })
        },
        invokeAllFunctions() {
            this.addEventListenerToAddInterestButton()
            this.saveNewInterest()
            this.deleteInterest()
            this.editInterest()
        }
    }

export default mainFunctions
