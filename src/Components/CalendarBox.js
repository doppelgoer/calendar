import react, { useCallback, useEffect, useState } from 'react';
import '../css/CalendarBox.css';
import CalendarTop from './CalendarTop';
import CalendarBody from './CalendarBody';
import ModalBody from './ModalComponents/ModalBody';
import axiosFun from '../modules/axios';

export default function CalendarBox(props) {
  // console.log(123);
  const [getMemo, setGetMemo] = useState([]);
  async function getMemoFun() {
    setGetMemo(await axiosFun('GET', `getMemo`));
  }
  useEffect(() => {
    getMemoFun();
  }, []);
  const [selectedDate, setSelectedDate] = useState();
  const today = new Date();
  // console.log('탑',today);
  const [todayYear, setTodayYear] = useState(today.getFullYear());
  const [todayMonth, setTodayMonth] = useState(today.getMonth() + 1);
  // console.log(6546546,todayMonth);
  const [todayDate, setTodayDate] = useState(today.getDate());
  const stateData = {
    todayYear: todayYear,
    setTodayYear: setTodayYear,
    todayMonth: todayMonth,
    setTodayMonth: setTodayMonth,
    todayDate: todayDate,
    setTodayDate: setTodayDate,
  };

  // const getDateStr= function(_yearFirst,_monthFirst,_dateFirst){
  //     let date = `${_yearFirst}`;
  //     if(`${_monthFirst}`.length<2) date = `${date}0${_monthFirst}`;
  //     else date = date + `${monthFirst}`;
  //     if(`${_dateFirst}`.length<2) date = `${date}0${_dateFirst}`;
  //     else date = date + `${_dateFirst}`;
  //     return date;
  // }
  // let dayFirst = new Date(todayYear,todayMonthIndex, 1-new Date(todayYear,todayMonthIndex).getDay()).getDay();;
  const getMonthDay = useCallback(() => {
    const whatDay = ['일', '월', '화', '수', '목', '금', '토'];
    // function getMonthDay(){
    let dayIndex = [];
    for (let i = 0; i < 42; i++) {
      let yearFirst = new Date(
        todayYear,
        todayMonth - 1,
        1 - new Date(todayYear, todayMonth - 1).getDay() + i
      ).getFullYear();
      let monthFirst =
        new Date(
          todayYear,
          todayMonth - 1,
          1 - new Date(todayYear, todayMonth - 1).getDay() + i
        ).getMonth() + 1;
      let dateFirst = new Date(
        todayYear,
        todayMonth - 1,
        1 - new Date(todayYear, todayMonth - 1).getDay() + i
      ).getDate();
      // console.log(5435,yearFirst);
      let date = `${yearFirst}`;
      if (`${monthFirst}`.length < 2) date = `${date}0${monthFirst}`;
      else date = date + `${monthFirst}`;
      if (`${dateFirst}`.length < 2) date = `${date}0${dateFirst}`;
      else date = date + `${dateFirst}`;
      // return date;

      dayIndex.push({
        idx: i,
        whatDay: whatDay[i % 7],
        whatYear: yearFirst,
        whatMonth: monthFirst,
        whatDate: dateFirst,
        date: date,
      });
    }
    // console.log(66666,dayIndex);
    return dayIndex;
  }, [todayYear, todayMonth]);
  // }
  const [allDay, setAllDay] = useState(getMonthDay());
  const [modalData, setModalData] = useState();
  useEffect(() => {
    setAllDay(getMonthDay());
    // console.log(allDay);
  }, [todayMonth, todayYear, getMonthDay]);
  return (
    <react.Fragment>
      <ModalBody
        modalDisplay={props.modalDisplay}
        setModalDisplay={props.setModalDisplay}
        todayYear={todayYear}
        todayMonth={todayMonth}
        setTodayYear={setTodayYear}
        setTodayMonth={setTodayMonth}
        modalData={modalData}
        setModalData={setModalData}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        getMemo={getMemo}
        setGetMemo={setGetMemo}
      />
      <CalendarTop
        data={stateData}
        modalDisplay={props.modalDisplay}
        setModalDisplay={props.setModalDisplay}
        modalData={modalData}
        setModalData={setModalData}
      ></CalendarTop>
      <div className="calendar-page-btn">월 이동버튼 영역</div>
      <CalendarBody
        allDay={allDay}
        setAllDay={setAllDay}
        modalDisplay={props.modalDisplay}
        setModalDisplay={props.setModalDisplay}
        modalData={modalData}
        setModalData={setModalData}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        getMemo={getMemo}
        setGetMemo={setGetMemo}
      />
    </react.Fragment>
  );
}
