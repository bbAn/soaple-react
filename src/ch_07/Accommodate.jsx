import React, {useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;


/*

· 훅
    - 훅이란?
      리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것
    
    - useState()
        state를 사용하기 위한 훅
        함수 컴포넌트에서는 기본적으로 state라는 것을 제공하지 않음
        클래스 컴포넌트처럼 state를 사용하고 싶으면 useState()훅을 사용해야 함
        
        사용법 
            const[변수명, set함수명] = useState(초깃값);
            변수 각각에 대해 set 함수가 따로 존재함
    
    - useEffect()
        사이드 이펙트를 수행하기 위한 훅
        사이트 이펙트란 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업
        useEffect() 훅만으로 클래스 컴포넌트의 생명주기 함수들과 동일한 기능을 수행할 수 있음
        
        사용법
            useEffect(이펙트 함수, 의존성 배열);
            의존성 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨
            의존성 배열에 빈 배열을([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
            의존성 배열 생략 시 컴포넌트가 업데이트될 때마다 호출됨
            선언된 컴포넌드의 props와 state에 접근할 수 있음
            useEffect()에서 리턴하는 함수는 컴포넌트 마운트가 해제될 때 호출됨 

    - useMemo()
        Memoized value를 리턴하는 훅
        연산량이 높은 작업이 매번 렌더링될 때마다 반복되는 것을 피하기 위해 사용
        렌더링이 일어나는 동안 실행되므로 렌더링이 일어나는 동안 실행돼서는 안될 작업을 useMemo()에 넣으면 안됨
        
        사용법
        const memoizedValue = useMemo(값 생성 함수, 의존성 배열);
        의존성 배열에 들어 있는 변수가 변했을 경우에만 새로 값 생성 함수를 호출하여 결과값을 반환함
        그렇지 않은 경우에는 기존 함수의 결과값을 그대로 반환
        의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 값 생성 함수가 실행되므로 의미가 없음

    - useCallback()
        useMemo() 훅과 유사하지만 값이 아닌 함수를 반환한다는 점이 다름
        useCallback(콜백 함수, 의존성 배열);은 useMemo(() => 콜백 함수, 의존성 배열);과 동일
        컴포넌트 내에 함수를 정의하면 매번 렌더링이 일어날 때마다 함수가 새로 정의되므로 
        useCallback() 훅을 사용하여 불필요한 함수 재정의 작업을 없애는 것

        사용법
        const memoizedCallback = useCallback(콜백 함수, 의존성 배열);
        의존성 배열에 들어있는 변수가 변했을 경우에만 콜백 함수를 다시 정의해서 리턴함

    - useRef()
        레퍼런스를 사용하기 위한 훅
        레퍼런스를 특정 컴포넌트에 접근할 수 있는 객체를 의미
        매번 렌더링될 때마다 항상 같은 래퍼런스 객체를 반환

        사용법
        const refContainer = useRef(초깃값);
        .current라는 속서을 통해서 접근
    
· 훅의 규칙
    - 무조건 최상위 레벨에서만 호출해야 함
        반복문이나 조건문 또는 중첩된 함수들 안에서 훅은 호출하면 안 됨
        컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출 되어야 함

    - 리액트 함수 컴포넌드에서만 훅을 호출해야 함
        훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있음

· 커스텀 훅
    - 이름이 use로 시작하고 내부에서 다른 훅을 호출하는 단순한 자바스크립트 함수
    - 파라미터로 무엇을 받을지, 어떤 것을 리턴해야 할지를 개발자가 직접 정할 수 있음
    - 중복되는 로직을 커스텀 훅으로 추출하여 재사용성을 높이기
    - 이름이 use로 시작하지 않으면 특정 함수의 내부에서 훅을 호출하는지를 알 수 없기 때문에
      훅의 규칙 위반 여부를 자동으로 확인할 수 없음

*/

