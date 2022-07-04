import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;


/*

· 컨텍스트란?
    - 컴포넌트들 사이에서 데이터를 props를 통해 전달하는 것이 아닌 컴포넌트 트리를 통해 곧바로 데이터를 전달하는 방식
    - 어떤 컴포넌트든지 컨텍스트에 있는 데이터에 쉽게 접근할 수 있음

· 언제 컨텍스트를 사용해야 할까?
    - 여러 컴포넌트에서 계속해서 접근이 일어날 수 있는 데이터들이 있는 경우
    - 어떤 컴포넌트든지 컨텍스트에 있는 데이터에 쉽게 접근할 수 있음

· 컨텍스트란 사용 전 고려할 점?
    - 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어짐
    - 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니라면, 기존 방식대로 props를 통해 데이터를 전달하는 것이 더 적합

· 컨텍스트 API
    - React.createContext()
      컨텍스트를 생성하기 위한 함수
      컨텍스트 객체를 리턴함
      기본값으로 undefined를 넣으면 기본값이 사용되지 않음
    
    - Context.Provider
      모든 컨텍스트 객체는 Provider라는 컴포넌트를 갖고 있음
      Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됨
      Provider에는 Value라는 props이 있으며, 이것이 데이터로써 하위에 있는 컴포넌트들에게 전달됨
      여러 개의 Provider 컴포넌트를 중첩시켜 사용할 수 있음
    
    - Class.contextType
      Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용
      단 하나의 컨텍스트만을 구독할 수 있음 

    - Context.Consumer
      컨텍스트의 데이터를 구독하는 컴포넌트
      데이터를 소비한다는 뜻에서 consumer 컴포넌트라고도 부름
      consumer 컴포넌트는 여러 개의 consumer 컴포넌트와 연결될 수 있음
      상위 레벨에 매칭되는 Provider가 없을 경우 기본값이 사용됨
    
    - Context.displayName
      크롬의 리액트 개발자 도구에서 표시되는 컨텍스트 객체의 이름

· 여러 개의 컨텍스트 사용하기
    - Provider 컴포넌트와 Consumer 컴포넌트를 여러개 중첩해서 사용하면 됨

· useContext()
    - 함수 컴포넌트에서 컨텍스트를 쉽게 사용할 수 있게 해주는 훅
    - React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴
    - 컨텍스트의 값이 변경되면 변경된 값과 함께 useContext()훅을 사용하는 컴포넌트가 재렌더링됨  

*/