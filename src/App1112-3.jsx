
function App() {
    const person = {
        name: "王小明",
        age: 10
    }

    {/* 物件解構寫法 */ }
    const { name, age } = person;
    // console.log(name,age);

    return (
        <>
            {/* 一般寫法 */}
            <div>姓名:{person.name}</div>
            <div>年紀:{person.age}歲</div>
            <hr />
            <div>{`姓名:${person.name}`}</div>
            <div>{`年紀:${person.age}歲`}</div>
            <hr />
            {/* 物件解構寫法 */}
            <div>解構後姓名:{name}</div>
            <div>解構後年紀:{age}歲</div>
        </>
    )
}

export default App