
function CalendarBody(props){

    const whatDay = ['일','월','화','수','목','금','토'];

    function setModalDisplayOnclick(_date){
        props.setModalData('dayMemo',)
        props.setModalDisplay('inline');
        props.setSelectedDate(_date)
    }
    const dayDiv = props.allDay.map((day, index)=>{
        // console.log(index);
        // let uniqKey = day.date + day.whatDay;
        // console.log(day);
        let appendHtml;
        let appendDivHtmlTitle =[];
        if(props.getMemo.length >0){
            let appendDivHtml
            // console.log(123123,props.getMemo);
            for (let i = 0; i < props.getMemo.length; i++) {
                if(day.date===props.getMemo[i].date){
                    appendDivHtmlTitle.push(props.getMemo[i]);
                }
                appendDivHtml = appendDivHtmlTitle.map((getMemo)=>{
                    // console.log(555,getMemo);
                    // console.log(`이거다${i}`,getMemo.idx);
                    
                return <div key={`${getMemo.idx}${i}`} style={{fontSize:'1px'}}>{getMemo.title}</div>
                })
            }
            appendHtml = 
                        <div className='calendar-date' key={index} onClick={()=>{setModalDisplayOnclick(day.date)}}>
                            {day.whatDate}
                            {appendDivHtml}
                        </div>
        }
        else {
            appendHtml = 
                        <div className='calendar-date' key={index} onClick={()=>{setModalDisplayOnclick(day.date)}}>
                            {day.whatDate}
                        </div>
        }
        return appendHtml;
    })
    return(
        <div className='calendar-body'>
            {whatDay.map((day)=>(<div key={day} className='calendar-day'>{day}</div>))}

            {dayDiv}
        </div>
    )
}

export default CalendarBody;