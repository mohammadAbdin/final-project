import StudentDisplay from "./StudentDisplay";

function StudentProfile() {
  //the api request and take real data
  const studentData = {
    imageSrc: "./profile-pic.png",
    name: "John Doe",
    className: "5B",
    birthDate: "2008-05-21",
    mother: {
      name: "Jane Doe",
      phone: "555-1234",
    },
    father: {
      name: "Richard Doe",
      phone: "555-5678",
    },
  };
  return (
    <>
      <StudentDisplay student={studentData} />
    </>
  );
}

export default StudentProfile;
