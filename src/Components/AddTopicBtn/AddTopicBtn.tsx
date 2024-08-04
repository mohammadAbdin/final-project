import { useContext, useState } from "react";
import { Topic } from "../../Types/TopicsTypes";
import { UserContext } from "../../Context/UserContext";
import AddNewResource from "../../Api/PostNewResource";

const AddTopicBtn = ({
  topicsData,
  setTopicsData,
  classNumber,
}: {
  topicsData: Topic[];
  setTopicsData: React.Dispatch<React.SetStateAction<Topic[]>>;
  classNumber: string | undefined;
}) => {
  const { user } = useContext(UserContext);
  const [addTopicStatus, setAddTopicStatus] = useState<boolean>(false);
  const [newTopicTitle, setNewTopicTitle] = useState<string>("");
  const [isCancel, setIsCancel] = useState<boolean>(true);

  const placeholderText = "Enter Topic";

  const addNewTopic = () => {
    const newTopic = {
      title: newTopicTitle.trim(),
      videos: [],
    };
    // console.log(newTopic, user?.userType, user?._id);
    AddNewResource(newTopic, user?._id, classNumber);

    setTopicsData([...topicsData, newTopic]);
    setNewTopicTitle("");
    setAddTopicStatus(false);
    setIsCancel(true);
  };

  return (
    <>
      {addTopicStatus === false ? (
        <div>
          {user?.userType == "Teacher" ? (
            <button
              className="px-4 py-2 mb-3  bg-green-500 text-white rounded"
              onClick={() => setAddTopicStatus(true)}
            >
              Add Topic
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          <input
            className="px-4 py-2 mb-3  bg-green-500 text-white rounded placeholder-white placeholder-opacity-75 focus:outline-none"
            style={{
              width: `${placeholderText.length + 1}ch`,
            }}
            type="text"
            placeholder={placeholderText}
            autoFocus
            onChange={(event) => {
              setNewTopicTitle(event.target.value);
              if (!event.target.value.trim()) {
                setIsCancel(true);
                return;
              }
              setIsCancel(false);
            }}
          />

          {isCancel ? (
            <button
              onClick={() => setAddTopicStatus(false)}
              className="px-4 py-2 mb-3 ml-2 text-red-500 rounded hover:bg-green-100 placeholder-gray-500 placeholder-opacity-75"
            >
              Cancel
            </button>
          ) : (
            <button
              className="px-4 py-2 mb-3 ml-2 text-green-500 rounded hover:bg-green-100 placeholder-gray-500 placeholder-opacity-75"
              onClick={addNewTopic}
            >
              Create
            </button>
          )}
        </>
      )}
    </>
  );
};

export default AddTopicBtn;
