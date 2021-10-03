

import MemoBox from '../MemoComponents/MemoBox'
export default function ModalText(props){
    
    return(
        <div className='modal-div' >
            <MemoBox setModalDisplay={props.setModalDisplay} date={props.selectedDate} 
            getMemo={props.getMemo} setGetMemo={props.setGetMemo} />
        </div>
    )
}