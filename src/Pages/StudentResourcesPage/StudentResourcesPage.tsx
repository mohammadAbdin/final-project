import React, { useContext, useEffect, useState } from 'react'
import UseGetChildSubjects from '../../Hooks/UseGetChildSubjects'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const StudentResourcesPage = () => {
  const { student_id } = useParams<{ student_id: string }>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { user } = useContext(UserContext)

  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  )
  const [subject, setSubject] = useState<string | null>(null)
  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id !== undefined) getChildSubjects()
    }
    if (childSubjects) {
      setSubject(subject || childSubjects[0])
    }
  }, [isLoading, user, getChildSubjects, childSubjects, subject])

  return (
    <div>
      <h2 className="h2-s">You are watching: {subject}</h2>
      <div className="subjects-container">
        {childSubjects?.map((subjectItem, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || '')
            }
          >
            {subjectItem}
          </button>
        ))}
      </div>
    </div>
  )
}

export default StudentResourcesPage
