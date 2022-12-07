import { Component } from "react";

//함수형 component에서 클래스형 component로 변경하기
class App extends Component{

  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    let myName="바나나";
    //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있다.
    const boxStyle={
      width:"100px",
      height: "100px",
      border:"1px solid red",
      backgroundColor:"yellow" //여러 단어로 구성된 속성은 camel case를 사용한다.
    };

    return(
      <div className='container'>
        <h1>인덱스 페이지입니다.</h1>
        {/* myName이라는 변수안에 있는 내용 사용하기 */}
        <p>내이름은 <strong>{myName}</strong></p>
        {/* 
          [ 이벤트 처리 ]

          onEventName={ 화살표 함수 }

          처럼 on 다음에 이벤트명을 camel case로 작성한다.
          화살표 함수는 해당 이벤트가 발생하면 자동으로 호출된다.
          예) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus ...
        */}
        <button className='btn btn-primary' onClick={()=>{
          alert("버튼을 눌렀네요?");
        }}>눌러보셈</button>
        {/* css가 정의된 object를 이용해서 inline css를 적용시킬 수가 있다. */}
        <div style={boxStyle}>box</div>
      </div>
    );
  }
}

export default App;
