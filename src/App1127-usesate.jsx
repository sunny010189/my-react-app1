import { useState } from "react"

function App(){
  // 使用者名稱
  const[inputUserName,setInputUserName]=useState("我是文字方塊");
  // 縣市名稱
  const[selCity,setSelCity]=useState('');
  // 建立陣列
  const arrCity=['台北市','新北市','桃園市','高雄市','台南市','台中市']; 

  // 閱讀確認
  const[check,setCheck]=useState(false);

  // 多個核取方塊
  const [chkList,setChkList]= useState([]);


  const arrList = ['HTML','CSS','JS','React'];

  // 選項按鈕
  const [isCar,setIsCar] = useState('N');
  const [q1Ans,setQ1Ans] = useState('');
  const [q2Ans,setQ2Ans] = useState('');

  // 統計次數
  const [ans1Count,setAns1Count]= useState(0);
  const [ans2Count,setAns2Count]= useState(0);
  const [ans3Count,setAns3Count]= useState(0);



  // 建立函式處理被勾選的項目
  const handleChkList=(e)=>{
    // 使用其餘運算子(...)保留已被勾選的項目+目前被勾選的項目
    // setChkList([...chkList,e.target.value]);
    // 檢查是否被勾選
    if(e.target.checked){
      // 是=>原本+新的
      setChkList([...chkList,e.target.value]);
    }else{
      // 否=>從原本被勾選的項目中拿掉不要的(filter)
      setChkList(
        chkList.filter((list)=>{
          return list!==e.target.value
        })
      );
    }

  }

  return(
    <>
    <h1>react-表單</h1>
    <hr />
    {/* input */}
    <label htmlFor="username">使用者名稱</label>
    <input type="text" id="username"
    value={inputUserName}
    onChange={(e)=>{
      setInputUserName(e.target.value);
    }}
    />{inputUserName}
    <br />
    {/* select */}
    <label htmlFor="C">縣市名稱</label>
    <select name="" id="city"
      value={selCity}
      onChange={(e)=>{
      setSelCity(e.target.value)
      }}
    >
      {/* 逐行寫法 */}
      {/* <option value="台北市">台北市</option>
      <option value="桃園市">桃園市</option>
      <option value="新北市">新北市</option>
      <option value="台中市">台中市</option>
      <option value="台南市">台南市</option>
      <option value="高雄市">高雄市</option> */}

      {/* 陣列寫法 */}
      <option value="" >請選擇</option>
      {
        arrCity.map((city)=>{
          return <option value={city} key={city}>{city}</option>
        })
      }
    </select>{selCity}
    <br />
    {/* 單一核取方塊 */}
    <label htmlFor="isCheck">閱讀確認</label>
    <input type="checkbox" id="isCheck" 
    value={check}
    onChange={(e)=>{
      // 處理勾選選值的變化
      setCheck(e.target.checked);

    }} />{check.toString()}
    <br />

    {/* 多個核取方塊(複選) */}

    {
      arrList.map((list)=>{
        return <div key={list}>
        <input type="checkbox" name="like" id={list}
          value={list}
          onChange={handleChkList}
        />
        <label htmlFor={list}>{list}</label>
        </div>
        

        })
    }

    {/* <label htmlFor="chkList1">HTML</label>
    <input type="checkbox" name="like" id="chkList1" value='HTML' onChange={'handleChkList'} />
    <label htmlFor="chkList2">CSS</label>
    <input type="checkbox" name="like" id="chkList2" value='CSS' onChange={'handleChkList'} />
    <label htmlFor="chkList3">JS</label>
    <input type="checkbox" name="like" id="chkList3" value='JS' onChange={'handleChkList'} /> */}
    <br />
    {chkList}
    
    <br />
    {/* 選項按鈕 */}
    汽車駕照
    <input type="radio" name="car"value="有" id="yes" onChange={(e)=>{
      setIsCar('有');
    }} />
    <label htmlFor="yes">有</label>
    <input type="radio" name="car"value="無" id="no" onChange={(e)=>{
      setIsCar('沒有');
    }}/>
    <label htmlFor="no">無</label>
    <br />
    你有沒有駕照:{isCar}

    <br />
    請選擇喜歡的飲料
    <input type="radio" name="Q1"value="美式" id="Q1-1" onChange={(e)=>{
      setQ1Ans(e.target.value);
    }} />
    <label htmlFor="Q1-2">美式</label>
    <input type="radio" name="Q2"value="拿鐵" id="Q1-2" onChange={(e)=>{
      setQ1Ans(e.target.value);
    }} />
    <label htmlFor="Q1-3">拿鐵</label>
    <input type="radio" name="Q1"value="鮮奶茶" id="Q1-3" onChange={(e)=>{
      setQ1Ans(e.target.value);
    }} />
    <label htmlFor="Q1-3">鮮奶茶</label>

    <br />
    請選擇喜歡的食物
    <input type="radio" name="Q2"value="地瓜球" id="Q2-1" onChange={(e)=>{
      setQ2Ans(e.target.value);
    }} />
    <label htmlFor="Q2-2">地瓜球</label>
    <input type="radio" name="Q2"value="雞蛋糕" id="Q2-2" onChange={(e)=>{
      setQ2Ans(e.target.value);
    }} />
    <label htmlFor="Q2-3">雞蛋糕</label>
    <input type="radio" name="Q1"value="鹹酥雞" id="Q2-3" onChange={(e)=>{
      setQ2Ans(e.target.value);
    }} />
    <label htmlFor="Q2-3">鹹酥雞</label>

    <br />
    <button onClick={()=>{
      // 將所有次數歸零
      setAns1Count(0);
      setAns2Count(0);
      setAns3Count(0);

      // 統計次數
      if(q1Ans=='美式'|| q2Ans=='地瓜球'){
        setAns1Count(ans1Count+1);
      }else if(q1Ans=='拿鐵'|| q2Ans=='雞蛋糕'){
        setAns2Count(ans2Count+1);
      }else if(q1Ans=='鮮奶茶'|| q2Ans=='鹹酥雞'){
        setAns3Count(ans3Count+1);
      }
      
      // const q1a = document.getElementById('Q1-1');
      // if(q1a.checked){
      //   setAns1Count(ans1Count+1);
      // }
      // const q1b = document.getElementById('Q1-2');
      // if(q1b.checked){
      //   setAns2Count(ans2Count+1);
      // }
      // const q1c = document.getElementById('Q1-3');
      // if(q1c.checked){
      //   setAns3Count(ans3Count+1);
      // }


      // const q2a = document.getElementById('Q2-1');
      // if(q2a.checked){
      //   setAns1Count(ans1Count+1);
      // }
      // const q2b = document.getElementById('Q2-2');
      // if(q2b.checked){
      //   setAns2Count(ans2Count+1);
      // }
      // const q2c = document.getElementById('Q2-3');
      // if(q2c.checked){
      //   setAns3Count(ans3Count+1);
      // }


    }}>送出統計結果</button>

    顯示統計次數結果:
    <p>選項一次數:{ans1Count}</p>
    <p>選項二次數:{ans2Count}</p>
    <p>選項三次數:{ans3Count}</p>
    </>
    


  )
}


export default App