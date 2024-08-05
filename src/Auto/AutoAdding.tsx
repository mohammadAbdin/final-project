// // AutoAdding.tsx
// import AddUserRequest from "./../Api/PostAddUserRequest";

// // const parentData = [
// //   {
// //     email: "jane.smith@gmail.com",
// //     fullName: "Jane Smith",
// //     id: "1001",
// //     phone: "0525615701",
// //   },
// //   {
// //     email: "john.doe@gmail.com",
// //     fullName: "John Doe",
// //     id: "1002",
// //     phone: "0525615702",
// //   },
// //   {
// //     email: "mary.johnson@gmail.com",
// //     fullName: "Mary Johnson",
// //     id: "1003",
// //     phone: "0525615703",
// //   },
// //   {
// //     email: "michael.brown@gmail.com",
// //     fullName: "Michael Brown",
// //     id: "1004",
// //     phone: "0525615704",
// //   },
// //   {
// //     email: "linda.davis@gmail.com",
// //     fullName: "Linda Davis",
// //     id: "1005",
// //     phone: "0525615705",
// //   },
// //   {
// //     email: "william.miller@gmail.com",
// //     fullName: "William Miller",
// //     id: "1006",
// //     phone: "0525615706",
// //   },
// //   {
// //     email: "patricia.wilson@gmail.com",
// //     fullName: "Patricia Wilson",
// //     id: "1007",
// //     phone: "0525615707",
// //   },
// //   {
// //     email: "james.moore@gmail.com",
// //     fullName: "James Moore",
// //     id: "1008",
// //     phone: "0525615708",
// //   },
// //   {
// //     email: "barbara.taylor@gmail.com",
// //     fullName: "Barbara Taylor",
// //     id: "1009",
// //     phone: "0525615709",
// //   },
// //   {
// //     email: "charles.anderson@gmail.com",
// //     fullName: "Charles Anderson",
// //     id: "1010",
// //     phone: "0525615710",
// //   },
// //   {
// //     email: "jennifer.thomas@gmail.com",
// //     fullName: "Jennifer Thomas",
// //     id: "1011",
// //     phone: "0525615711",
// //   },
// //   {
// //     email: "daniel.jackson@gmail.com",
// //     fullName: "Daniel Jackson",
// //     id: "1012",
// //     phone: "0525615712",
// //   },
// //   {
// //     email: "susan.white@gmail.com",
// //     fullName: "Susan White",
// //     id: "1013",
// //     phone: "0525615713",
// //   },
// //   {
// //     email: "matthew.harris@gmail.com",
// //     fullName: "Matthew Harris",
// //     id: "1014",
// //     phone: "0525615714",
// //   },
// //   {
// //     email: "karen.martin@gmail.com",
// //     fullName: "Karen Martin",
// //     id: "1015",
// //     phone: "0525615715",
// //   },
// //   {
// //     email: "mark.thompson@gmail.com",
// //     fullName: "Mark Thompson",
// //     id: "1016",
// //     phone: "0525615716",
// //   },
// //   {
// //     email: "nancy.garcia@gmail.com",
// //     fullName: "Nancy Garcia",
// //     id: "1017",
// //     phone: "0525615717",
// //   },
// //   {
// //     email: "paul.martinez@gmail.com",
// //     fullName: "Paul Martinez",
// //     id: "1018",
// //     phone: "0525615718",
// //   },
// //   {
// //     email: "sandra.robinson@gmail.com",
// //     fullName: "Sandra Robinson",
// //     id: "1019",
// //     phone: "0525615719",
// //   },
// //   {
// //     email: "steven.clark@gmail.com",
// //     fullName: "Steven Clark",
// //     id: "1020",
// //     phone: "0525615720",
// //   },
// //   {
// //     email: "lisa.rodriguez@gmail.com",
// //     fullName: "Lisa Rodriguez",
// //     id: "1021",
// //     phone: "0525615721",
// //   },
// //   {
// //     email: "joseph.lewis@gmail.com",
// //     fullName: "Joseph Lewis",
// //     id: "1022",
// //     phone: "0525615722",
// //   },
// //   {
// //     email: "karen.lee@gmail.com",
// //     fullName: "Karen Lee",
// //     id: "1023",
// //     phone: "0525615723",
// //   },
// //   {
// //     email: "christopher.walker@gmail.com",
// //     fullName: "Christopher Walker",
// //     id: "1024",
// //     phone: "0525615724",
// //   },
// //   {
// //     email: "betty.hall@gmail.com",
// //     fullName: "Betty Hall",
// //     id: "1025",
// //     phone: "0525615725",
// //   },
// // ];
// // const teachersData = [{}];
// const teachers = [
//   // Teacher 1
//   {
//     age: "25",
//     email: "john.doe@gmail.com",
//     fullName: "John Doe",
//     gender: "male",
//     id: "21245587",
//     phone: "0525615708",
//     subject: "Math",
//     schedule: [
//       { class: "1", day: "Sunday", period: "08:00-09:00" },
//       { class: "1", day: "Monday", period: "09:00-10:00" },
//       { class: "2", day: "Tuesday", period: "10:00-11:00" },
//       { class: "2", day: "Wednesday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 2
//   {
//     age: "30",
//     email: "sara.ali@gmail.com",
//     fullName: "Sara Ali",
//     gender: "female",
//     id: "21245588",
//     phone: "0525615709",
//     subject: "Science",
//     schedule: [
//       { class: "3", day: "Sunday", period: "08:00-09:00" },
//       { class: "3", day: "Monday", period: "09:00-10:00" },
//       { class: "4", day: "Tuesday", period: "10:00-11:00" },
//       { class: "4", day: "Wednesday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 3
//   {
//     age: "35",
//     email: "michael.smith@gmail.com",
//     fullName: "Michael Smith",
//     gender: "male",
//     id: "21245589",
//     phone: "0525615710",
//     subject: "English",
//     schedule: [
//       { class: "5", day: "Sunday", period: "08:00-09:00" },
//       { class: "5", day: "Monday", period: "09:00-10:00" },
//       { class: "6", day: "Tuesday", period: "10:00-11:00" },
//       { class: "6", day: "Wednesday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 4
//   {
//     age: "40",
//     email: "emma.jones@gmail.com",
//     fullName: "Emma Jones",
//     gender: "female",
//     id: "21245590",
//     phone: "0525615711",
//     subject: "History",
//     schedule: [
//       { class: "7", day: "Sunday", period: "08:00-09:00" },
//       { class: "7", day: "Monday", period: "09:00-10:00" },
//       { class: "8", day: "Tuesday", period: "10:00-11:00" },
//       { class: "8", day: "Wednesday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 5
//   {
//     age: "27",
//     email: "alex.morris@gmail.com",
//     fullName: "Alex Morris",
//     gender: "male",
//     id: "21245591",
//     phone: "0525615712",
//     subject: "Geography",
//     schedule: [
//       { class: "9", day: "Sunday", period: "08:00-09:00" },
//       { class: "9", day: "Monday", period: "09:00-10:00" },
//       { class: "10", day: "Tuesday", period: "10:00-11:00" },
//       { class: "10", day: "Wednesday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 6
//   {
//     age: "33",
//     email: "julia.khan@gmail.com",
//     fullName: "Julia Khan",
//     gender: "female",
//     id: "21245592",
//     phone: "0525615713",
//     subject: "Physics",
//     schedule: [
//       { class: "11", day: "Sunday", period: "08:00-09:00" },
//       { class: "11", day: "Monday", period: "09:00-10:00" },
//       { class: "12", day: "Tuesday", period: "10:00-11:00" },
//       { class: "12", day: "Wednesday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 7
//   {
//     age: "29",
//     email: "mark.taylor@gmail.com",
//     fullName: "Mark Taylor",
//     gender: "male",
//     id: "21245593",
//     phone: "0525615714",
//     subject: "Chemistry",
//     schedule: [
//       { class: "1", day: "Sunday", period: "10:00-11:00" },
//       { class: "1", day: "Monday", period: "11:00-12:00" },
//       { class: "2", day: "Tuesday", period: "08:00-09:00" },
//       { class: "2", day: "Wednesday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 8
//   {
//     age: "31",
//     email: "nina.green@gmail.com",
//     fullName: "Nina Green",
//     gender: "female",
//     id: "21245594",
//     phone: "0525615715",
//     subject: "Music",
//     schedule: [
//       { class: "3", day: "Sunday", period: "10:00-11:00" },
//       { class: "3", day: "Monday", period: "11:00-12:00" },
//       { class: "4", day: "Tuesday", period: "08:00-09:00" },
//       { class: "4", day: "Wednesday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 9
//   {
//     age: "28",
//     email: "david.wilson@gmail.com",
//     fullName: "David Wilson",
//     gender: "male",
//     id: "21245595",
//     phone: "0525615716",
//     subject: "Arts",
//     schedule: [
//       { class: "5", day: "Sunday", period: "10:00-11:00" },
//       { class: "5", day: "Monday", period: "11:00-12:00" },
//       { class: "6", day: "Tuesday", period: "08:00-09:00" },
//       { class: "6", day: "Wednesday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 10
//   {
//     age: "26",
//     email: "susan.miller@gmail.com",
//     fullName: "Susan Miller",
//     gender: "female",
//     id: "21245596",
//     phone: "0525615717",
//     subject: "Biology",
//     schedule: [
//       { class: "7", day: "Sunday", period: "10:00-11:00" },
//       { class: "7", day: "Monday", period: "11:00-12:00" },
//       { class: "8", day: "Tuesday", period: "08:00-09:00" },
//       { class: "8", day: "Wednesday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 11
//   {
//     age: "32",
//     email: "tom.james@gmail.com",
//     fullName: "Tom James",
//     gender: "male",
//     id: "21245597",
//     phone: "0525615718",
//     subject: "Math",
//     schedule: [
//       { class: "9", day: "Sunday", period: "10:00-11:00" },
//       { class: "9", day: "Monday", period: "11:00-12:00" },
//       { class: "10", day: "Tuesday", period: "08:00-09:00" },
//       { class: "10", day: "Wednesday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 12
//   {
//     age: "27",
//     email: "anna.johnson@gmail.com",
//     fullName: "Anna Johnson",
//     gender: "female",
//     id: "21245598",
//     phone: "0525615719",
//     subject: "Science",
//     schedule: [
//       { class: "11", day: "Sunday", period: "10:00-11:00" },
//       { class: "11", day: "Monday", period: "11:00-12:00" },
//       { class: "12", day: "Tuesday", period: "08:00-09:00" },
//       { class: "12", day: "Wednesday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 13
//   {
//     age: "28",
//     email: "johnny.brown@gmail.com",
//     fullName: "Johnny Brown",
//     gender: "male",
//     id: "21245599",
//     phone: "0525615720",
//     subject: "English",
//     schedule: [
//       { class: "1", day: "Tuesday", period: "10:00-11:00" },
//       { class: "1", day: "Wednesday", period: "11:00-12:00" },
//       { class: "2", day: "Sunday", period: "08:00-09:00" },
//       { class: "2", day: "Monday", period: "09:00-10:00" },
//     ],
//   },
//   // Teacher 14
//   {
//     age: "34",
//     email: "lucas.martin@gmail.com",
//     fullName: "Lucas Martin",
//     gender: "male",
//     id: "21245600",
//     phone: "0525615721",
//     subject: "History",
//     schedule: [
//       { class: "3", day: "Tuesday", period: "08:00-09:00" },
//       { class: "3", day: "Wednesday", period: "09:00-10:00" },
//       { class: "4", day: "Sunday", period: "10:00-11:00" },
//       { class: "4", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 15
//   {
//     age: "29",
//     email: "lisa.white@gmail.com",
//     fullName: "Lisa White",
//     gender: "female",
//     id: "21245601",
//     phone: "0525615722",
//     subject: "Physics",
//     schedule: [
//       { class: "5", day: "Tuesday", period: "08:00-09:00" },
//       { class: "5", day: "Wednesday", period: "09:00-10:00" },
//       { class: "6", day: "Sunday", period: "10:00-11:00" },
//       { class: "6", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 16
//   {
//     age: "31",
//     email: "james.black@gmail.com",
//     fullName: "James Black",
//     gender: "male",
//     id: "21245602",
//     phone: "0525615723",
//     subject: "Chemistry",
//     schedule: [
//       { class: "7", day: "Tuesday", period: "08:00-09:00" },
//       { class: "7", day: "Wednesday", period: "09:00-10:00" },
//       { class: "8", day: "Sunday", period: "10:00-11:00" },
//       { class: "8", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 17
//   {
//     age: "30",
//     email: "olivia.garcia@gmail.com",
//     fullName: "Olivia Garcia",
//     gender: "female",
//     id: "21245603",
//     phone: "0525615724",
//     subject: "Music",
//     schedule: [
//       { class: "9", day: "Tuesday", period: "08:00-09:00" },
//       { class: "9", day: "Wednesday", period: "09:00-10:00" },
//       { class: "10", day: "Sunday", period: "10:00-11:00" },
//       { class: "10", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 18
//   {
//     age: "28",
//     email: "harry.martin@gmail.com",
//     fullName: "Harry Martin",
//     gender: "male",
//     id: "21245604",
//     phone: "0525615725",
//     subject: "Biology",
//     schedule: [
//       { class: "11", day: "Tuesday", period: "08:00-09:00" },
//       { class: "11", day: "Wednesday", period: "09:00-10:00" },
//       { class: "12", day: "Sunday", period: "10:00-11:00" },
//       { class: "12", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 19
//   {
//     age: "32",
//     email: "zara.hughes@gmail.com",
//     fullName: "Zara Hughes",
//     gender: "female",
//     id: "21245605",
//     phone: "0525615726",
//     subject: "Arts",
//     schedule: [
//       { class: "1", day: "Tuesday", period: "08:00-09:00" },
//       { class: "1", day: "Wednesday", period: "09:00-10:00" },
//       { class: "2", day: "Sunday", period: "10:00-11:00" },
//       { class: "2", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 20
//   {
//     age: "29",
//     email: "eva.nash@gmail.com",
//     fullName: "Eva Nash",
//     gender: "female",
//     id: "21245606",
//     phone: "0525615727",
//     subject: "Geography",
//     schedule: [
//       { class: "3", day: "Tuesday", period: "08:00-09:00" },
//       { class: "3", day: "Wednesday", period: "09:00-10:00" },
//       { class: "4", day: "Sunday", period: "10:00-11:00" },
//       { class: "4", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 21
//   {
//     age: "34",
//     email: "talia.ferguson@gmail.com",
//     fullName: "Talia Ferguson",
//     gender: "female",
//     id: "21245607",
//     phone: "0525615728",
//     subject: "Math",
//     schedule: [
//       { class: "5", day: "Tuesday", period: "08:00-09:00" },
//       { class: "5", day: "Wednesday", period: "09:00-10:00" },
//       { class: "6", day: "Sunday", period: "10:00-11:00" },
//       { class: "6", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 22
//   {
//     age: "30",
//     email: "rachel.martin@gmail.com",
//     fullName: "Rachel Martin",
//     gender: "female",
//     id: "21245608",
//     phone: "0525615729",
//     subject: "Science",
//     schedule: [
//       { class: "7", day: "Tuesday", period: "08:00-09:00" },
//       { class: "7", day: "Wednesday", period: "09:00-10:00" },
//       { class: "8", day: "Sunday", period: "10:00-11:00" },
//       { class: "8", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 23
//   {
//     age: "32",
//     email: "paul.adams@gmail.com",
//     fullName: "Paul Adams",
//     gender: "male",
//     id: "21245609",
//     phone: "0525615730",
//     subject: "History",
//     schedule: [
//       { class: "9", day: "Tuesday", period: "08:00-09:00" },
//       { class: "9", day: "Wednesday", period: "09:00-10:00" },
//       { class: "10", day: "Sunday", period: "10:00-11:00" },
//       { class: "10", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 24
//   {
//     age: "26",
//     email: "laura.kelly@gmail.com",
//     fullName: "Laura Kelly",
//     gender: "female",
//     id: "21245610",
//     phone: "0525615731",
//     subject: "Physics",
//     schedule: [
//       { class: "11", day: "Tuesday", period: "08:00-09:00" },
//       { class: "11", day: "Wednesday", period: "09:00-10:00" },
//       { class: "12", day: "Sunday", period: "10:00-11:00" },
//       { class: "12", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 25
//   {
//     age: "29",
//     email: "nina.thomas@gmail.com",
//     fullName: "Nina Thomas",
//     gender: "female",
//     id: "21245611",
//     phone: "0525615732",
//     subject: "Chemistry",
//     schedule: [
//       { class: "1", day: "Tuesday", period: "08:00-09:00" },
//       { class: "1", day: "Wednesday", period: "09:00-10:00" },
//       { class: "2", day: "Sunday", period: "10:00-11:00" },
//       { class: "2", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 26
//   {
//     age: "31",
//     email: "steve.clark@gmail.com",
//     fullName: "Steve Clark",
//     gender: "male",
//     id: "21245612",
//     phone: "0525615733",
//     subject: "Music",
//     schedule: [
//       { class: "3", day: "Tuesday", period: "08:00-09:00" },
//       { class: "3", day: "Wednesday", period: "09:00-10:00" },
//       { class: "4", day: "Sunday", period: "10:00-11:00" },
//       { class: "4", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 27
//   {
//     age: "27",
//     email: "sophia.jones@gmail.com",
//     fullName: "Sophia Jones",
//     gender: "female",
//     id: "21245613",
//     phone: "0525615734",
//     subject: "Biology",
//     schedule: [
//       { class: "5", day: "Tuesday", period: "08:00-09:00" },
//       { class: "5", day: "Wednesday", period: "09:00-10:00" },
//       { class: "6", day: "Sunday", period: "10:00-11:00" },
//       { class: "6", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 28
//   {
//     age: "30",
//     email: "claire.harris@gmail.com",
//     fullName: "Claire Harris",
//     gender: "female",
//     id: "21245614",
//     phone: "0525615735",
//     subject: "Arts",
//     schedule: [
//       { class: "7", day: "Tuesday", period: "08:00-09:00" },
//       { class: "7", day: "Wednesday", period: "09:00-10:00" },
//       { class: "8", day: "Sunday", period: "10:00-11:00" },
//       { class: "8", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 29
//   {
//     age: "32",
//     email: "robert.carter@gmail.com",
//     fullName: "Robert Carter",
//     gender: "male",
//     id: "21245615",
//     phone: "0525615736",
//     subject: "Geography",
//     schedule: [
//       { class: "9", day: "Tuesday", period: "08:00-09:00" },
//       { class: "9", day: "Wednesday", period: "09:00-10:00" },
//       { class: "10", day: "Sunday", period: "10:00-11:00" },
//       { class: "10", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
//   // Teacher 30
//   {
//     age: "27",
//     email: "emily.morris@gmail.com",
//     fullName: "Emily Morris",
//     gender: "female",
//     id: "21245616",
//     phone: "0525615737",
//     subject: "Math",
//     schedule: [
//       { class: "11", day: "Tuesday", period: "08:00-09:00" },
//       { class: "11", day: "Wednesday", period: "09:00-10:00" },
//       { class: "12", day: "Sunday", period: "10:00-11:00" },
//       { class: "12", day: "Monday", period: "11:00-12:00" },
//     ],
//   },
// ];

// async function addUsersSequentially(teachers) {
//   for (const teacher of teachers) {
//     try {
//       await AddUserRequest("Teacher", teacher);
//       console.log(`Added user: ${teacher.fullName}`);
//     } catch (error) {
//       console.error(`Error adding user ${teacher.fullName}:`, error);
//     }
//   }
// }

// function AutoAdding() {
//   const handleAutoAdd = async () => {
//     await addUsersSequentially(teachers); // Add users sequentially
//   };

//   return <button onClick={handleAutoAdd}>AutoAdding</button>;
// }

// export default AutoAdding;
