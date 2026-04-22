const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
const openCloseGeneratorButton = document.querySelector("#open-generate-password");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");


// Funções 
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

console.log(getLetterLowerCase())

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumbers = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}

const getSymbols = () => {
    const symbols = "(){}[]=<>/,.!@#$%^&*";
    return symbols[Math.floor(Math.random() * symbols.length)];

}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols) => {
    let password = ""

    const passwordLength = lengthInput.value;

    const generators = []

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if (numbersInput.checked) {
        generators.push(getNumbers)
    }

    if (symbolsInput.checked) {
        generators.push(getSymbols)
    }

    if (generators.length === 0) {
        return
    }

    while (password.length < passwordLength) {
        const randomGen = generators[Math.floor(Math.random() * generators.length)]
        password += randomGen()
    }
    console.log(password)

    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
}

// Eventos

generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols)
})

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()
    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() =>{

        const originalColor = copyPasswordButton.style.backgroundColor
        copyPasswordButton.style.backgroundColor = "#28a745"

        const popup = document.createElement("div")
        popup.innerText = "Senha copiada"

        Object.assign(popup.style, {
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            zIndex: "1000",
            transition: "opacity 0.3s ease"
        })

        document.body.appendChild(popup)

        setTimeout(() =>{
            copyPasswordButton.style.backgroundColor = originalColor

            popup.style.transition = "opacity 2s ease";
            popup.style.opacity = "0";
           
            setTimeout(() => popup.remove(), 2000)
        },2000)

    })
    
})