import React from "react";

interface AvatarProps {
  classGrade: number; // Represents the student's grade/class
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
    return "bg-red-500"; // Low score
  };

  const getAvatarIcon = () => {
    switch (classGrade) {
      case 1:
        "1st";
      case 2:
        "2nd";
      case 3:
        "3rd";
        return "👶"; // Example icon for lower grades
      case 4:
      case 5:
      case 6:
        return "🧒"; // Example icon for middle grades
      case 7:
      case 8:
      case 9:
        return "👦"; // Example icon for upper middle grades
      case 10:
      case 11:
      case 12:
        return "🧑"; // Example icon for high school
      default:
        return "👤"; // Default icon
    }
  };

  return (
    <div className={`flex items-center ${getAvatarColor()} p-4 rounded-full`}>
      <span className="text-2xl">{getAvatarIcon()}</span>
      <span className="ml-2 text-white">{studentName}</span>
    </div>
  );
};

export default Avatar;
