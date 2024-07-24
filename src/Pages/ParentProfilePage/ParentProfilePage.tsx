import React, { useState } from 'react'
import ParentCard from '../../Components/Parent/ParentCard/ParentCard'
import ChildrenList from '../../Components/Parent/ChildrenList/ChildrenList'

interface Child {
  id: number
  name: string
}

interface Parent {
  name: string
  email: string
  phone: string
  children: Child[]
}

const ParentProfilePage: React.FC = () => {
  const parentData: Parent = {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '123-456-7890',
    children: [
      { id: 1, name: 'Emily Smith' },
      { id: 2, name: 'Michael Smith' },
      { id: 3, name: 'Sophia Smith' },
    ],
  }

  const [selectedChild, setSelectedChild] = useState<number | null>(null)

  const handleChildSelect = (childId: number) => {
    setSelectedChild(childId)
    // TODO: need to add Link to child profile by id
  }

  return (
    <div>
      <ParentCard parent={parentData} />
      <ChildrenList
        children={parentData.children}
        onChildSelect={handleChildSelect}
      />
    </div>
  )
}

export default ParentProfilePage
