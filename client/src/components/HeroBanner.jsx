const HeroBanner = () => {
  return (
    <section class="hero-banner position-relative padding-vertical pb-lg-0">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-6 content text-lg-start text-center order-lg-1 order-2">
            <div class="inner-box-left">
              <h1 class="m-0">
                <span>Studying</span> Online is now much easier
              </h1>
              <p class="m-0 mx-lg-0 mx-auto">
                Skilline is an interesting platform that will teach you in more
                an interactive way
              </p>
              <div class="hero-banner-btn d-flex align-items-center justify-content-lg-start justify-content-center">
                <a href="/signin" class="btn theme-button">
                  Join for free
                </a>
                <a
                  href="javascript:"
                  class="play-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#heromodal"
                  title="Click To Play"
                >
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 image order-lg-2 order-1">
            <div class="inner-box-right position-relative">
              <img
                src="hero_banner_girl.png"
                class="mx-auto d-block main-image"
                alt="hero_banner_girl"
              />
              {/* <div class="calender assist position-absolute justify-content-center align-items-center">
                <span class="icon">
                  <img src="assets/images/calendar.svg" alt="calendar" />
                </span>
                <div class="title d-inline-block">
                  <h5 class="m-0 secondary-color">250k</h5>
                  <p class="m-0">Assisted Student</p>
                </div>
              </div>
              <div class="calender mail position-absolute justify-content-center align-items-center">
                <div class="inner-box d-flex align-items-center position-relative">
                  <span class="icon">
                    <img src="assets/images/email.svg" alt="email" />
                  </span>
                  <div class="title d-inline-block">
                    <h5 class="m-0 secondary-color">Congratulations</h5>
                    <p class="m-0">Your admission completed</p>
                  </div>
                  <img
                    src="assets/images/check.svg"
                    class="position-absolute check"
                    alt="check"
                  />
                </div>
              </div>
              <div class="calender user position-absolute justify-content-center align-items-center">
                <span class="icon">
                  <img
                    src="assets/images/profile.jpg"
                    class="p-0"
                    alt="profile"
                  />
                </span>
                <div class="title d-inline-block">
                  <h5 class="m-0 secondary-color">User Experience Class</h5>
                  <p class="m-0">Today at 12.00 PM</p>
                  <a href="#" class="theme-button">
                    Join Now
                  </a>
                </div>
              </div> 
              <div class="vertical-bar position-absolute justify-content-center align-items-center">
                <img src="assets/images/vertical-bar.svg" alt="vertical-bar" />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
