//util.js

const drill = ()=>{
    console.log("구멍을 뚫어요!");
}

const sender = (msg)=>{
    console.log(msg+" 를 전송합니다.")
}

//2개의 함수를 object에 담아서
const obj={drill, sender}

//default로 export한다.
export default obj;