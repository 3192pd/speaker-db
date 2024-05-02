import { handleResponse } from "./utils"

const sheetId = "19mpsbRV-wXdFU-n871eqUsNtFJ2PlkW3nVn5jUc5spE"
const sheetName = encodeURIComponent("Form Responses 1")
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`

let speaker_data = ""
fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => handleResponse(csvText))
