export function handleResponse(csvText) {
  console.log(createObjects(csvText))
}

function createObjects(speaker_data) {
  const rows = speaker_data.split("\n")
  const propertyNames = csvSplit(rows[0])
  let objects = []
  for (let i = 1, max = rows.length; i < max; i++) {
    let thisObject = {}
    let row = csvSplit(rows[i])
    for (let j = 0, max = row.length; j < max; j++) {
      thisObject[propertyNames[j]] = row[j]
    }
    objects.push(thisObject)
  }
  return objects
}

function csvSplit(row) {
  return row.split(",").map((val) => val.substring(1, val.length - 1))
}
