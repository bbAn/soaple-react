import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                    style={styles.image}
                    alt="" 
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;



/*

· 리액트 컴포넌트 
    - 컴포넌트 기반 구조
      작은 컴포넌트들이 모여서 하나의 컴포넌트를 구성하고 이러한 컴포넌트들이 모여 하나의 페이지를 구성
    - 개념적으로는 자바스크립트 함수와 비슷
      속성들을 입력으로 받아 그에 맞는 리액트 엘리먼트를 생성하여 리턴

· Props
    - Props의 개념
      리액트 컴포넌트의 속성
      컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체

    - Props의 특징
      읽기 전용
      리액트 컴포넌트의 props는 바꿀 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트를 리턴해야함
    
    - Props의 사용법
      JSX를 사용할 경우 컴포넌트에 키-값의 쌍 형태로 넣어 주어야함
      문자열 이외에 정수, 변수, 그리고 다른 컴포넌트 등이 들어갈 경우에는 중괄호를 사용해서 감싸주어야함
      JSX를 사용하지 않는 경우에는 createElement()함수의 두 번째 파라미터로 자바스크립트 객체를 넣어주면 됨

· 컴포넌트 만들기
    - 컴포넌트의 종류
      클래스 컴포넌트와 함수 컴포넌트 두가지로 나뉨
    
    - 함수 컴포넌트
      함수 형태로 된 컴포넌트
    
    - 클래스 컴포넌트 
      ES6의 클래스를 사용하여 만들어진 컴포넌트
    
    - 컴포넌트 이름 짖기
      컴포넌트의 이름은 항상 대문자로 시작해야 함
      소문자로 시작할 경우 컴포넌트를 DOM 태그로 인식하기 때문

    -컴포넌트 렌더링
     컴포넌트로부터 엘리먼트를 생성하여 이를 리액트 DOM에 전달 

· 컴포넌트 추출 
    - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
    - 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형채로 추출하는 것이 좋음

*/