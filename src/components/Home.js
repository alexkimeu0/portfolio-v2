import React from "react";

import "./Home.css";

class Home extends React.Component {
  state = {
    name: "Alex Kimeu",
    photo:
      "https://pbs.twimg.com/profile_images/1278987379060195328/XAP8TklK_400x400.jpg",
    intro:
      "I am a Full-Stack Web Developer working mostly with the MERN Stack. I have experience in REST APIs and Git version control. I also possess working experience in Django and Laravel Frameworks as well as MySQL Database.",
    hobbies: "playing or watching football",
    tag: "In love with JavaScript. !mutual feeling-:)",
  };
  render() {
    const { name, photo, intro, hobbies, tag } = this.state;
    return (
      <div className="content">
        <div className="profile">
          <img src={photo} alt="Alex Kimeu" />
          <h4 className="name">{name}</h4>
          <p>{tag}</p>
        </div>

        <div className="intro">
          <h2 className="salut">Hello World!</h2>
          <h3 className="name">I'm {name}</h3>
          <p className="intro-text">{intro}</p>
          <p className="hobbies">
            When not coding, I am either {hobbies}. It's the only thing I grew
            up doing.
          </p>

          <div className="social">
            <p>Find me online:</p>

            <div className="social-icons">
              <a href="">
                <i className="fab fa-github fa-3x"></i>{" "}
              </a>
              <a href="">
                <i className="fab fa-twitter fa-3x"></i>{" "}
              </a>
              <a href="">
                <i className="fab fa-linkedin fa-3x"></i>{" "}
              </a>
              <a href="">
                <i className="fab fa-medium fa-3x"></i>{" "}
              </a>
              <a href="">
                <i className="fab fa-reddit fa-3x"></i>{" "}
              </a>
              <a href="">
                <i className="fab fa-discord fa-3x"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
