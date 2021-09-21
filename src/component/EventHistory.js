import '../App.css';
import img1 from '../image.jpg';
// import img2 from'../src/images/image1.jpg';
import '../card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventHistory() {
  return (
    <><div>
    <h3>My Event History</h3>
</div>    
    <div className='card text-center'>
            <div className='overflow'>
                <img src={img1} alt="Card img" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">100m Race</h4>
                <p className="card-text text-secondary">
                    Venue: Abhi's house
                </p>
                <p>Time:5:30pm Date:01/11/2021</p>
            </div>
        </div></>
  );
}

export default EventHistory;
