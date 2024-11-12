// // 建立子組件
// function MyComponent(props){
//   console.log(props)
//   return <>
//   <div>我是子組件</div>
//   <div>{props.a}</div>
//   <div>{props.b}</div>
//   </>
// }

// 子組件使用物件解構賦值寫法
// 解構賦值的名稱必須一樣 順序可以不同
function MyComponent({ a, b = "我是預設值b", c }) {
    c(); /* 呼叫c */
    return (
        <>
            <div>我是子組件</div>
            <div>{a}</div>
            <div>{b}</div>
            <div className="myFunC"></div>
        </>
    );
}

// 建立父組件
function App() {
    return (
        <>
            <MyComponent
                a="我是屬性a"
                /* b="我是屬性b"  */
                c={() => {
                    console.log("我是方法c");
                }}
            />
            {
                // props=properites = 屬性
                // 作用:從父元件傳遞資料到仔元件"(上往下傳遞)"=父傳到子
                // 撰寫reaact時組件之間需要溝通時(傳遞資料)
            }
        </>
    );
}

export default App;
