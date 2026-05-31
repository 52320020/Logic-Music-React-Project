import logic from "../assets/logic.jpg";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${logic})`
        }}
      >
        <h1>LOGIC</h1>
        <p>Rapper • Producer • Visionary</p>
      </section>
      <div className="container mt-5">
        <h2 className="text-center mb-5">
          Featured Songs
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="song-card text-center">
              <h4>Homicide</h4>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="song-card text-center">
              <h4>44 More</h4>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="song-card text-center">
              <h4>Gang Related</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;