import React, { useState} from "react";

function ConfirmButton(props) {

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton;

/*

· 이벤트란?
    - 사용자가 버튼을 클릭하는 동의 사건을 의미

· 이벤트 처리하기
    - DOM의 이벤트
      이벤트의 이름을 모두 소문자로 표기
      이벤트를 처리할 함수를 문자열로 전달
    
    - 리액트의 이벤트
      이벤트의 이름을 카멜 표기법으로 표기
      이벤트를 처리할 함수를 그대로 전달
    
    - 이벤트 핸들러
      이벤트가 발생했을 때 해당 이벤트를 처리하는 함수
      이벤트 리스너라고 부르기도 함
      
      클래스 컴포넌트
        클래스의 함수로 정의하고 생성자에서 바인딩해서 사용
        클래스 필드 문법도 사용가능
    
      함수 컴포넌트
        함수 안에 함수로 정의하거나 arrow function을 사용해서 정의

· Arguments 전달하기
    - Arguments란?
      함수에 전달할 데이터

    - 함수 컴포넌트
      이벤트 핸들러 호출 시 원하는 순서대로 매개변수를 넣어서 사용

*/