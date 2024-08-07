export default function calculateOverallAverage(details) {
  let totalSum = 0;
  let count = 0;

  for (const subject in details) {
    const average = details[subject].average;

    if (average !== "Grades unavailable") {
      totalSum += parseFloat(average);
      count += 1;
    }
  }

  return count === 0 ? "Grades unavailable" : (totalSum / count).toFixed(2);
}
