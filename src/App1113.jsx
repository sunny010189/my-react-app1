import './App.css';

function ShowContent(arrData) {
  return (
    <>
      {
      arrData.map((item) => {
        return(
          <>
        <div className="box" key={item.id}>
          <h2><strong>{item.title}</strong></h2>
          <p>{item.desc}</p>
        </div>
        </>
        )
      })
      }
      </>
      )
    }
      
      
      


function App() {
    const contentData = [
      {
        id: 1,
        title: '教學影音',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?',
      },
      {
        id: 2,
        title: '良性互動',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?',
      },
      {
        id: 3,
        title: '趨勢分享',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?',
      }
    ]
    /* 改成陣列不需要命名 */
    /* 
      function ShowContent(props){
        return(
          <>
          { */
    /* JSX不能使用FOR迴圈 */
    /* 在jsx用js語法要用大括號{} */
    /*  props.map((item) => {
      <div className="box">
        <h2><strong>{item.title}</strong></h2>
        <p>{item.desc}</p>
      </div>
    })
  }
  </>
  )
  } */


    return (
      <>
        <div className="wrap">
        </div>
          <header>
            <img src="images/banner.jpg" alt="" />
          </header>

          <div className="content">
          
            <ShowContent arrData={contentData}/>



            <div className="slogan">
              <h3>讓學習成為一種習慣</h3>
            </div>

            <div className="content2">
              <h1>推薦課程</h1>
              <div className="contentClass">

                <div className="box2">
                  <p><img src="images/unity.jpg" alt="" /></p>
                  <p><h3>Unity 5</h3></p>
                  <p className="p-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quibusdam.</p>
                  <p>講師:xxx</p>
                  <p>時數:4 小時</p>
                  <p><span className='span1'>原價 NT$1600</span><span className='span2'>NT$1200</span></p>
                  <p><button>付款上課去</button></p>
                </div>

                <div className="box2">
                  <p><img src="images/gamesalad.jpg" alt="" /></p>
                  <p><h3>2D 遊戲</h3></p>
                  <p className="p-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quibusdam.</p>

                  <p>講師:xxx</p>
                  <p>時數:8 小時</p>
                  <p><span className='span1'>原價 NT$3200</span><span className='span2'>NT$1600</span></p>
                  <p><button>付款上課去</button></p>
                </div>

                <div className="box2">
                  <p><img src="images/gwd.jpg" alt="" /></p>
                  <p><h3>Goole Web Design</h3></p>
                  <p className="p-blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quibusdam.</p>
                  <p>講師:xxx</p>
                  <p>時數:8 小時</p>
                  <p><span className='span1'>原價 NT$3200</span><span className='span2'>NT$1600</span></p>
                  <p><button>付款上課去</button></p>
                </div>
              </div>

            </div>

            <footer>
              <p>&copy;白陽</p>
            </footer>
          </div>
        </>
    )
  }

  export default App