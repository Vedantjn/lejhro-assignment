import React from 'react';
import heroImage from '../assets/hero.webp'; // Import the hero image

const Hero = () => {
  return (
    <div className="col-xl-10 col-xxl-8 px-2 py-5 position-relative" style={{ backgroundColor: '#dd3b30', width: '100%' }}>
      <div className="row align-items-center g-lg-5 " style={{ minHeight: '40rem' }}>
        <div className="col-lg-5 d-flex flex-column" style={{ marginLeft: '300px', marginRight: '300px' }}>
          <div style={{ width: '100%' }}>
            <h1 className="display-4 lh-3 text-white mb-5" style={{fontSize: '3.5rem'}}>Industry's #1 Online Bootcamp</h1>
            <img src={heroImage} alt="Hero" className="img-fluid w-auto" style={{ width: '700px', height: '300px' }} />
          </div>
          <button className="btn btn-primary mt-3" style={{ width: '180px', backgroundColor: '#dd3b30', color: 'white', border: '2px solid white' }}>Explore</button>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" style={{ flex: '1', backgroundColor: 'white', color: 'black', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', margin: '0' }}>
              <div>72%</div>
              <div>Avg. CTC Hike</div>
            </button>
            <button className="btn btn-secondary" style={{ flex: '1', backgroundColor: 'white', color: 'black', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', margin: '0' }}>
              <div>Top 1%</div>
              <div>Industry Instructors</div>
            </button>
            <button className="btn btn-secondary" style={{ flex: '1', backgroundColor: 'white', color: 'black', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', margin: '0' }}>
              <div>2,00,000+</div>
              <div>Career Transitions</div>
            </button>
          </div>
        </div>
        <div className="col-lg-7" style={{ maxWidth: '500px', marginLeft: '15px', marginRight: '15px' }}>
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" style={{ height: 'calc(100% + 100px)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="h4 text-black mb-4 d-flex justify-content-center">Book a FREE Live Class!</h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                  <label htmlFor="firstName">First Name *</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                  <label htmlFor="lastName">Last Name *</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Phone Number" required />
                  <label htmlFor="phoneNumber">Phone Number *</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                  <label htmlFor="email">Email *</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="yearsOfExperience" placeholder="Years of Experience" required />
              <label htmlFor="yearsOfExperience">Years of Experience *</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary btn-hover" type="submit" style={{ backgroundColor: '#D2962C', borderColor: '#D2962C' }}>Continue Booking Live Class</button>
              <p className="text-center mt-2" style={{ color: 'red', margin: '5px 0' }}><i className="fas fa-exclamation-circle me-2"></i>Limited seats left</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
