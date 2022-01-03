const applicationState = {
    computers: [],
};

const API = `http://localhost:8088`;

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then((response) => response.json())
        .then((computers) => (applicationState.computers = computers));
};

export const getComputers = () => applicationState.computers.map(computer => ({ ...computer }));