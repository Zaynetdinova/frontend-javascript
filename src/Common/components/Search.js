import React from 'react'

export function Search({pageNumber, data, loader, filterUsers, stateApplication}) {

  const searchUser = (event) => {
    const textValue = event.target.value.toLowerCase()
    const filter = data[pageNumber].filter((el) => !el.lastName.toLowerCase().indexOf(textValue) || !el.firstName.toLowerCase().indexOf(textValue))
    filterUsers(filter)
  }

  return(
    <div className='search-wrapper'>
      <div className="input-group mb-3 input-search">
        <input disabled={loader || !stateApplication} type="text" onChange={searchUser} className="form-control" placeholder="Recipient's username"
               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      </div>
    </div>
  )

}
