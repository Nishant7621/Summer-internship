let userdata = [];

let form = document.querySelector("form");
let container = document.querySelector(".container");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.querySelector("#userid").value;
    let id = document.querySelector("#e-id").value;
    let role = document.querySelector("#role").value;
    let profile = document.querySelector("#profile").value;

    let user = {
        name,
        id,
        role,
        profile
    };

    userdata.push(user);

    userRender();

    form.reset();
});

function userRender() {

    container.innerHTML = "";

    userdata.forEach((user) => {

        container.innerHTML += `
            <div class="card">
                <img src="${user.profile}" alt="Profile">

                <h3>${user.name}</h3>

                <p><strong>ID:</strong> ${user.id}</p>

                <p><strong>Role:</strong> ${user.role}</p>
            </div>
        `;

    });

}