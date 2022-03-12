import React from 'react'
import JumbotronPage2 from './JumbotronPage2.js'
import parkingimg from '../Images/parking111.jpg'
import gymimg from '../Images/gym111.jpg'
import poolimg from '../Images/pool111.jpg'
import yogaimg from '../Images/yoga111.jpg'
import parkimg from '../Images/park111.jpg'

const Facilities = () => {
    return (
        <div>
            <JumbotronPage2 title="GYM"
            imgg={gymimg}
            desc="Our society offers gymnastics facilities to its members. The gym here has all the modern equipment for workout and also has cycling studio, weight lifting and cardio area."/>

            <JumbotronPage2 title="PARKING"
            imgg={parkingimg}
            desc="This property system utilizes the underground space of buildings. A lot of
            safety devices such as sensors, stoppers are available for protecting from any accidents.
            Password blocked IC cards are available for the system operations."/>

            <JumbotronPage2 title="SWIMMING POOL"
            imgg={poolimg}
            desc="Pools are often the gathering spot for friends and family and for everyone to
            have a seat and stay cool. One of the great features of our mini pool, it has abundant
            seating areas like large benches or wrap around seating."/>

            <JumbotronPage2 title="PLAYGROUND & PARK"
            imgg={parkimg}
            desc="Ornamental plantation is done on the ground to cover the unused, empty open
            areas of society garden. One is not supprted to step on the ground cover plantations. Plants
            that require least maintenance are selected for ground covers. Eg. Weddelia, Ribbon grass."/>

            <JumbotronPage2 title="YOGA CENTER"
            imgg={yogaimg}
            desc="Having a problem in inhaling,Walking,headache etc Here our society introduces u a very good solution for this.Yoga , we help you to increase your power and concentration.We do Care for your health for Adults as well as for the Senior citizens"/>

        </div>
    )
}

export default Facilities
