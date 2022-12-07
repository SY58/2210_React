//App02.js

import { Component } from "react";

class App02 extends Component{
    //상태값(state) 정의하기
    state={
        info:"x:0, y:0",
        info2:"x:0, y:0"
    };

    render(){
        //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있다.
        const boxStyle={
            width:"300px",
            height:"300px",
            border:"1px solid red",
            backgroundColor:"yellow" //여러 단어로 구성된 속성은 camel case를 사용한다.
        };
      
        return(
            <div className="container">
                <h3>마우스 이벤트 처리</h3>
                {/* 
                    이벤트리스너 함수에 전달되는 이벤트 객체는 react가 넣어주는 이벤트 객체이다.
                    original 이벤트 객체를 사용하고 싶다면
                    e.nativeEvent 를 사용하면 된다.
                */}
                <div style={boxStyle} onMouseMove={(e)=>{
                    console.log(e);
                    //마우스의 좌표를 이용해서 문자열을 만들어낸 다음
                    let info=`x:${e.clientX}, y:${e.clientY}`;
                    //state를 update한다.(state를 사용하는 UI는 자동 update 된다.)
                    this.setState({info:info});
                }}></div>
                {/* state 값을 활용해서 출력하기 */}
                <p>{this.state.info}</p>

                {/* 이벤트 처리를 할 함수를 미리 만들어 놓고 이벤트 리스너 함수로 등록하기 */}
                <div style={boxStyle} onMouseMove={this.handleMouseMove}></div>
                <p>{this.state.info2}</p>
            </div>
        );
    }//render()

    //mouseMove 이벤트를 처리할 함수
    handleMouseMove = (e)=>{
        //마우스의 좌표를 이용해서 문자열을 만들어낸 다음
        let info=`x:${e.clientX}, y:${e.clientY}`;
        //state를 update한다.(state를 사용하는 UI는 자동 update 된다.)
        //여기서 this가 App2 Component를 참조하게 하려면 이 함수는 화살표함수로 만들어져 있어야 한다.
        this.setState({info2:info});
    }

}//class App02

export default App02;