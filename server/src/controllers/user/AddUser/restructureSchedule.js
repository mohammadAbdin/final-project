export function restructureSchedule(subject, schedule, teacher_id) {
  const result = [];
  const classMap = {};

  schedule.forEach(({ day, period, class: className }) => {
    if (!classMap[className]) {
      classMap[className] = {
        class: className,
        schedule: [],
        subject: subject,
        teacher_id: teacher_id,
      };
      result.push(classMap[className]);
    }
    classMap[className].schedule.push({ day, period, subject });
  });

  return result;
}
