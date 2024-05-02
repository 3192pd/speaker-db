import { handleResponse } from "./utils"

const sheetId = "19mpsbRV-wXdFU-n871eqUsNtFJ2PlkW3nVn5jUc5spE"
const sheetName = encodeURIComponent("Form Responses 1")
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

const all_data = await fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => handleResponse(csvText))

const speaker_data = all_data.speakers
const properties = all_data.properties

console.log(all_data)
//console.log(speaker_data[0][properties[1]])

const appElement = document.getElementById("db")
