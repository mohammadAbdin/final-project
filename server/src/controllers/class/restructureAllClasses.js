export const restructureAllClasses = (data) => {
  return data.map((classObj) => ({
    class: classObj.class,
    schedule: classObj.schedule.map((scheduleItem) => ({
      day: scheduleItem.day,
      period: scheduleItem.period,
    })),
  }));
};
