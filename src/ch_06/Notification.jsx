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
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) { //생성자함수
        super(props);

        //생성자에서 모든 state를 한 번에 정의
        //state를 변경하고자 할 때에는 꼭 setState()함수를 사용해야 함
        this.state = {}; 
    }

    componentDidMount() { //마운드: 컴포넌트가 생성될 때
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate() { //업데이트: 컴포넌트의 props가 변경될 때 or forceUpdate()라는 강제 업데이트 함수가 호출 될 때
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    componentWillUnmount() {//언마운트: 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;


/*

· state
    - state란?
      리액트 컴포넌트의 변경 가능한 데이터
      컴포넌트를 개발하는 개발자가 직접 정의해서 사용
      state가 변경될 경우 컴포넌트가 재렌더링됨
      렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야함

    - state의 특징
      자바스크립트 객체 형태로 존재
      직접적인 변경이 불가능 함
      
      클래스 컴포넌트
        생성자에서 모든 state를 한 번에 정의
        state를 변경하고자 할 때에는 꼭 setState()함수를 사용해야 함
        컴포넌트의 생명주기 함수까지 모두 명확하게 정의되어 있어 잘 가져다 쓰면 됨
      
      함수 컴포넌트
        useState()훅을 사용하여 각각의 state를 정의
        각 state별로 주어지는 set함수를 사용하여 state 값을 변경  

· 생명주기
    - 컴포넌트는 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트되다가 사라지는 과정을 겪음

*/
