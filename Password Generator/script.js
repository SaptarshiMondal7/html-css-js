const upperCaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lowerCaseLetters = `abcdefghijklmnopqrstuvwxyz`;
const numbers = `0123456789`;
const symbols = `!@#$%^&*()_+-=|~[]{}<>?`
const allChars = upperCaseLetters + lowerCaseLetters + numbers + symbols;
const length = 12;

document.querySelector(`.btn`).addEventListener(`click`, genPassword = () => {
    let password = ``;
    password += upperCaseLetters[Math.trunc(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.trunc(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.trunc(Math.random() * numbers.length)];
    password += symbols[Math.trunc(Math.random() * symbols.length)];
    while(password.length < length){
        password += allChars[Math.trunc(Math.random() * allChars.length)];
    }
    document.querySelector(`#password`).value = password;
    // console.log(password);
})

document.querySelector(`.image`).addEventListener(`click`, copyPassword = () => {
    const pwd = document.querySelector(`#password`).value;
    navigator.clipboard.writeText(pwd)
        .then( () => {
            document.getElementById(`alert`).style.display = `block`;
            setTimeout( () => {
                document.getElementById(`alert`).style.display = `none`;
            }, 1500)
        })
        .catch((err) => {
            console.error('Unable to copy to clipboard: ', err);
        });
});

gsap.from(`.nav`, {
    backgroundColor: `rgb(233, 210, 82)`,
    scale: 1.2,
    duration: 1.5
})

gsap.from(`#tophead`, {
    scale: 1.2,
    duration: 1.5
})