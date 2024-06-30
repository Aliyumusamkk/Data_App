import '../App.css';

const Registration = () => {
    return ( 
        <>
        <div className="home banner-bg text-center text-color p-4 mb-5">
          <h1>Wellcome To Aliyu Data_Sub</h1>
          <p>Don't Ever Run Out Of Data & Airtime</p>
        </div>
            <div className="container-lg">
                <div className="row justify-content-center">
                    <div className="col-lg-6 shadow mb-2 p-3">
                    <form action="" >
                    <label htmlFor="fullname" className="form-label mb-2">Full Name:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control"/>
                    </div>

                    <label htmlFor="fullname" className="form-label mb-2">User Name:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control"/>
                    </div>

                    <label htmlFor="fullname" className="form-label mb-2">Phone Number:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control"/>
                    </div>

                    <label htmlFor="fullname" className="form-label mb-2">Password:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control"/>
                    </div>

                    <label htmlFor="fullname" className="form-label mb-2">Confirm:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control"/>
                    </div>
                    </form>
                    <a href="/" className="btn btn-primary btn-style mb-4">Create</a>
                </div>
            </div>
        </div>
       
      </>
  
     );
}
 
export default Registration;