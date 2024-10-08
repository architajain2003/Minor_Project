const FeatureClass = () => {
  return (
    <section id="Class" class="physical-classroom padding-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 content pt-md-0 pt-4 order-md-1 order-2">
            <div class="inner-box text-sm-start text-center">
              <h3 class="m-0 secondary-color">
                Everything you can do in a physical classroom,{" "}
                <span>you can do with Skilline</span>
              </h3>
              <p class="m-0">
                Skilline’s school management software helps traditional and
                online schools manage scheduling, attendance, payments and
                virtual classrooms all in one secure cloud-based system.
              </p>
              <a href="/learn" class="theme-button btn">
                Learn More
              </a>
            </div>
          </div>
          <div class="col-md-6 image order-md-2 order-1">
            <div class="inner-box position-relative d-flex align-items-center justify-content-center">
              <img
                src="classroom.png"
                class="w-100 n"
                alt="physical-classroom"
                title="Everything you can do in a physical classroom"
              />
              <div
                class="play-video d-flex justify-content-center position-absolute"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                title="Click To Play"
              >
                <a href="javascript:">
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureClass;
