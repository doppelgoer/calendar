
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";

function CalendarTop(props){
    
    // let todayYear = today.getFullYear();
    // let todayMonth = today.getMonth()+1;
    // let todayDate = today.getDate();
    function plusMonth(){
        if(props.data.todayMonth<12) props.data.setTodayMonth(props.data.todayMonth+1);
        else {
            props.data.setTodayMonth(1);
            props.data.setTodayYear(props.data.todayYear+1)
        }
        // console.log(6464,props.data.todayMonth);
    }
    function minusMonth(){
        if(props.data.todayMonth>1) props.data.setTodayMonth(props.data.todayMonth-1);
        else {
            props.data.setTodayMonth(12);
            props.data.setTodayYear(props.data.todayYear-1)
        }
    }
    function setModalDisplayOnclick(){
        props.setModalData('yearMonth')
        props.setModalDisplay('inline');
    }
    return(
        <div className='calendar-top'>
            <div onClick={setModalDisplayOnclick}>
                {props.data.todayYear}년 {props.data.todayMonth}월
            </div>
            <div className='calendar-top-left-btn' onClick={minusMonth}>
                <AiFillCaretLeft/>
            </div>
            <div className='calendar-top-right-btn' onClick={plusMonth}>
                <AiFillCaretRight/>
            </div>
        </div>
    )
}

export default CalendarTop;