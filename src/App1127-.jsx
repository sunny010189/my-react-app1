import { useEffect } from "react";

function App(){
  // const arr1=[];
  // const obj1={}; 

  // 建立變色函世

  useEffect(()=>{
    const p1 = document.getElementById('p1');
    p1.addEventListener('mouseover',()=>{
      p1.style.color="blue";
      p1.style.fontWeight="bold";
    })
    p1.addEventListener('mouseout',()=>{
      p1.style.color="";
      p1.style.fontWeight="";
    })

    const p2 = document.getElementById('p2');
    p2.addEventListener('mouseover',()=>{
      p2.textContent="更改文字"
    })
    p2.addEventListener('mouseout',()=>{
      p2.textContent="變內容"
    })

    const h1 = document.getElementById('h1');
    let isClick = false;
    h1.addEventListener('click',(e)=>{
      if(isClick===false){
        e.target.textContent="click被觸發了";
        e.target.style.color="blue";
      }else{
        e.target.textContent="滑鼠事件";
        e.target.style.color="blue";
      }

      // const h1Text = h1.textContent;
      // alert(h1Text);
    })
    },{});

  //   const changeColor = (isChange)=>{
  //     // if(isChange){
  //     //   const p1 = document.getElementById('p1');
  //     //     p1.style.color="blue";
  //     //     p1.style.fontWeight="bold";
  //     // }else
  //     // p1.style.color="";
  //     // p1.style.fontWeight="";
  //   }
  // })

  return(
    <>
      <h1>滑鼠事件</h1>
      <hr />
      <p id="p1">變色</p>
      <p id="p2">變內容</p>
    </>
  )
}


export default App