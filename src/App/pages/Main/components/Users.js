import React, {useEffect, useState} from 'react'
import './styles/Users.scss'
import {sortDataUp, sortDataDown} from '../../../../Common/utils/sort'

function Users({data, pageNumber, newUser, filterData, getActiveUser}) {
  const [users, setUsers] = useState(data[pageNumber])
  const [activeUserId, setActiveUserId] = useState('')
  const elements = [{name: 'ID', sort: true},
                    {name: 'firstName', sort: true} ,
                    {name: 'lastName', sort: true},
                    {name: 'email', sort: false},
                    {name: 'phone', sort: false}]
  const [sortState, setSortState] = useState('')
  const [activeSortName, setActiveSortName] = useState('')

  useEffect(() => {
    setUsers(data[pageNumber])
    setSortState('')
  }, [pageNumber])

  useEffect(() => {
    setUsers(data[pageNumber])
  }, [newUser])

  useEffect(() => {
    if(filterData.length) {
      setUsers(filterData)
    }
  }, [filterData])

  const filter = (sortName) => {
    const newArray = users.slice()
    let sort
    if(sortName === sortState) {
      sort = sortDataDown(newArray, sortName)
      setSortState('')
    } else {
      sort = sortDataUp(newArray, sortName)
      setSortState(sortName)
    }
    setUsers(sort)
  }

  const getUser = (event) => {
    let tr = event.target.closest('tr');
    if (!tr) return;
    let userID = tr.id
    const user = users.filter((user) => {
      return user._id === +userID
    })
    setActiveUserId(userID)
    getActiveUser(user)
  }

  const getElement = (event) => {
    let th = event.target.closest('th');
    if (!th) return;
    let sortName = th.id
    if(sortName === 'email' || sortName === 'phone' ) {
      return
    }
    setActiveSortName(sortName)
    filter(sortName)
  }

  const usersTemplate = () => {
    return (
      <tbody onClick={getUser}>
        {users.map((user, index) => {
          return (
            <tr className={`user-container ${user._id == activeUserId ? 'active-user' : ''}`} key={user._id} id={user._id}>
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }

  const userHeader = () => {
    return (
      <tr onClick={getElement}>
        {elements.map((el, index) => {
          return (
            <th  key={index} id={el.name}>
              <div className={`element-wrapper ${el.name} ${el.name === activeSortName ? 'active-sort': ''}`}>
                {el.name}
                {el.sort ? <div className={`arrow ${sortState === el.name ? 'arrow-rotate' : ''}`}></div> : null}
              </div>
            </th>
          )
        })}
      </tr>
    )
  }

  return (
    <div className='Users Users-root'>
      <table>
        <thead>
            {userHeader()}
        </thead>
        {usersTemplate()}
      </table>
    </div>
  )
}

export default Users
