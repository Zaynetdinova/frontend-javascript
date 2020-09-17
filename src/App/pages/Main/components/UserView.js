import React from "react"
import './styles/UserView.scss'

function UserView({activeUser}) {
  return (
    <div className='User-view'>
      {activeUser.length ? activeUser.map((user) => {
          return (
            <div key={user._id} className="card">
              <div className="card-body">
                <h5 className="card-title">Выбран пользователь</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.firstName} {user.lastName}</h6>
                <p className="card-text">{user.description ? user.description : ''}</p>
                {user.address ?
                    <>
                      <div>
                        Адрес проживания: <b>{user.address.streetAddress}</b>
                      </div>
                      <div>
                        Город: <b>{user.address.city}</b>
                      </div>
                      <div>
                        Провинция/штат: <b>{user.address.state}</b>
                      </div>
                      <div>
                        Индекс: <b>{user.address.zip}</b>
                      </div>
                    </>
                 : 'не указан адрес'}

              </div>
            </div>
          )
      }) : <div className='card'>
              <div className='card-body'>
                <h4>Пользователь не выбран</h4>
              </div>
          </div>}

    </div>
  )
}

export default UserView
