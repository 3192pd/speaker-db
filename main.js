import { handleResponse } from "./utils"

const properties = [
  "Email Address",
  "Name",
  "Phone Number",
  "Subject of Expertise  (Could be specific or general)",
  "Link to LinkedIn Profile",
]

const sheetId = import.meta.env.VITE_CSVsheetId
const sheetName = encodeURIComponent(import.meta.env.VITE_sheetName)
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

const speaker_data = await fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => handleResponse(csvText))

const dbElement = document.getElementById("db")

for (let speaker of speaker_data) {
  const speakerDiv = document.createElement("div")
  speakerDiv.style.background = "black"
  speakerDiv.style.color = "white"
  for (let property of properties) {
    const text = document.createElement("p")
    text.innerText = " " + property + " : " + speaker[property]
    speakerDiv.appendChild(text)
  }
  dbElement.appendChild(speakerDiv)
}

const searchInput = document.getElementById("searchInput")
const handleSearch = () => {
  const text = searchInput.value
  const elements = Array.from(document.querySelectorAll("p"))
  const results = elements.filter((element) => {
    return element.textContent.toLowerCase().includes(text.toLowerCase())
  })
  console.log(results)
}
searchInput.addEventListener("input", handleSearch)
