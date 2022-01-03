const applicationState = {
    computers: [],
    departments: []
};

const API = `http://localhost:8088`;

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then((response) => response.json())
        .then((computers) => (applicationState.computers = computers));
};

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
        .then((response) => response.json())
        .then((departments) => (applicationState.departments = departments));
};

export const getComputers = () => applicationState.computers.map(computer => ({ ...computer }));

export const getDepartments = () => applicationState.departments.map(department => ({ ...department }));