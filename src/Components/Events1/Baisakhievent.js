import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox1.css";

import h1 from './EventImages/h11.jpg'
import h2 from './EventImages/h22.png'
import h3 from './EventImages/h33.jpg'
import h4 from './EventImages/h44.jpg'
import h5 from './EventImages/h55.jpg'
import h6 from './EventImages/h66.jpg'
import h7 from './EventImages/h77.jpg'
import h8 from './EventImages/h88.jpg'
import h9 from './EventImages/h99.jpg'

class Baisakhievent extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    h2,
    h1,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default Baisakhievent;