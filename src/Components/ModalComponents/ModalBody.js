import '../../css/Modal.css'
import ModalForYearMonth from './ModalForYearMonth'
import ModalForDayMemo from './ModalForDayMemo'
import React from 'react'

export default function SelectYearMonth(props){
    let modalSelect;
    
    if(props.modalData==='yearMonth'){
        modalSelect= (<ModalForYearMonth modalDisplay={props.modalDisplay} setModalDisplay={props.setModalDisplay}
            todayYear={props.todayYear} todayMonth={props.todayMonth} 
            setTodayYear={props.setTodayYear} setTodayMonth={props.setTodayMonth} />)
    }
    else if(props.modalData==='dayMemo'){
        modalSelect= (<ModalForDayMemo modalDisplay={props.modalDisplay} setModalDisplay={props.setModalDisplay}
            todayYear={props.todayYear} todayMonth={props.todayMonth} 
            setTodayYear={props.setTodayYear} setTodayMonth={props.setTodayMonth} 
            // date={props.modalData[1]} 
            selectedDate={props.selectedDate} setSelectedDate={props.setSelectedDate}
            getMemo={props.getMemo} setGetMemo={props.setGetMemo}
            />)
    }
    // console.log(5352,modalSelect);
    // console.log(643634,modalDisplay);
    return (
        <div className='modal-body' style={{display:props.modalDisplay}}>
            {modalSelect}
        </div>
        )
}
