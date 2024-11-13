import './App.css';

function App() {
    const contentData = {
        data1: {
            title: '教學影音',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?',
        },
        data2: {
            title: '良性互動',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?',
        },
        data3: {
            title: '趨勢分享',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus ullam blanditiis qui harum, reiciendis ipsa ducimus necessitatibus adipisci quaerat?',
        }
    }
    const box = {
        box1: {
            imageUrl: "./images/unity.jpg",
            title: 'Unity5',
            content: '測試測試測試測試測試測試測試測試測試',
            teacher: '講師:coffee老師',
            time: '影音課程時數:4小時',
            price1: '原價NT1600',
            price2: 'NT1200',
            botten: '付款上課去',
        },
        box2: {
            imageUrl: "./images/gamesalad.jpg",
            title: 'Gamesalad2D遊戲製作',
            content: '測試測試測試測試測試測試測試測試測試',
            teacher: '講師:coffee老師',
            time: '影音課程時數:8小時',
            price: '原價NT3200',
            price2: 'NT1600',
            botten: '付款上課去',
        },
        box3: {
            imageUrl: "./images/gwd.jpg",
            title: 'Google web Design',
            content: '測試測試測試測試測試測試測試測試測試',
            teacher: '講師:coffee老師',
            time: '影音課程時數:8小時',
            price: '原價NT3200',
            price2: 'NT1600',
            botten: '付款上課去',
        },

    }

    return (
        <>
            <div className="wrap">
                <header><img src="./images/banner.jpg" alt="banner圖" /></header>

                <div className="content" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    textAlign: 'center',
                    margin: '50px auto',
                }}>
                    <div className="cont">
                        <div>
                            <h2>{introduce.int1.title}</h2>
                            <p>{introduce.int1.content}</p>
                        </div>
                    </div>

                    <div className="cont">
                        <div>
                            <h2>{introduce.int2.title}</h2>
                            <p>{introduce.int2.content}</p>
                        </div>
                    </div>

                    <div className="cont">
                        <div>
                            <h2>{introduce.int3.title}</h2>
                            <p>{introduce.int3.content}</p>
                        </div>
                    </div>
                </div>

                <h2 style={{
                    color: "white",
                    backgroundColor: '#DB2C1B',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "72px",

                }}>讓學習成為一種習慣</h2>
                <h1 style={{
                    color: "green",
                    textAlign: 'center',
                    lineHeight: '50px',

                }}>推薦課程</h1>

                <div className="card">
                    <div>
                        <a class='card1'>
                            <img src={box.box1.imageUrl}
                                class="card-img-top object-fit" alt="..." style={{
                                    width: '300px',
                                }} />
                            <h3 class="">{box.box1.title}</h3>
                            <p class="">{box.box1.content}</p>
                            <p class="">{box.box1.teacher}</p>
                            <p class="">{box.box1.time}</p>
                            <p>
                                <span class="">{box.box1.price1}</span>
                                <span class="">{box.box1.price2}</span>
                            </p>
                            <button class="button">{box.box1.botten}</button>
                        </a>
                    </div>

                    <div>
                        <a class='card1' >
                            <img src={box.box2.imageUrl}
                                class="card-img-top object-fit" alt="..." style={{
                                    width: '300px',
                                }} />

                            <h3 class="">{box.box2.title}</h3>
                            <p class="">{box.box2.content}</p>
                            <p class="">{box.box2.teacher}</p>
                            <p class="">{box.box2.time}</p>
                            <p>
                                <span class="">{box.box2.price1}</span>
                                <span class="">{box.box2.price2}</span>
                            </p>
                            <button class="">{box.box2.botten}</button>

                        </a>
                    </div>

                    <div>
                        <a class='card1' >
                            <img src={box.box3.imageUrl}
                                class="card-img-top object-fit" alt="..." style={{
                                    width: '300px',
                                }} />
                            <div class='card-body'>
                                <h3 class="">{box.box3.title}</h3>
                                <p class="">{box.box3.content}</p>
                                <p class="">{box.box3.teacher}</p>
                                <p class="">{box.box3.time}</p>
                                <p>
                                    <span class="">{box.box3.price1}</span>
                                    <span class="">{box.box3.price2}</span>
                                </p>
                                <button class="">{box.box3.botten}</button>
                            </div>
                        </a>
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