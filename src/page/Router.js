import {useNavigate,useLocation,Link} from 'react-router-dom'

function Router() {
    const location = useLocation();
    const navigate = useNavigate();

/*     {
        pathname:'router',
        search:'',
        hash:'',
        state:'a100',
        key:'qm5flrk9'
    }
    let state = location.state; */
    let{state,pathname} = location;
    console.log(location);

    let move = ()=>{
        navigate('/css')

    }
  return (
    <>
    <h2>Router</h2>
     * 새로운 페이지를 로드하지않고 하나의 페이지안에서 <br />
     필요한 데이터만 가져오는 형태를 가진다.<br />

    <hr />
     *모듈설치(npm i react-router-dom)<br />
     *import &#123 Link,BrowserRouter.Route.Routes &#125 from 'react-router-dom'

     *브라우저에 URL값을 통해 값 전달 <br />
     ㄴ Link컨포넌트에 state속성을 이용함 (state='값')
     
     *브라우저에서 state값 받기
     ㄴ react-router-dom에 있는 useLocation 훅을 사용함
     ㄴ const 변수명 = useLocation();

    <Link to='/'>Home</Link>
    <button onClick={move}> Css활용 </button>

    <hr />

    <h2>useNavigate(이동,값전달), UseLocation(전달값 확인)</h2>
    * import &#123; useLocation, UesNavigate, Lonk $#125; from 'react-router-dom'<br />
    *const 변수명 = useNavigate();<br />
     ㄴ 변수명('이동할 url', state)<br />
    *Link는 태그를 활용하여 이동하지만 Navigate는 스크립트 프로그래밍을 통해 이동하고 싶을대 주로사용<br />

    </>
  )
}

export default Router