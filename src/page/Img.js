import logo from '../logo.svg';

function Img() {
    return (
        <>
            *src폴더안의 이미지 출력
            <img src={logo} alt="" />


            *public폴더안의 이미지 출력
            <img src="./logo512.png" alt="" />
        </>
    )
}

export default Img