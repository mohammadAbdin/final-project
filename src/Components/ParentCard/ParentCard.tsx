import React from 'react'

interface Parent {
  name: string
  email: string
  phone: string
}

const ParentCard: React.FC = () => {
  const parentData: Parent = {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '123-456-7890',
  }

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
      <div className="bg-gray-200 p-4 rounded-lg mb-6 text-gray-700">
        <p className="text-lg">Hello, {parentData.name}!</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Parent Profile</h2>
        <p className="text-lg mb-2">
          <span className="font-bold">Parent's Name:</span> {parentData.name}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Email:</span> {parentData.email}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Phone:</span> {parentData.phone}
        </p>
      </div>
    </div>
  )
}

export default ParentCard
