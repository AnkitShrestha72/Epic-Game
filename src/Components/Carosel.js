import React from 'react'


const Carosel = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets1.ignimgs.com/2018/10/25/rdr2-1280-1540463019272_160w.jpg?width=1280" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.wired.com/photos/639bf35a24c352e627eccc43/master/pass/Ragnaro%CC%88k-culture-ar1qdh.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://imageio.forbes.com/specials-images/imageserve/63630cb3545de5ad4827c5a2/GOWR-Preview-Screenshot-04/960x0.jpg?format=jpg&width=960" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carosel
