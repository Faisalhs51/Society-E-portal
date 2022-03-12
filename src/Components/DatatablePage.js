import React, {useState, useEffect} from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {

    const [row, setRow] = useState([{}]);
    // let noticeRows, noticeRows1;
    // let not;
    const notice = async () =>{
        const res = await fetch('/api/notice');
        let data = await res.json();
        let a = [];
        
        // console.log(data);
        for(let j of data){
            var {date, title, description} = j;
            a.push({date, title, description});
        }
        
        setRow(a);
        // console.log(a);
        // not = await res.json()
        // console.log("faisal")
        // console.log(not)
        // noticeRows = not.map(e =>{
        //     (({ date, title, description }) => ({ date, title, description }))(e)
        // })
        // console.log(noticeRows);
    }
    // console.log(row);
    
    useEffect(()=>{
        notice()
    }, []);
    // notice();
    // noticeRows = await noticeRows1.then(res => res.data);
    // const { foo, bar }  = await iAmAPromise.then(result => result.data);
    // .then(json => {noticeRows = json;});
    // console.log(not)
    // console.log("222")
    
    // console.log(a);
    // console.log("faisal is here");
    // console.log(noticeRows1)
    // const noticeRows = notice().then(j => not = j);
    // console.log(not)
    // // notice();
    // console.log(noticeRows);
    // const noticeRows1 = (({ date, title, description }) => ({ date, title, description }))(noticeRows)
    // console.log(noticeRows1)
    // const not = notice();
    // console.log(not);
    // noticeRows.map((e)=>{
    //     date = e.date,
    //     title = e.title,
    //     description = e.description
    // })
    const data1 = {
        columns: [
            {
                label: 'Notice Date',
                field: 'date',
                sort: 'asc',
                width: 100
              },
          {
            label: 'Notice Title',
            field: 'title',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Notice Discription',
            field: 'description',
            sort: 'asc',
            width: 200
          }
        ],
        rows: row
    }
  const data = {
    columns: [
        {
            label: 'Notice Date',
            field: 'date',
            sort: 'asc',
            width: 100
          },
      {
        label: 'Notice Title',
        field: 'title',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Notice Discription',
        field: 'disc',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'20/09/2021',
            title: 'Water Problem',
            disc:'Nana Patil is facing issue related to Water Problem,SO kindly Attend the meeting at 8pm in ClubHouse'

        },
        {
            date:'07/07/2021',
            title: 'Green Revolution',
            disc:'Nana Patil Pride has organised a tree plantation program'

        },
        {
            date:'25/09/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
{
            date:'27/09/2020',
            title: 'Thought of the Day',
            disc: 'You have to be at your strongest,when you are feeling you are at your weakest.'
},
{
            date:'27/09/2021',
            title: 'Meeting Notice',
            disc: 'In Todays Monthly meetingg we have decided to improve the security using technology. We Request all Family guardians to attend the meet . Have a Great day.'


        },
{
            date:'28/09/2021',
            title: 'Water Cutoff ',
            disc: 'On 21st September their will be no Water supply in our society due to some maintainance reasons.'
},



{
            date:'29/09/2021',
            title: 'No Yoga Class',
            disc:' There will be no Yoga classes on this upcoming Sunday.'

        },
{
            date:'11/10/2021',
            title: 'Maintainance Notice',
            disc:'Month End is near, we request you to Pay the necessary Maintainance for all the facilities'
},

{
            date:'05/10/2021',
            title: 'Gym Closed',
           disc: 'Gym will closed for this week from 22nd October to 28Th October for some Maintainance reasons.'
},
{
            date:'09/10/2021',
            title: 'Kids Quiz Competition',
            disc:' There will be a Small kids quiz Competitions on this upcoming Saturday.'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        },
        {
            date:'27/03/2021',
            title: 'Birthday Celebration',
            disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        }
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // },
        // {
        //     date:'27/03/2021',
        //     title: 'Birthday Celebration',
        //     disc:'Nana Patil Banquet will held a Birthday celebration,it will start from 7.30 in evening,Cakecutting Ceremony and Dinner is arranged for all'

        // }
    ]
  };

  return (
      <>
      <br />
      <div className="ntctbldiv">
      
      <h1 className="ntcbrd">Notice Board</h1>
      <p className="ntcbrd">All the Notice related to Nana Patil Pride Society will be Available here</p>
    <MDBDataTable
      striped
      bordered
      small
      data={data1}
    />
    </div>
    </>
  );
}

export default DatatablePage;