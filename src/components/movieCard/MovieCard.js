import React from "react";
import "./movieCard.css";
import ReactStars from "react-rating-stars-component";

function MovieCard({ el }) {
  return (
    <div>

      <div>
        <div className="wrapper">
          <div className="card">
            <img src={el.posterURL} />
            <div className="descriptions">
              <h1 style={{fontSize:"30px"}}>{el.title}</h1>
              <p style={{fontSize:"15px"}}>{el.description}</p>
              <ReactStars
                count={10}
                value={el.rating}
                size={20}
                edit={false}
                activeColor="#ffd700"
              />
              <button>
                <i className="fab fa-youtube" />
                Play trailer on YouTube
              </button>
            </div>
          </div>
        </div>
        <footer>
          <p>
            Created <i className="fa fa-heart" /> by
            <a target="_blank" href="https://codepen.io/ahmadbassamemran/">
              khaldi Ghada
            </a>
            Follow me :
            <a
              target="_blank"
              href="https://www.instagram.com/ahmadbassamemran/"
            >
              <i className="fab fa-instagram" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ahmademarn/">
              <i className="fab fa-linkedin" />
            </a>
            <a target="_blank" href="https://codepen.io/ahmadbassamemran/">
              <i className="fab fa-codepen" />
            </a>
            <a target="_blank" href="https://dev.to/ahmadbassamemran">
              <i className="fab fa-dev" />
            </a>
            <a target="_blank" href="https://twitter.com/ahmadbassamemra">
              <i className="fab fa-twitter-square" />
            </a>
          </p>
        </footer>
        <div className="youtubeBtn"></div>
      </div>
    </div>
  );
}

export default MovieCard;
