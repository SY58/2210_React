//App03.js

import { Component } from "react";

class App03 extends Component{
    render(){
        /*
            배열에 jsx객체를 여러개 넣기
        */
        const names=[];
        names.push(<li key={0}>바나나</li>);
        names.push(<li key={1}>딸기</li>);
        names.push(<li key={2}>복숭아</li>);

        //jsx객체를 만들어낼 아이템이 배열에 준비되어 있다고 가정하자
        const animals=["강아지", "코끼리", "고양이"];

        //만들어낼 jsx 객체를 저장할 빈 배열을 만든다.
        const result=[];
        //반복문 돌면서
        for(let i=0; i<animals.length; i++){
            //동물 이름이 출력된 jsx객체를 만들어서
            let tmp=<li key={i}>{animals[i]}</li>;
            //미리 준비된 배열에 누적시키기
            result.push(tmp);
        }
        //배열의 map() 함수를 활용해서 jsx객체가 들어있는 새로운 배열을 얻어내기
        const result2= animals.map((item, index)=>{
            return <li key={index}>{item}</li>
        });

        return(
            <div className="container">
                <h3>반복문 돌면서 여러 개의 문서 객체 만들기</h3>
                <ul>
                    {names}
                </ul>
                <h3>동물 목록</h3>
                <ul>
                    {result}
                </ul>
                <h3>동물 목록2</h3>
                <ul>
                    {result2}
                </ul>
            </div>
        );

    }

}

export default App03;