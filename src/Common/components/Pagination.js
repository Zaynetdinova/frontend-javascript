import React, {useState} from 'react'
import './styles/Pagination.scss'

function Pagination({loader, nextPage, stateApplication}) {
  const [activeLink, setActiveLink] = useState(1)

  const activePagination = (event) => {
    if (loader || !stateApplication) {
      return;
    }
    let active = event.target.closest('li');
    if (!active) return;
    let paginationID = active.id
    nextPage(paginationID)
    setActiveLink(paginationID)
  }

  return (
    <nav  onClick={activePagination} className={`Pagination-root ${loader || !stateApplication ? 'fetch-load' : ''}`}>
      <ul className="pagination pagination-sm">
        {[1,2,3,4,5,6,7,8,9,10].map((item, index) => {
          return (
            <li  key={index} id={item} className={`page-item ${+item === +activeLink ? 'active': ''}`} aria-current="page">
              <span className="page-link">
                {item}
              </span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
