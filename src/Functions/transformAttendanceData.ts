export function transformAttendanceData(
  datesRecord: Array<{
    date: string;
    attendance: boolean;
  }>
) {
  return datesRecord.map((record) => {
    const date = new Date(record.date);
    date.setDate(date.getDate());

    const formattedDate = date.toISOString().split("T")[0];

    const status = record.attendance ? "present" : "absent";

    return {
      date: formattedDate,
      status: status,
    };
  });
}
