import ChildWidget from "../../Components/ChildWidget/ChildWidget";

const ParentPage = () => {
  return (
    <div className="flex space-x-4 cursor-pointer m-4 p-4">
      <ChildWidget />
    </div>
  );
};

export default ParentPage;
