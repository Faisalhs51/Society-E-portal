import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox1.css";

import c1 from './EventImages/cc1.jpg'
import c2 from './EventImages/cc2.jpg'
import c3 from './EventImages/cc3.jpg'
import c4 from './EventImages/cc4.jpg'
import c5 from './EventImages/cc5.jpg'
import c6 from './EventImages/cc6.jpg'
import c7 from './EventImages/cc7.jpg'
import c8 from './EventImages/cc8.jpg'
import c9 from './EventImages/cc9.png'



class Christmasevent extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    c9,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c1
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

export default Christmasevent;