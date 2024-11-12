import './App.css';


function App() {
  return (
    <>
      <div className="wrap">
        <header>
          <img src="images/banner.jpg" alt="" />
        </header>

        <div className="content">
          <div className="box">
            <h2><strong>教學影音</strong></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?</p>
          </div>
          <div className="box">
            <h2><strong>良性互動</strong></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?</p>
          </div>
          <div className="box">

            <h2><strong>趨勢分享</strong></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?</p>
          </div>
        </div>

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