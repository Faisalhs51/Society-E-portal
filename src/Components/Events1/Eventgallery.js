import React from 'react'
import Eidevent from './Eidevent.js'
import Independenceevent from './Independenceevent.js'
import Diwalievent from './Diwalievent.js'
import Christmasevent from './Christmasevent.js'
import Baisakhievent from './Baisakhievent.js'

const Eventgallery = () => {
  return (
    <>
    <div>
      <br />
      <h3 id="eventtitle"><strong>Eid</strong></h3>
      <h5 id="eventdesc" className="indigo-text h5">We Wish u a very Happy Eid Mubarak May this Eid bring a lot of joy, Happiness, Blessings. Stay Blessed!Stay Safe!!!</h5>
      <Eidevent/>
    </div>
    <div>
      <br /><br />
      <h3 id="eventtitle"> <strong> Independence Day</strong></h3>
      <h5 id="eventdesc" className="indigo-text h5">Our Society Wishes u a very Happy Independence Day.As the Indian citizens, we should not consider this day for only hoisting the flag and distributing sweets.
</h5>
      <Independenceevent/>
    </div>
    <div>
      <br /><br />
      <h3 id="eventtitle"><strong>Diwali</strong></h3>
      <h5 id="eventdesc" className="indigo-text h5">A very very happy dipawali and New prosperous year. May you and your family be blessed with abundance of health,wealth and prosperity now and always.</h5>
      <Diwalievent/>
    </div>
    <div>
      <br /><br />
      <h3 id="eventtitle"><strong>Christmas</strong></h3>
      <h5 id="eventdesc" className="indigo-text h5">We Wish you Merry Christmas and a Happy New year! Merry Christmas to your Family. wishing you a delightful Christmas.</h5>
      <Christmasevent/>
    </div>
    <div>
      <br /><br />
      <h3 id="eventtitle"><strong>Holi</strong></h3>
      <h5 id="eventdesc" className="indigo-text h5">Wishing You all a Very blessed Holi this year. Have a fantastic and colourful Holi this year.</h5>
      <Baisakhievent/>
    </div>
    <br /><br />
    </>
  )
}

export default Eventgallery
