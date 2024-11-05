const numberInput = document.getElementById("num-input")
const inputOpt = document.getElementById("opt-input")
const genbtn = document.getElementById("gen-btn")
const genContent = document.querySelector(".gen-content")
const copyBtn = document.getElementById("copy-btn")

let count = 5, options = "paras"
let tempCount = 0
genbtn.addEventListener("click", () => {
    getValues()
})

function getValues() {
    count = numberInput.value
    options = inputOpt.value

    validateValue()
    // console.log(count, options)
    let url = `https://baconipsum.com/api/?type=meat-and-filler&${options}=${count}&start-with-lorem=1`

    fetchContent(url)
}

async function fetchContent(url) {
    let response = await fetch(url)
    if (response.status === 200) {
        let data = await response.json()
        displayGenContent(data)
        // console.log(data)
    }
    else {
        alert("An error occured")
    }
}

function displayGenContent(data) {
    let texts = ""
    texts = data.join("<br><br>")

    genContent.innerHTML = texts
}

function validateValue() {
    tempCount = ""
    if (count > 100) {
        invalidInput()
        count = 100
        numberInput.value = "100"
    }
    else if (count < 1 || isNaN(count)) {
        invalidInput()
        count = 5
        numberInput.value = "5"
    }
}

function invalidInput() {
    numberInput.style.borderColor = "#ff6a67"

    setTimeout(() => {
        numberInput.style.borderColor = "#d3deb4"
    }, 1000);
}

copyBtn.addEventListener("click", () => {
    let copyText = genContent.textContent
    navigator.clipboard.writeText(copyText)
})