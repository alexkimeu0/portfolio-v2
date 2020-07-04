import React from "react";

import "./Home.css";

class Home extends React.Component {
  state = {
    name: "Alex Kimeu",
    photo:
      "https://pbs.twimg.com/profile_images/1278987379060195328/XAP8TklK_400x400.jpg",
    intro: "Full-Stack Web Developer",
    tag: "In love with JavaScript. !mutual feeling-:)",
  };
  render() {
    const { name, photo, intro, tag } = this.state;
    return (
      <div className="content">
        <div className="profile">
          <img src={photo} alt="Alex Kimeu" />
          <h4 className="name">{name}</h4>
          <p className="tag">{tag}</p>
        </div>

        <div className="intro">
          <h2 className="salut">Hello!</h2>
          <h1 className="name">
            I'm <span>{name}</span>
          </h1>
          <h2 className="intro-text">{intro}</h2>
          <div className="contact">
            <a href="mailto:kimeualexis@gmail.com" className="btn">
              <i className="fas fa-paper-plane"></i>&nbsp;Email
            </a>
            <a href="!#" className="btn">
              <i className="fas fa-file-pdf"></i>&nbsp;Resume
            </a>
          </div>

          <div className="social">
            <p>Find me online:</p>

            <div className="social-icons">
              <a href="https://github.com/alexkimeu0" target="_blank">
                <i className="fab fa-github fa-3x"></i>{" "}
              </a>
              <a href="https://twitter.com/alexkimeu0" target="_blank">
                <i className="fab fa-twitter fa-3x"></i>{" "}
              </a>
              <a href="https://www.linkedin.com/in/alexkimeu0/" target="_blank">
                <i className="fab fa-linkedin fa-3x"></i>{" "}
              </a>
              <a href="https://medium.com/@alexkimeu0" target="_blank">
                <i className="fab fa-medium fa-3x"></i>{" "}
              </a>
              <a href="https://www.reddit.com/user/alexkimeu0/" target="_blank">
                <i className="fab fa-reddit fa-3x"></i>{" "}
              </a>
              <a href="!#" target="_blank">
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
