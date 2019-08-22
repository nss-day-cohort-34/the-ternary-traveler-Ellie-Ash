const interestsData = {
    postNewInterest(interestObj) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestObj)
        })
            .then(newInterest => newInterest.json())
    },
    getAllInterests() {
        return fetch("http://localhost:8088/interests/")
            .then(interests => interests.json())
    },
    getOneInterest(id) {
        return fetch(`http://localhost:8088/interests/${id}`)
            .then(interests => interests.json())
    },
    deleteInterest(id) {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(newInterest => newInterest.json())
    },
    editInterest(interestObj) {
        return fetch(`http://localhost:8088/interests/${interestObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestObj)
        })
    },
}

export default interestsData