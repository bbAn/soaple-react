import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16}}> React Study!! </div>
        </div>
    );
}

export default LandingPage;

/*

· 조건부 렌더링
    - 조건에 따라 렌더링 결과가 달라지도록 하는 것

· 앨리먼트 변수
    - 리액트 엘리먼트를 변수처럼 저장해서 사용하는 방법

· 인라인 조건
    - 조건문을 코드 안에 집어넣는 것
    
    - 인라인 If
      If문을 필요한 곳에서 직접 집어넣어서 사용하는 방법 
      논리 연산자 &&를 사용 (AND 연산)
      앞에 나오는 조건문이 true일 경우에만 뒤에 나오는 엘리먼트를 렌더링
    
    - 인라인 If-Else
      If-Else문을 필요한 곳에 직접 집어 넣어서 사용하는 방법
      삼항 연산자 ?를 사용
      앞에 나오는 조건문이 true면 첫 번째 항목을 리턴, false면 두 번째 항목을 리턴
      조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용  

· 컴포넌트 렌더링 막기
    - 리액트에서는 null을 리턴하면 렌터링되지 않음
    - 특정 컴포넌트를 렌더링 하고 싶지 않을 경우 null을 리턴하면 됨

*/