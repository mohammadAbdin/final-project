import React from 'react'

interface Subject {
  subjectName: string
  teacher_id: string
}

interface SubjectsButtonsProps {
  subjectData: Subject[]
  setSelectedSubject: (subject: Subject) => void
}

const SubjectsButtons: React.FC<SubjectsButtonsProps> = ({
  subjectData,
  setSelectedSubject,
}) => {
  return (
    <div className="mt-4 space-x-4">
      {subjectData.map((subjectItem) => (
        <button
          key={subjectItem.teacher_id}
          onClick={() => setSelectedSubject(subjectItem)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
        >
          {subjectItem.subjectName}
        </button>
      ))}
    </div>
  )
}

export default SubjectsButtons
