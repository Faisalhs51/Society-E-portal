import React from 'react';
import {
  MDBContainer,
  Container,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCard,
  MDBIcon
} from 'mdbreact';


import awd1 from '../Images/awd1.jpg'
import awd2 from '../Images/awd2.jpg'
import awd3 from '../Images/awd3.jpg'





const Awardachv1 = () => {
  return (
    <MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h1-responsive font-weight-bold my-5'>Awards and Achivements</h2>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className='no-flex'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <Container>
                <MDBCard id="awardimgcontainer" className='mx-auto mb-4'>
                  <img
                    src={awd1}
                    className='img-fluid'
                    alt=''
                    id="awardimg11"
                  />
                </MDBCard>
                <p>
                  <MDBIcon icon='quote-left' /> The Management system of housing society appreciates the initiatives established at Nanapatil Housing society. United Way Mumbai (UWM) has expertise in the field of cleanliness and water resource and waste management and is currently the evaluator in the Swachh Society Awards, assessing good practices among housing societies across various parameters.
               </p>
                <h4 className='font-weight-bold'>Best Management System Award</h4>
                <h6 className='font-weight-bold my-3'>20th July 2017</h6>
                
              </Container>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <Container>
                <MDBCard id="awardimgcontainer" className='mx-auto mb-4'>
                  <img
                    src={awd3}
                    className='img-fluid'
                    alt=''
                    id="awardimg11"
                  />
                </MDBCard>
                <p>
                  <MDBIcon icon='quote-left' />_Celebrating festivals causing minimum damage to the environment, having their own compost pits, bringing school children on a tour to the society and guiding them on eco-friendly initiatives were among the many steps taken by three housing societies in the city that were honoured by the Nanapatil Housing Society on Sunday under its 'swachh mission'.
                </p>
                <h4 className='font-weight-bold'>Good initiative to celebrate festives by Nanapatil housing Society</h4>
                <h6 className='font-weight-bold my-3'>
                19 Feb 2019 - Times of India
                </h6>
                
              </Container>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <Container>
                <MDBCard id="awardimgcontainer" className='mx-auto mb-4'>
                  <img
                    src={awd2}
                    className='img-fluid'
                    alt=''
                    id="awardimg11"
                  />
                </MDBCard>
                <p>
                  <MDBIcon icon='quote-left' /> The good old society notice board on the ground floor, informing the residents about the Sunday meeting' or the '12-hour water cut in wings A and B', may soon be a thing of the past with housing societies going online to manage their day-to-day affairs.
                </p>
                <h4 className='font-weight-bold'>Housing societies in city go online to manage affairs</h4>
                <h6 className='font-weight-bold my-3'>
                30 March 2020 
                </h6>
                
              </Container>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default Awardachv1;