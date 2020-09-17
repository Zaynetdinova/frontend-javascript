import React, {useEffect, useState} from 'react'
import Users from './components/Users'
import Loader from '../../../Common/components/Loader'
import Pagination from '../../../Common/components/Pagination'
import AlertError from '../../../Common/components/alertError'
import UserView from './components/UserView'
import Form from './components/Form'
import {generateId} from '../../../Common/utils/generateId'

import './Main.scss'
import {getUsers} from "../../../Common/utils/api";
import {Search} from "../../../Common/components/Search";

function Main() {
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState([])
  const [activeUser, setActiveUser] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [filterData, setFilterData] = useState([])
  const [newUser, setNewUser] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [stateApplication, setStateApplication] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchEvent()
  }, [''])

  const fetchEvent = async (page = 1) => {
    setLoader(true)
    const dataFetch = await  getUsers()
    if(dataFetch.status) {
      let dataId = generateId(page, dataFetch.data)
      setData({...data, [page]: dataId})
    } else {
      setErrorMessage(dataFetch.message)
      setStateApplication(dataFetch.status)
    }
    setLoader(false)
  }

  const getActiveUser = (user) => {
    setActiveUser(user)
  }

  const filterUsers = (stateFilter) => {
    setFilterData(stateFilter)
  }

  const nextPage = (paginationID) => {
    if(Object.keys(data).filter((key) => key === paginationID).length === 0) {
      fetchEvent(paginationID)
    }
    setPageNumber(paginationID)
  }

  const addUser = (user) => {
      const newArray = data[pageNumber].slice()
      newArray.unshift(user)
      setData({...data, [pageNumber]: newArray})
      setNewUser(user)
  }

  const changeFormState = () => {
    setShowForm(false)
  }

  return (
    <div className='Main Main-root'>
      <h2 className='title'>СПИСОК ПОЛЬЗОВАТЕЛЕЙ ...</h2>

      <section className='search-form-section'>
        <Search pageNumber={pageNumber} data={data} loader={loader} stateApplication={stateApplication} filterUsers={filterUsers}/>
        <button disabled={loader || !stateApplication} onClick={() => setShowForm(true)} type="button" className="btn  btn-dark  btn-sm">ДОБАВИТЬ</button>
      </section>

      {showForm ? <Form changeFormState={changeFormState} addUser={addUser}/> : null}

      {stateApplication
        ? loader
          ? <Loader/>
          : <div className='content-wrapper'>
            <div className='content-wrapper-user'>
              <Users
                data={data}
                getActiveUser={getActiveUser}
                pageNumber={pageNumber}
                filterData={filterData}
                newUser={newUser}/>
            </div>
            <div className='content-wrapper-user-view'>
              <UserView activeUser={activeUser}/>
            </div>
          </div>
        : <AlertError error={errorMessage}/>}


      <div className='pagination'>
        <Pagination nextPage={nextPage} loader={loader} stateApplication={stateApplication}/>
      </div>

    </div>
  )
}

export default Main

