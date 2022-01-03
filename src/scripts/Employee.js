import { getComputers } from "./ComputerDataProvider.js";
import { getEmployees } from "./EmployeeDataProvider.js";

export const Employee = () => {
    const employees = getEmployees();
    const computers = getComputers();
    
    return `
        ${employees.map(employee => {
            const foundComputer = computers.find(computer => computer.id === employee.computerId)
            return `<section>
            <h2>${employee.firstName} ${employee.lastName}</h2>
            <h3>${foundComputer.year} ${foundComputer.model}</h3>
            </section>`
        }).join("")}
    `
}
