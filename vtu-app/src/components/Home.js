import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    return ( 
        <div className="App">
        <div className="home banner-bg text-center text-color p-4 mb-3">
            <h1>Wellcome To Aliyu Data_Sub</h1>
            <p>Don't Ever Run Out Of Data & Airtime</p>
        </div>
        <section className="body">
            <div className="container-lg">
              <div className="row justify-content-center align-items-center py-lg-5">
              <div className="col-md-5 text-center py-lg-5 mt-3 ">
                <img className='image' src={require('../img/person.jfif')} alt="Images missed"/>
                </div>
                <div className="col-md-5 text-center text-md-start mb-3 py-sm-5">
                  <h1>
                    <div className="text-color1 fw-bold mt-3">Start Business</div>
                    <div className="text-color2 mt-2">Get cheap data And Airtime By Using Our App</div>
                  </h1>
                  <Link to="/Account" className="btn btn-primary btn-style mt-4">Get Started</Link>
                </div>
              </div>
            </div>
        </section>
      </div>  
     );
}
 
export default Home;