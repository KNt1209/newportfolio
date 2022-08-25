import React, { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    const list = document.querySelector(".list")
    const text = document.querySelector(".lens-text")
    const textList = ["CSS", "Javascript", "ReactJs", "Html"]
    let index = 0
    const timer = setInterval(() => {
      if (index === 3) {
        index = 0
      }
      list.innerHTML = textList[index]
      text.innerHTML = textList[index]
      index++
    }, 4000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <main className="main-content home">
      <div>
        <h1 className="home__heading">Khoi Nguyen</h1>
      </div>
      <section className="creative-section">
        <h2 className="creative-section__heading">Technical Skills</h2>
        <div className="list-container">
          <p className="list">Html</p>
          <div className="list-lens">
            <p className="lens-text">Html</p>
          </div>
        </div>
      </section>
      <div>
        <button className="button home-btn">Get in Touch</button>
      </div>
    </main>
  )
}

export default Home
