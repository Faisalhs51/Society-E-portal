import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox1.css";

import d1 from './EventImages/diwali1.jpg'
import d2 from './EventImages/diwali2.jpg'
import d3 from './EventImages/diwali3.jpg'
import d4 from './EventImages/diwali4.jpg'
import d5 from './EventImages/diwali5.jpg'
import d6 from './EventImages/diwali6.jpg'
import d7 from './EventImages/diwali7.jpg'
import d8 from './EventImages/diwali8.jpg'
import d9 from './EventImages/diwali9.jpg'



class Diwalievent extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    d6,
    d5,
    d1,
    d2,
    d3,
    d4,
    d7,
    d9,
    d8
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

export default Diwalievent;