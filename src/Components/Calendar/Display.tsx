import Calendar from "./Calendar";

export default function EventClanedar() {
    const eventsData = [
      {
        event_id: "ev1234",
        eventName: "Annual Science Fair",
        date: "2024/06/15", // Date in DD/MM/YYYY format
        period: "morning",
      },
      {
        event_id: "ev5678",
        eventName: "13 / 55",
        date: "2024/07/15",
        period: "afternoon",
      },
      {
        event_id: "ev9101",
        eventName: "School Play",
        date: "2024/07/18",
        period: "evening",
      },
      {
        event_id: "ev1121",
        eventName: "Parent-Teacher Conference",
        date: "2024/06/18",
        period: "morning",
      },
    ];
    return <Calendar eventsData={eventsData} />;
}
