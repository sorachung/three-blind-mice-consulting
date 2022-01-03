const applicationState = {
    employees: [],
};

const API = `http://localhost:8088`;

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then((response) => response.json())
        .then((employees) => (applicationState.employees = employees));
};

export const getEmployees = () => applicationState.employees.map(employee => ({ ...employee }));
