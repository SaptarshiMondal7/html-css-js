//logic to fill the table
const showPassword = () => {
    let tb = document.querySelector(`.yourpass`);
    let data = localStorage.getItem(`passObject`);
    if(data === null){
        tb.innerHTML = `No data to show`;
    }
    else{
        let arr = JSON.parse(data);
        let str = ``;
        tb.innerHTML = `<tr>
        <th>Websites</th>
        <th>Username</th>
        <th>Password</th>
        <th>Deletion</th>
    </tr>`;
        for(let i=0; i<arr.length; i++){
            const element = arr[i];
            
            str += `<tr>
            <td>${element.website}</td>
            <td>${element.username}</td>
            <td>${maskPassword(element.password)}</td>
            <td><button class='btns' onclick = deletePassword('${element.website}')>Delete</button></td>
            </tr>`
        }
        tb.innerHTML += str;
    }
};

//logic for deletion of a row
const deletePassword = (websiteToDel) => {
    let data = localStorage.getItem(`passObject`);
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {
        return e.website != websiteToDel;
    })
    if (arrUpdated.length === 0) {
        // If the updated array is empty, remove the entire passObject from localStorage
        localStorage.removeItem(`passObject`);
    } else {
        localStorage.setItem(`passObject`, JSON.stringify(arrUpdated));
    }
    alert(`Successfully deleted ${websiteToDel}'s password`);

    showPassword();
}

// Function to copy text to the clipboard
// Add a click event listener to the table rows
document.querySelector('.yourpass').addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'TD') {
        const content = target.innerText;
        navigator.clipboard.writeText(content)
            .then(() => {     
                document.getElementById(`alert`).style.display = `inline`;
                setTimeout( () => {
                    document.getElementById(`alert`).style.display = `none`;
                }, 2000)
            })
            .catch((err) => {
                console.error('Unable to copy to clipboard: ', err);
            });
    }
});

//logic to mask the password
const maskPassword = (pass) => {
    let str = ``;
    for(let i=0; i<pass.length; i++){
        str += `*`;
    }
    return str;
};

//logic to save the password on clicking the submit button
showPassword();
document.querySelector(`.btn`).addEventListener(`click`, (event) => {
    event.preventDefault();
    // console.log(username.value, password.value);
    let storedPassword = localStorage.getItem(`passObject`);
    console.log(storedPassword);
    if(storedPassword === null){
        let passArray = [];
        passArray.push({website: website.value, username: username.value, password: password.value});
        alert(`Password saved`)
        localStorage.setItem(`passObject`, JSON.stringify(passArray));
    }
    else{
        let passArray = JSON.parse(localStorage.getItem(`passObject`));
        passArray.push({website: website.value, username: username.value, password: password.value});
        alert(`Password saved`)
        localStorage.setItem(`passObject`, JSON.stringify(passArray));
    }
    showPassword();
    website.value = ``;
    username.value = ``;
    password.value =  ``;
    // localStorage.clear();
});

//animations
gsap.from(`.nav`, {
    backgroundColor: `rgb(209, 95, 95)`,
    duration: 1.5,
    scale: 1.2
})

gsap.from(`#tophead`, {
    scale: 1.2,
    duration: 1.5
})