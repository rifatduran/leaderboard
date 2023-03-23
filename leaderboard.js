const base = document.querySelector(".base")
const container = document.querySelector(".container")
const frsnaminpt = document.querySelector("#frsnam")
const lstnaminpt = document.querySelector("#lstnam")
const cntryinpt = document.querySelector("#cntry")
const scoreinpt = document.querySelector("#score")
const button = document.querySelector("#bttn")
// const button = document.querySelectorAll("button")
const err = document.querySelector("#err")

let caracters = [
    { firstname: "Cem", lastname: "Bölükbaşı", country: "turkey", score: "80", time: "", name: "" },
    { firstname: "Rıfat", lastname: "duran", country: "turkey", score: "100", time: "", name: "" },
    { firstname: "lewis", lastname: "hamilton", country: "england", score: "80", time: "", name: "" },
]

button.addEventListener("click", e => {
    if (frsnaminpt.value && lstnaminpt.value && cntryinpt.value && scoreinpt.value !== "") {
        err.innerHTML = ""

        let sv = Math.floor(scoreinpt.value)

        if (scoreinpt.value == sv) {

            let now = new Date()
            let Now = `${now}`

            let Name = `${frsnaminpt.value[0].toUpperCase()}${frsnaminpt.value.slice(1, frsnaminpt.value.length)} ${lstnaminpt.value[0].toUpperCase()}${lstnaminpt.value.slice(1, lstnaminpt.value.length)}`
            if (Name.length > 15) { Name = `${Name.slice(0, 13)}...` }
            let cnt = `${cntryinpt.value[0].toUpperCase()}${cntryinpt.value.slice(1, cntryinpt.value.length)}`
            caracters.push({ firstname: frsnaminpt.value, lastname: lstnaminpt.value, country: cntryinpt.value, score: scoreinpt.value, time: `${Now.slice(4, 21)}`, name: `${Name}` })

            caracters.sort(function (x, y) {
                return y.score - x.score
            })

            base.innerHTML = ""

            for (let i = 0; i < caracters.length; i++) {
                const caracter = document.createElement("div")
                const name = document.createElement("div")
                const country = document.createElement("div")
                const score = document.createElement("div")
                const delet = document.createElement("button")
                const plus = document.createElement("button")
                const minus = document.createElement("button")
                const div = document.createElement("div")
                const date = document.createElement("div")

                caracter.style.display = "flex"
                caracter.style.backgroundColor = "rgb(255, 199, 244)"
                caracter.style.marginTop = "10px"
                caracter.style.flexDirection = "row"
                caracter.style.width = "1000px"
                caracter.style.height = "100px"
                caracter.style.justifyContent = "center"
                caracter.style.alignItems = "center"
                caracter.className = `caracter${i}`
                caracter.style.order = `${i}`


                name.textContent = caracters[i].name
                name.style.fontSize = "50px"
                name.style.width = "400px"
                name.className = `name${i}`

                date.textContent = `${caracters[i].time}`
                date.style.fontSize = "20px"
                date.style.marginTop = "5px"
                date.className = `date${i}`

                country.textContent = caracters[i].country
                country.style.alignItems = "center"
                country.style.width = "150px"
                country.style.fontSize = "30px"
                country.className = `country${i}`

                score.textContent = `${caracters[i].score}`
                score.style.width = "150px"
                score.style.fontSize = "50px"
                score.id = `score${i}`

                delet.className = "fas fa-trash"
                delet.style.borderRadius = "100%"
                delet.style.border = "0px"
                delet.style.margin = "5px"
                delet.style.backgroundColor = "white"
                delet.style.color = "red"
                delet.style.fontSize = "20px"
                delet.style.width = "45px"
                delet.style.height = "45px"
                delet.id = `delet${i}`

                plus.textContent = "+5"
                plus.style.borderRadius = "100%"
                plus.style.border = "0px"
                plus.style.margin = "5px"
                plus.style.backgroundColor = "white"
                plus.style.width = "30px"
                plus.style.height = "30px"
                plus.style.fontSize = "20px"
                plus.style.width = "45px"
                plus.style.height = "45px"
                plus.id = `plus${i}`

                minus.textContent = "-5"
                minus.style.borderRadius = "100%"
                minus.style.margin = "5px"
                minus.style.border = "0px"
                minus.style.backgroundColor = "white"
                minus.style.width = "30px"
                minus.style.height = "30px"
                minus.style.fontSize = "20px"
                minus.style.width = "45px"
                minus.style.height = "45px"
                minus.id = `minus${i}`

                div.appendChild(name)
                div.appendChild(date)
                caracter.appendChild(div)
                caracter.appendChild(country)
                caracter.appendChild(score)
                caracter.appendChild(delet)
                caracter.appendChild(plus)
                caracter.appendChild(minus)
                base.appendChild(caracter)

            }

            for (let j = 0; j <= caracters.length; j++) {
                const trash = document.querySelector(`#delet${j}`)
                const minus = document.querySelector(`#minus${j}`)
                const plus = document.querySelector(`#plus${j}`)
                const score = document.querySelector(`#score${j}`)
                const caracter = document.querySelector(`.caracter${j}`)
                trash.addEventListener("click", e => {
                    caracter.remove()
                    caracters.splice(j, 1)
                    console.log(caracters);
                })
                minus.addEventListener("click", e => {
                    score.textContent = score.textContent - 5
                    caracters[j].score = caracters[j].score - 5
                    console.log(caracters);
                    if (caracters[j].score < caracters[j + 1].score) {
            
                        caracters.sort(function (x, y) {
                            return y.score - x.score
                        })
            
                        for (let x = 0; x < caracters.length; x++) {
            
                            const name = document.querySelector(`.name${x}`)
                            const date = document.querySelector(`.date${x}`)
                            const country = document.querySelector(`.country${x}`)
                            const score = document.querySelector(`#score${x}`)
            
                            name.textContent = `${caracters[x].name}`
                            date.textContent = `${caracters[x].time}`
                            country.textContent = `${caracters[x].country}`
                            score.textContent = `${caracters[x].score}`
            
                        }
            
            
                    }
            
                })
                plus.addEventListener("click", e => {
                    score.textContent = Number(score.textContent) + 5
                    caracters[j].score = Number(caracters[j].score) + 5
                    console.log(caracters);
                    if (caracters[j - 1].score < caracters[j].score) {
            
                        caracters.sort(function (x, y) {
                            return y.score - x.score
                        })
            
                        for (let x = 0; x < caracters.length; x++) {
            
                            const name = document.querySelector(`.name${x}`)
                            const date = document.querySelector(`.date${x}`)
                            const country = document.querySelector(`.country${x}`)
                            const score = document.querySelector(`#score${x}`)
            
                            name.textContent = `${caracters[x].name}`
                            date.textContent = `${caracters[x].time}`
                            country.textContent = `${caracters[x].country}`
                            score.textContent = `${caracters[x].score}`
            
                        }
                    }
                })
            }

        } else {
            err.textContent = "Skor should be integer"
            err.style.color = "red"
            err.style.fontSize = "30px"
            err.style.margin = "20px"
            err.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        }

    } else {
        err.textContent = "All files are required"
        err.style.color = "red"
        err.style.fontSize = "30px"
        err.style.margin = "20px"
        err.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
    }

    console.log(caracters);
})

caracters.sort(function (x, y) {
    return y.score - x.score
})

for (let i = 0; i < caracters.length; i++) {
    const caracter = document.createElement("div")
    const name = document.createElement("div")
    const date = document.createElement("div")
    const country = document.createElement("div")
    const score = document.createElement("div")
    const delet = document.createElement("button")
    const plus = document.createElement("button")
    const minus = document.createElement("button")
    const div = document.createElement("div")

    let now = new Date()
    let Now = `${now}`
    caracters[i].time = `${Now.slice(4, 21)}`

    let Name = `${caracters[i].firstname[0].toUpperCase()}${caracters[i].firstname.slice(1, caracters[i].firstname.length)} ${caracters[i].lastname[0].toUpperCase()}${caracters[i].lastname.slice(1, caracters[i].lastname.length)}`
    if (Name.length > 15) { Name = `${Name.slice(0, 13)}...` }
    caracters[i].name = Name
    caracters[i].country = `${caracters[i].country[0].toUpperCase()}${caracters[i].country.slice(1, caracters[i].country.length)}`

    caracter.style.display = "flex"
    caracter.style.backgroundColor = "rgb(255, 199, 244)"
    caracter.style.marginTop = "10px"
    caracter.style.flexDirection = "row"
    caracter.style.width = "1000px"
    caracter.style.height = "100px"
    caracter.style.justifyContent = "center"
    caracter.style.alignItems = "center"
    caracter.style.order = `${i}`
    caracter.className = `caracter${i}`

    name.textContent = caracters[i].name
    name.style.fontSize = "50px"
    name.style.width = "400px"
    name.className = `name${i}`

    date.textContent = `${caracters[i].time}`
    date.style.fontSize = "20px"
    date.style.marginTop = "5px"
    date.className = `date${i}`

    country.textContent = caracters[i].country
    country.style.alignItems = "center"
    country.style.width = "150px"
    country.style.fontSize = "30px"
    country.className = `country${i}`

    score.textContent = `${caracters[i].score}`
    score.style.width = "150px"
    score.style.fontSize = "50px"
    score.id = `score${i}`

    delet.className = "fas fa-trash"
    delet.style.borderRadius = "100%"
    delet.style.border = "0px"
    delet.style.margin = "5px"
    delet.style.backgroundColor = "white"
    delet.style.color = "red"
    delet.style.fontSize = "20px"
    delet.style.width = "45px"
    delet.style.height = "45px"
    delet.id = `delet${i}`

    plus.textContent = "+5"
    plus.style.borderRadius = "100%"
    plus.style.border = "0px"
    plus.style.margin = "5px"
    plus.style.backgroundColor = "white"
    plus.style.width = "30px"
    plus.style.height = "30px"
    plus.style.fontSize = "20px"
    plus.style.width = "45px"
    plus.style.height = "45px"
    plus.id = `plus${i}`

    minus.textContent = "-5"
    minus.style.borderRadius = "100%"
    minus.style.margin = "5px"
    minus.style.border = "0px"
    minus.style.backgroundColor = "white"
    minus.style.width = "30px"
    minus.style.height = "30px"
    minus.style.fontSize = "20px"
    minus.style.width = "45px"
    minus.style.height = "45px"
    minus.id = `minus${i}`

    div.appendChild(name)
    div.appendChild(date)
    caracter.appendChild(div)
    caracter.appendChild(country)
    caracter.appendChild(score)
    caracter.appendChild(delet)
    caracter.appendChild(plus)
    caracter.appendChild(minus)
    base.appendChild(caracter)

}

for (let j = 0; j <= caracters.length; j++) {
    const trash = document.querySelector(`#delet${j}`)
    const minus = document.querySelector(`#minus${j}`)
    const plus = document.querySelector(`#plus${j}`)
    const score = document.querySelector(`#score${j}`)
    const caracter = document.querySelector(`.caracter${j}`)
    trash.addEventListener("click", e => {
        caracter.remove()
        caracters.splice(j, 1)
        console.log(caracters);
    })
    minus.addEventListener("click", e => {
        score.textContent = score.textContent - 5
        caracters[j].score = caracters[j].score - 5
        console.log(caracters);
        if (caracters[j].score < caracters[j + 1].score) {

            caracters.sort(function (x, y) {
                return y.score - x.score
            })

            for (let x = 0; x < caracters.length; x++) {

                const name = document.querySelector(`.name${x}`)
                const date = document.querySelector(`.date${x}`)
                const country = document.querySelector(`.country${x}`)
                const score = document.querySelector(`#score${x}`)

                name.textContent = `${caracters[x].name}`
                date.textContent = `${caracters[x].time}`
                country.textContent = `${caracters[x].country}`
                score.textContent = `${caracters[x].score}`

            }


        }

    })
    plus.addEventListener("click", e => {
        score.textContent = Number(score.textContent) + 5
        caracters[j].score = Number(caracters[j].score) + 5
        console.log(caracters);
        if (caracters[j - 1].score < caracters[j].score) {

            caracters.sort(function (x, y) {
                return y.score - x.score
            })

            for (let x = 0; x < caracters.length; x++) {

                const name = document.querySelector(`.name${x}`)
                const date = document.querySelector(`.date${x}`)
                const country = document.querySelector(`.country${x}`)
                const score = document.querySelector(`#score${x}`)

                name.textContent = `${caracters[x].name}`
                date.textContent = `${caracters[x].time}`
                country.textContent = `${caracters[x].country}`
                score.textContent = `${caracters[x].score}`

            }
        }
    })
}






