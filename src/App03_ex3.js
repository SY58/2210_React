//App03_ex3.js

import FriendComponent from "./components/friendComponent";
import { Component } from "react";

class App extends Component{
    state={
        friends:["바나나", "딸기", "복숭아"]
    }

    render(){
        return(
            <div className="container">
                <h1>자식 component 사용 예제</h1>
                <FriendComponent friends={this.state.friends} 
                    deleteClicked={this.deleteClicked}
                    updateClicked={this.updateClicked}/>                
            </div>
        );        
    }
    
    deleteClicked = (idx)=>{
        console.log("["+idx+"] 인덱스의 아이템을 삭제합니다.");
        //this.state.friend 배열에서 idx 인덱스를 제외한 새로운 배열을 얻어낸다.
        let newArray=this.state.friends.filter((item, index)=>{
            return index !== idx;
        });
        this.setState({friends:newArray});
    }
    updateClicked = (data)=>{
        //data는 {index:xxx, newName:xxx} 모양의 object이다.
        let newArray=this.state.friends.map((item, index)=>{
            return data.index === index ? data.newName : item;
        });

        let newArray2=this.state.friends.map((item, index)=>{
            if(data.index === index){
                return data.newName 
            }else{
                return item;
            }
        });

        let newArray3=this.state.friends.map((item, index)=> data.index === index ? data.newName : item);
        
        this.setState({
            friends:newArray //newArray2, 3도 가능
        });
    };
}

export default App;