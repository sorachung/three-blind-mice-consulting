import { getComputers, getDepartments } from "./ComputerDataProvider.js";
import { getEmployees } from "./EmployeeDataProvider.js";

export const Employee = () => {
    const employees = getEmployees();
    const computers = getComputers();
    const departments = getDepartments();
    
    return `
        ${employees.map(employee => {
            const foundComputer = computers.find(computer => computer.id === employee.computerId);
            const foundDepartment = departments.find(dept => dept.id === employee.departmentId)
            return `
                <div class="employee">
                    <header>
                        <h1>${employee.firstName} ${employee.lastName}</h1>
                    </header>
                    <section class="employee__computer">
                        Currently using a ${foundComputer.year} ${foundComputer.model}
                    </section>
                    <section class="employee__department">
                        Works in the ${foundDepartment.name} department
                    </section>
                </div>`
        }).join("")}
    `
}
