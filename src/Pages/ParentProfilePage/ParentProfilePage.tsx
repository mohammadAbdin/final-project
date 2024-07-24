import React from "react";
import ParentCard from "../../Components/Parent/ParentCard/ParentCard";

interface Parent {
  name: string;
  email: string;
  phone: string;
}

const ParentProfilePage: React.FC = () => {
  const parentData: Parent = {
    name: "John Smith",
    email: "john@example.com",
    phone: "123-456-7890",
  };

  return (
    <div>
      <ParentCard parent={parentData} />
    </div>
  );
};

export default ParentProfilePage;
