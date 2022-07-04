import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Namy Nam" backgroundColor="#4ea04e">
            <p>Hi~</p>
            <p>I'm Namy :)</p>
        </Card>
    );
}

export default ProfileCard;


/*

· 합성이란?
    - 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
    - 다양하고 복잡한 컴포넌트를 효율적으로 개발할 수 있음

· 합성 기법
    - Containment
      하위 컴포넌트를 포함하는 형태의 합성 방법
      리액트 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용
      여러 개의 children 집합이 필요한 경우 별도로 props를 각각 정의해서 사용
    
    - Specialization
      범용적인 개념을 구별되게 구체화하는 것
      범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 구체화시켜서 컴포넌트를 사용하는 합성 방법
    
    - Containment와 Specialization을 함께 사용하기
      props.children을 통해 하위 컴포넌트를 포함시키기(Containment)
      별도의 props를 선언하여 구체화시키기(Specialzation)

· 상속
    - 다른 컴포넌트로부터 상속받아서 새로운 컴포넌트를 만드는 것
    - 상속을 사용하여 컴포넌트를 만드는 것을 추천할 만한 사용 사례를 찾기 못함
    - 리액트에서는 상속이라는 방법으로 사용하는 것보다는 합성을 사용하는 것이 더 좋음

*/