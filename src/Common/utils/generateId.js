export function generateId(page, dataFetch) {
  let number
  if(page > 1) {
    number = 1 + ((page-1) * 50)
  } else {
    number = 1
  }

  return  dataFetch.map((elem, index) => {
    return {_id: index + number, ...elem}
  })
}
