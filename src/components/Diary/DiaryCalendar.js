import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../icons/CalendarIcon";
import DiaryCalendarStyled from "./DiaryCalendarStyled";
import React from "react";

const DiaryCalendar = ({ setSelectedData, getCurentDayInfoOperation }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const month =
      startDate.getMonth() + 1 < 10
        ? "0" + (startDate.getMonth() + 1)
        : startDate.getMonth() + 1;
    const day =
      startDate.getDate() < 10
        ? "0" + startDate.getDate()
        : startDate.getDate();
    const date = startDate.getFullYear() + "-" + month + "-" + day;
    setSelectedData(date);
    getCurentDayInfoOperation({ date: date });
  }, [startDate]);

  return (
    <DiaryCalendarStyled>
      <div className="only-calendar">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
          className="input-calendar"
        />

        <CalendarIcon width="18" height="20" />
      </div>
    </DiaryCalendarStyled>
  );
};

export default DiaryCalendar;
