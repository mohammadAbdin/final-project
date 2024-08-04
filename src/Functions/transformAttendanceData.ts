export function transformAttendanceData(
  datesRecord: Array<{
    date: string;
    attendance: boolean;
  }>
) {
  return datesRecord.map((record) => {
    // Parse the original date and subtract one day
    const date = new Date(record.date);
    date.setDate(date.getDate());

    // Format the new date in the desired format (YYYY-MM-DD)
    const formattedDate = date.toISOString().split("T")[0];

    // Determine the status based on attendance
    const status = record.attendance ? "present" : "absent";

    return {
      date: formattedDate,
      status: status,
    };
  });
}
