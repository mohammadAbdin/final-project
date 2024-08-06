import React from 'react'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const ParentSideBar: React.FC<{ onItemClick: () => void }> = ({
  onItemClick,
}) => {
  return (
    <ul className="mt-6 space-y-1 bg-gray-50 dark:bg-gray-800">
      <li>
        <button onClick={onItemClick} className="w-full text-left">
          <NavLink
            to="/ParentPage"
            className={({ isActive }) =>
              `flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-700'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              } group`
            }
          >
            <FaUsers className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ms-3 whitespace-nowrap">Children</span>
          </NavLink>
        </button>
      </li>
      <li>
        <button onClick={onItemClick} className="w-full text-left">
          <NavLink
            to="/EventCalendar"
            className={({ isActive }) =>
              `flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-700'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              } group`
            }
          >
            <FaCalendarAlt className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ms-3 whitespace-nowrap">Events</span>
          </NavLink>
        </button>
      </li>
    </ul>
  )
}

export default ParentSideBar
