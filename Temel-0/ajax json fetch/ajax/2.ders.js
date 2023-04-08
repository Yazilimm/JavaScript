document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees () {
    const xhr= new XMLHttpRequest();

    xhr.open("GET", "employees.json", true);

    xhr.onload = () => {
        let list = document.getElementById("employees");

        if (xhr.status === 200) {
            const employees =JSON.parse(xhr.responseText);
            employees.forEach(employee => {
                list.innerHTML +=
                `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                                               
                `
            });
        }
    }

    xhr.send();

}