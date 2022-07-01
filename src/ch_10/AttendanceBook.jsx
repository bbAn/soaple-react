import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{students.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;

/*

· 리스트
    - 조건에 따라 렌더링 결과가 달라지도록 하는 것

· 키
    - 각 객체나 아이템을 구분할 수 있는 고유한 값 

· 여러 개의 컴포넌트 렌더링
    - 자바스크립트의 배열의 map() 함수를 사용
        배열에 들어있는 각 변수에 어떤 처리를 한 뒤 결과(엘리먼트)를 배열로 만들어서 리턴함
        map() 함수 안에 있는 엘리먼트는 꼭 키가 필요함

· 리스트의 키
    - 리스트에서 아이템을 구분하기 위한 고유한 문자열
    - 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용
    - 리액트에서 키의 값은 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨

· 다양한 키값의 사용법
    - 숫자 값을 사용
      배열에 중복된 숫자가 들어 있다면 키 값도 중복되기 때문에 고유해야 한다는 키 값의 조건이 충족되지 않음
    
    - id를 사용
      id의 의미 자체가 고유한 값이므로 키값으로 사용하기에 적합
      id가 있는 경우에는 보통 id 값을 키값으로 사용
      
*/