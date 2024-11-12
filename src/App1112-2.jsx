// 傳遞組件
// 把組件放到另一個組件的內容裡面:在react裡叫做composition(組合)
// 此方法在不影響組建功能的基礎上，另外再給組件加入額外的功能

// 建立一個新組件
function SecondComponent({ }) {
    return <h1>我是SecondComppnent組件</h1>;
}

// 子組件
function MyComponent({ children }) {
    // return <>{children}</>
    return (
        <>
            我是MyComponent組件
            {children}
        </>
    );
}

// 父組件
function App() {
    return (
        <>
            {/* 寫法一 */}
            {/* <MyComponent children={<SecondComponent/>} */}
            {/* 寫法二 因為children是react內建屬性所以在船組建時可以不用寫childeen屬性 */}
            <MyComponent>
                <SecondComponent />
            </MyComponent>
        </>
    );
}

export default App;
