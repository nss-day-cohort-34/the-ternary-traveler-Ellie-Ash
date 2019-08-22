import mainFunctions from "./interests/interestmain";
import ultraFactory from "./factory"

const ultraRender =  {
    renderDashboardToDom() {
    const ultraContainer = document.querySelector("#container")
    ultraContainer.innerHTML = ultraFactory.ultraRep()
    mainFunctions.displayAllInterests()
  }
}

export default ultraRender