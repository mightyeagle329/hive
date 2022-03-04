import React from "react";
import "./Home.css";
import Head from "../../components/Navbar/navbar";
import youtube from "../../assests/images/youtube.png";
import instagram from "../../assests/images/instagram.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [youtube, instagram],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 6000);
  }

  render() {
    return (
      <div className="home">
        <Head />
        <div className="main">
          <div className="main-text">
            <h1>hive</h1>
            <h1>Your one stop solution to all your social media handles</h1>
          </div>
          <div className="main-img">
            <div className="img">
              <img
                src={this.state.images[this.state.currentImage]}
                alt="youtube"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
