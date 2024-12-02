import { useState } from "react"

function App(){
  // 定義變數name與setName方法
  const [name, setName]=useState('');
  return(
    <>
    <h2>設計一個輸入名子的欄位，並且即時顯示</h2>
    <hr />
    <h3>目前文字方塊的內容:{name}</h3>
    請輸入姓名 : <input type="text" value={name} onChange={(e)=>{
      // e=event 事件
      // 透過e.target.value抓出
      setName(e.target.value);
    }} />
    </>
  )
}

export default App