import './App.css';
import img1 from'../src/image.jpg';
// import img2 from'../src/images/image1.jpg';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillTrophy } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

function MyEvent() {
    const events = [
        {
            venue:"Abhi's house" , 
            title:"100m Race",
            time:"5:30pm",
            date:"01/11/2021",
            img:img1,
        },
        {
            venue:"Abhi's house" , 
            title:"100m Race",
            time:"5:30pm",
            date:"01/11/2021",
            img:img1,
        },
        {
            venue:"Abhi's house" , 
            title:"100m Race",
            time:"5:30pm",
            date:"01/11/2021",
            img:img1,
        }
    ]
  return (
    <><div>
    <h3>My Events</h3>
    </div>    
    {
        events.map((event,index)=> {
             return (
                        <div className='card text-center' key={index}>
                        <div className='overflow'>
                            <img src={event.img} alt="Card img" className='card-img-top' />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title"><AiFillTrophy/> {event.title} <IoIosPeople/> </h4>
                            <p className="card-text text-secondary">
                                Venue: {event.venue}
                            </p>
                            <p>Time:{event.time} Date:{event.date}</p>
                        </div>
                         </div>
                     )
        })
    }
           
    
</>
        
  );
}

export default MyEvent;
