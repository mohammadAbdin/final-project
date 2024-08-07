import React from "react";
import first from "../../../src/assets/Images/1st-grade-student.png";
import second from "../../../src/assets/Images/2nd-grade-student.png";
import third from "../../../src/assets/Images/3rd-grade-student.png";
import fourth from "../../../src/assets/Images/4rth-grade-student.png";
import fifth from "../../../src/assets/Images/5th-grade-student.png";
import sixth from "../../../src/assets/Images/6th-grade-student.png";

interface AvatarProps {
  classGrade: string; // Represents the student's grade/class
  averageScore: number; // Represents the student's average score
  studentName: string; // Student's name
}

const Avatar: React.FC<AvatarProps> = ({
  classGrade,
  averageScore,
  studentName,
}) => {
  const getAvatarColor = () => {
    if (averageScore >= 90) return "bg-green-500"; // High score
    if (averageScore >= 75) return "bg-yellow-500"; // Medium score
    if (averageScore >= 65) return "bg-orange-500"; // Medium-Low score
    return "bg-red-500"; // Low score
  };

  const getAvatarIcon = () => {
    switch (classGrade) {
      case "1":
      case "2":
        return first;
      case "3":
      case "4":
        return second;
      case "5":
      case "6":
        return third;
      case "7":
      case "8":
        return fourth;
      case "9":
      case "10":
        return fifth;
      case "11":
      case "12":
        return sixth;
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
