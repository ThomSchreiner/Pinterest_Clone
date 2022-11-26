function renderizarVitrine(dataBase) {
    const ulVitrine = document.querySelector(".vitrine")
    dataBase.forEach(element => {
        const card = criarCard(element)
        ulVitrine.appendChild(card)
    })
}

renderizarVitrine(dataBase)

function criarCard(item) {
    const li = document.createElement("li")
    const div = document.createElement("div")
    const sectionHeader = document.createElement("section")
    const select = document.createElement("select")
    const option = document.createElement("option")
    const buttonHeader = document.createElement("button")
    const img = document.createElement("img")
    const sectionFooter = document.createElement("section")
    const buttonFooter1 = document.createElement("button")
    const imgFooter1 = document.createElement("img")
    const buttonFooter2 = document.createElement("button")
    const imgFooter2 = document.createElement("img")

    sectionHeader.classList.add("card-header")
    option.setAttribute("selected", true)
    option.setAttribute("hidden", true)
    option.setAttribute("disabled", true)
    option.innerText = item.nome
    buttonHeader.innerText = "Salvar"
    img.src = item.img
    img.alt = item.nome
    sectionFooter.classList.add("card-footer")
    imgFooter1.src = "src/icones/upload.svg"
    imgFooter1.alt = "Upload"
    imgFooter2.src = "src/icones/reticencias.svg"
    imgFooter2.alt = "Opções"

    select.appendChild(option)
    sectionHeader.append(select, buttonHeader)
    buttonFooter1.appendChild(imgFooter1)
    buttonFooter2.appendChild(imgFooter2)
    sectionFooter.append(buttonFooter1, buttonFooter2)
    div.append(sectionHeader, img, sectionFooter)
    li.appendChild(div)

    return li
}
