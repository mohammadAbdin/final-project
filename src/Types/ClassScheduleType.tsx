interface Schedule {
  day: string;
  period: string;
}

export interface ClassSchedule {
  class: string;
  schedule: Schedule[];
}
