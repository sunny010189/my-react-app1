
function App() {

//     const person = {
//       s1: {
//         name: "同學1",
//         age: 10
//       },
//       s2: {
//         name: "同學2",
//         age: 11
//       },
//       s3: {
//         name: "同學3",
//         age: 13
//       }
//     }

  {/* 多筆資料的物件解構寫法-方法一:一般 */ }
  // const {s1,s2,s3} = person;

  //多筆資料的物件解構寫法-方法二:解構+展開...(其餘運算子)
  // 解構s1 = 展開s2,s3
  // const {s1, ...other}= person;
  // console.log(s1);
  // console.log(other.s3);

  const person = {
    name: "同學1",
    age: 10,
  }

  // function showName(obj){
  //   console.log(obj);
  //   console.log(obj.name);
  //   console.log(obj.age);
  // }
  // showName(person);

  // 將物件屬性直接解構給韓式參數
  function showName({name,age}){
    console.log(name);
    console.log(age);
  }
  showName(person);

  return (
      <>
       {/* //多筆資料的物件解構寫法-方法二:解構+展開...(其餘運算子)
      <div>{`同學1姓名:${s1.name}`}</div>
      <div>{`同學3姓名:${other.s3.name}`}</div> */}

       {/* 多筆資料的物件解構寫法-方法一:一般 */ }
        {/* <div>第一位同學姓名:{s1.name}</div>
        <div>第一位同學年齡:{s1.age}歲</div>
        <hr />
        <div>第二位同學姓名:{s2.name}</div>
        <div>第二位同學年齡:{s2.age}歲</div>
        <hr />
        <div>第三位同學姓名:{s3.name}</div>
        <div>第三位同學年齡:{s3.age}歲</div> */}


      </>
  )
}

export default App