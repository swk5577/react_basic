import { useState } from "react";

function StateProps({data, name}) {
    console.log(data, name)

    let [count,setCount] = useState(0);
    function plus(){
        setCount(++count);
        console.log(count);
        // document.querySelector('button').innerHTML = count;
    }

  return (
    <>
    <h2>StateProps</h2>
    *부모컨포넌드에서 자식 컨포넌트로 값을 보내줄때 사용 <br />
    * &lt;자식컨포넌트 속성 = '값' /&gt; <br />
    * function 자식 (props)&#123; <br />
        console.log( props ); = &#123;속성:'값'&#125;
        &#125; <br />

        <hr />
    
    <h2>State</h2>
    <button onClick={plus}> {count}</button> <br />
    *useState() //상태 [값, 값수정함수] <br />
    *값수정함수를 이용해서 값을 수정하면 컨포넌트 자체내에 랜더링 발생 <br />
    *바귄 값이 실제 dom에 적용됨 <br />
    </>
  )
}

export default StateProps