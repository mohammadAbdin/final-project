import React from 'react'

interface Child {
  id: number
  name: string
}

interface ChildrenListProps {
  children: Child[]
  onChildSelect: (childId: number) => void
}

const ChildrenList: React.FC<ChildrenListProps> = ({
  children,
  onChildSelect,
}) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-6 text-gray-700">
      <p className="text-lg">
        We're glad you're staying updated about your child.
      </p>
      <p className="text-lg">Here's their information for you:</p>

      <div>
        <h3 className="text-lg font-bold mb-2">Children:</h3>
        <ul>
          {children.map((child) => (
            <li key={child.id} className="text-lg mb-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onChildSelect(child.id)}
              >
                {child.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ChildrenList
