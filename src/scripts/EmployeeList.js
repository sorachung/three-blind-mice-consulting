import { Employee } from "./Employee.js"


export const EmployeeList = () => {
    
    return `<div class="employee">
        <h1>Employees</h1>
            ${Employee()}
        </div>`
}