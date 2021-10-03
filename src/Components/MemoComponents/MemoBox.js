
import '../../css/MemoBox.css'
import { BiLeftArrowAlt, BiSave } from "react-icons/bi"
import { useCallback, useState } from "react";
import axiosFun from '../../modules/axios';


export default function MemoBox(props){
    //onChange 로 해당 태그의(타이틀) value값 받아와서 state값 변경.
    function inputTitle(e) {
        setMemoData({...memoData, title : e.target.value})
        // setTitle(e.target.value);
    };
    //onChange 로 해당 태그의(내용) value값 받아와서 state값 변경.
    function inputMemo(e) {
        // console.log(5335353,props.date);
        setMemoData({...memoData, memo : e.target.value, date : props.date})
        // console.log(memoData);
        // setMemo(e.target.value)
    };
    //App.js 에서 받아온 메모데이터state props랑 메모데이터state 변경 props 활용
    //위의 두개 함수(inputTitle,inputMemo)에서 변경된 title,memo state 받아와서
    //메모데이터state props를 메모데이터state 변경 props 로 업데이트.
    const [memoData,setMemoData] = useState({
        date: props.date,
        title: '',
        memo: ''
    });
    const inputTitleAndMemo = useCallback(() =>  {
        props.setGetMemo([...props.getMemo,{...memoData}])
        axiosFun('PUT',`inputTitleAndMemo`, memoData);
        setMemoData({
                date: props.date,
                title: '',
                memo: ''
            });
                alert('저장되었습니다.');
        props.setModalDisplay('none');  
    },[memoData,props]);
    function setModalDisplayNone(){
        props.setModalDisplay('none');
    }
    

    
    return(
        <div className="todo-list-template">
            <div className="title">
                <div className="title-menu">
                    {/* 뒤로가기 버튼, 링크로 메인페이지로만 가고 기능없음. */}
                        <BiLeftArrowAlt className="title-menu BiLeftArrowAlt" onClick={setModalDisplayNone}></BiLeftArrowAlt>
                    
                    {/* 저장버튼, state 업데이트 기능 있음. */}
                        <BiSave className="title-menu BiSave" onClick={inputTitleAndMemo} ></BiSave>
                    
                </div>
            </div>
            {/* 제목, 내용 입력 */}
            <div className="todos-wrapper">
                {/* onChage로(버튼이 아니고, 인풋창이기에) 내용 변경시마다
                함수 호출  */}
                <input className='inputTitle' placeholder='제목을 입력해주세요'
                value={memoData.title}
                    onChange={inputTitle} />
                {/* onChage로(버튼이 아니고, 인풋창이기에) 내용 변경시마다
                함수 호출  */}
                <textarea className='textareaMemo' placeholder='메모를 입력해주세요'
                value={memoData.memo}
                    onChange={inputMemo} />
            </div>


        </div >
    )
}