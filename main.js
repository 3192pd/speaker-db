import { handleResponse } from "./utils"

/*

0
: 
"Timestamp"
1
: 
"Email Address"
2
: 
"Name"
3
: 
"Phone Number"
4
: 
"Subject of Expertise  (Could be specific or general)"
5
: 
"Link to LinkedIn Profile"

*/
const properties = [
  "Timestamp",
  "Email Address",
  "Name",
  "Phone Number",
  "Subject of Expertise  (Could be specific or general)",
  "Link to LinkedIn Profile",
]

const sheetId = "19mpsbRV-wXdFU-n871eqUsNtFJ2PlkW3nVn5jUc5spE"
const sheetName = encodeURIComponent("Form Responses 1")
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
