import { Link } from 'react-router-dom';
import '../App.css';

const Loginform = () => {
    return ( 
        <>
        <div className="home banner-bg text-center text-color p-4 mb-5 p-4">
          <h1>Log In Details</h1>
        </div>
            <div className="container-lg">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-4 col-sm-4 m-3 p-3">
                    <form action="" className="shadow p-2 rounded">
                    <label htmlFor="Email" className="form-label mb-2">Email:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="email" className="form-control" placeholder="e.g aliyu@gmail.com"/>
                    </div>

                    <label htmlFor="Password" className="form-label mb-2">Password:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock2-fill" viewBox="0 0 16 16">
                        <path d="M7 6a1 1 0 0 1 2 0v1H7z"/>
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0"/>
                        </svg></span>
                        <input type="password" className="form-control" placeholder="****"/>
                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                        </svg></span>
                    </div>

                    </form>
                    <Link to="/Account" className="btn btn-primary btn-style mt-3 ">Log in</Link>
                    <div className="info mt-3">
                        <p>No Acount..? <Link to="/Account">Create One</Link></p>
                    </div>

                </div>
            </div>
        </div>
       
      </> 
     );
}
 
export default Loginform;