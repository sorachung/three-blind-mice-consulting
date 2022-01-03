import { fetchComputers, fetchDepartments } from "./ComputerDataProvider.js";
import { fetchEmployees } from "./EmployeeDataProvider.js";
import { EmployeeList } from "./EmployeeList.js";

const container = document.querySelector(".container")
const render = () => {
    Promise.all([fetchComputers(), fetchEmployees(), fetchDepartments()])
        .then( () => {
            container.innerHTML = EmployeeList()
        })
}

render();