import { FaSpotify, FaYoutube } from "react-icons/fa";
import BTII from "../assets/BTII.jpg";
import COADM from "../assets/COADM.jpg";
import Everybody from "../assets/Everybody.jpg";
import TITS from "../assets/TITS.jpg";
import UnderPressure from "../assets/UnderPressure.jpg";
import VinylDays from "../assets/VinylDays.PNG";
import YSIV from "../assets/YSIV.jpg";
import NoPressure from "../assets/NoPressure.jpg";
function Music() {
  const songs = [
    {
      title: "44 More",
      image: BTII
    },
    {
      title: "Still Ballin'",
      image: COADM
    },
    {
      title: "1-800-273-8255",
      image: Everybody
    },
    {
      title: "Fade Away",
      image: TITS
    },
    {
      title: "Under Pressure",
      image: UnderPressure
    },
    {
      title: "Therapy Music",
      image: VinylDays
    },
    {
      title: "Homicide",
      image: YSIV
    },
    {
      title: "Perfect",
      image: NoPressure
    }
  ];
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Top Tracks
      </h1>
      <div className="text-center my-5">
        <h2 className="mb-4">
          Official Platforms
        </h2>
        <a
          href="https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L"
          target="_blank"
          rel="noreferrer"
          className="platform-btn spotify"
        >
          <FaSpotify size={30} />
          <span className="ms-2">Spotify</span>
        </a>
        <a
          href="https://www.youtube.com/@Logic"
          target="_blank"
          rel="noreferrer"
          className="platform-btn youtube"
        >
          <FaYoutube size={30} />
          <span className="ms-2">YouTube</span>
        </a>
      </div>
      <div className="row">
        {songs.map((song, index) => (
          <div
            key={index}
            className="col-md-3 col-sm-6 mb-4"
          >
            <div className="song-card text-center">
              <img
                src={song.image}
                alt={song.title}
                className="img-fluid rounded mb-3"
              />
              <h5>{song.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Music;