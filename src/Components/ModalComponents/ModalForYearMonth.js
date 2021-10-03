
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";

export default function ModalText(props){
    function plusYear(){
        props.setTodayYear(props.todayYear+1);
    }
    function minusYear(){
        props.setTodayYear(props.todayYear-1);
    }
    function plusMonth(){
        if (props.todayMonth<12) props.setTodayMonth(props.todayMonth+1);
        else{
            props.setTodayYear(props.todayYear+1);
            props.setTodayMonth(1);
        }
        
    }
    function minusMonth(){
        if (props.todayMonth>1) props.setTodayMonth(props.todayMonth-1);
        else{
            props.setTodayYear(props.todayYear-1);
            props.setTodayMonth(12);
        }
    }
    function setModalDisplayNone(){
        props.setModalDisplay('none');
    }
    // modalDisplay={props.modalDisplay} setModalDisplay={props.setModalDisplay}
    return(
        <div className='modal-div'>
            <AiOutlineClose className='modal-exit-btn' onClick={setModalDisplayNone} />
            <div className='modal-year'>
                <AiFillCaretUp className='modal-year-next'onClick={plusYear} />  
                <div className='' style={{'marginBottom': '0.3rem'}}>{props.todayYear}</div>
                <AiFillCaretDown className='modal-year-pre' onClick={minusYear} />
            </div>
            <div className='modal-month'>
                <AiFillCaretUp className='modal-month-next'onClick={plusMonth} />
                <div className='' style={{'marginBottom': '0.3rem'}}>{props.todayMonth}</div>
                <AiFillCaretDown className='modal-month-pre'onClick={minusMonth} />
            </div>
        </div>
    )
}