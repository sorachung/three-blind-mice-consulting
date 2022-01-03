import { getComputers } from "./ComputerDataProvider.js";
import { getEmployees } from "./EmployeeDataProvider.js";

export const Employee = () => {
    const employees = getEmployees();
    const computers = getComputers();
    
    return `
        ${employees.map(employee => {
            return `<section>
            ${employee.firstName} ${employee.lastName}
            </section>`
        }).join("")}
    `
}
