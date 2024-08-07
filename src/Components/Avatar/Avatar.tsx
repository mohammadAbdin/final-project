import React from "react";
import first from "../../../src/assets/Images/1st-grade-student.png";
import second from "../../../src/assets/Images/2nd-grade-student.png";
import third from "../../../src/assets/Images/3rd-grade-student.png";
import fourth from "../../../src/assets/Images/4rth-grade-student.png";
import fifth from "../../../src/assets/Images/5th-grade-student.png";
import sixth from "../../../src/assets/Images/6th-grade-student.png";
import firstF from "../../../src/assets/Images/1st-grade-female-student-icon.png";
import secondF from "../../../src/assets/Images/2nd-grade-female-student-icon.png";
import thirdF from "../../../src/assets/Images/3rd-grade-female-student-icon.png";
import fourthF from "../../../src/assets/Images/4rth-grade-female-student-icon.png";
import fifthF from "../../../src/assets/Images/5th-grade-female-student-icon.png";
import sixthF from "../../../src/assets/Images/6th-grade-female-student-icon.png";

interface AvatarProps {
  classGrade: string; // Represents the student's grade/class
  averageScore: number; // Represents the student's average score
  studentName: string; // Student's name
  gender: string;
}

const Avatar: React.FC<AvatarProps> = ({
  classGrade,
  averageScore,
  studentName,
  gender,
}) => {
  const getAvatarColor = () => {
    if (averageScore >= 90) return "bg-green-500"; // High score
    if (averageScore >= 75) return "bg-yellow-500"; // Medium score
    if (averageScore >= 65) return "bg-orange-500"; // Medium-Low score
    return "bg-red-500"; // Low score
  };

  const getAvatarIcon = () => {
    switch (true) {
      case classGrade === "1" && gender === "male":
      case classGrade === "2" && gender === "male":
        return first;
      case classGrade === "3" && gender === "male":
      case classGrade === "4" && gender === "male":
        return second;
      case classGrade === "5" && gender === "male":
      case classGrade === "6" && gender === "male":
        return third;
      case classGrade === "7" && gender === "male":
      case classGrade === "8" && gender === "male":
        return fourth;
      case classGrade === "9" && gender === "male":
      case classGrade === "10" && gender === "male":
        return fifth;
      case classGrade === "11" && gender === "male":
      case classGrade === "12" && gender === "male":
        return sixth;
      case classGrade === "1" && gender === "female":
      case classGrade === "2" && gender === "female":
        return firstF;
      case classGrade === "3" && gender === "female":
      case classGrade === "4" && gender === "female":
        return secondF;
      case classGrade === "5" && gender === "female":
      case classGrade === "6" && gender === "female":
        return thirdF;
      case classGrade === "7" && gender === "female":
      case classGrade === "8" && gender === "female":
        return fourthF;
      case classGrade === "9" && gender === "female":
      case classGrade === "10" && gender === "female":
        return fifthF;
      case classGrade === "11" && gender === "female":
      case classGrade === "12" && gender === "female":
        return sixthF;
      default:
        return "👤"; // Default icon
    }
  };

  return (
    <div
      className={`flex items-center ${getAvatarColor()} p-4 rounded-md border-2 border-blue-500`}
    >
      <span className="text-2xl">
        <img src={getAvatarIcon()} alt="" className="w-10 rounded-md" />
      </span>
      <span className="ml-2 text-white">{studentName}</span>
    </div>
  );
};

export default Avatar;
