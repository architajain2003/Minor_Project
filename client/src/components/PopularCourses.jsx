const PopularCourses = () => {
  return (
    <section
      class="section course"
      id="courses"
      aria-label="course"
      //   style="background-image: url('./assets/images/course-bg.jpg')"
    >
      <div class="container">
        <p class="section-subtitle">Popular Courses</p>

        <h2 class="h2 section-title">Our Popular Courses</h2>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <div class="course-card">
                <figure class="card-banner">
                  <img
                    src="course-1.jpg"
                    width="370"
                    height="270"
                    loading="lazy"
                    alt="Competitive Strategy law for all students"
                    class="img-cover"
                  />
                </figure>

                <div class="card-actions">
                  <span class="badge">Intermediate</span>

                  <button
                    class="whishlist-btn"
                    aria-label="Add to whishlist"
                    data-whish-btn=""
                  >
                    <ion-icon
                      name="heart"
                      role="img"
                      class="md hydrated"
                      aria-label="heart"
                    ></ion-icon>
                  </button>
                </div>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <ion-icon
                        name="reader-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">35 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">
                        18h 15m 44s
                      </time>
                    </li>
                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">
                      Competitive Strategy law for all students
                    </a>
                  </h3>

                  <div class="rating-wrapper">
                    <div class="rating">
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>
                  </div>

                  <div class="card-footer">
                    <div class="card-price">
                      <span class="span">$29.00</span>

                      <del class="del">$39.00</del>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon
                        name="people-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">47 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="course-card">
                <figure class="card-banner">
                  <img
                    src="course-2.jpg"
                    width="370"
                    height="270"
                    loading="lazy"
                    alt="Machine Learning A-Z: Hands-On Python and java"
                    class="img-cover"
                  />
                </figure>

                <div class="card-actions">
                  <span class="badge">Advanced</span>

                  <button
                    class="whishlist-btn"
                    aria-label="Add to whishlist"
                    data-whish-btn=""
                  >
                    <ion-icon
                      name="heart"
                      role="img"
                      class="md hydrated"
                      aria-label="heart"
                    ></ion-icon>
                  </button>
                </div>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <ion-icon
                        name="reader-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">48 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">
                        18h 15m 44s
                      </time>
                    </li>
                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">
                      Machine Learning A-Z: Hands-On Python and java
                    </a>
                  </h3>

                  <div class="rating-wrapper">
                    <div class="rating">
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>
                  </div>

                  <div class="card-footer">
                    <div class="card-price">
                      <span class="span">Free</span>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon
                        name="people-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">65 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="course-card">
                <figure class="card-banner">
                  <img
                    src="course-3.jpg"
                    width="370"
                    height="270"
                    loading="lazy"
                    alt="Achieving Advanced in Insights with Big"
                    class="img-cover"
                  />
                </figure>

                <div class="card-actions">
                  <span class="badge">Basic</span>

                  <button
                    class="whishlist-btn"
                    aria-label="Add to whishlist"
                    data-whish-btn=""
                  >
                    <ion-icon
                      name="heart"
                      role="img"
                      class="md hydrated"
                      aria-label="heart"
                    ></ion-icon>
                  </button>
                </div>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <ion-icon
                        name="reader-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">80 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">
                        18h 15m 44s
                      </time>
                    </li>
                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">
                      Achieving Advanced in Insights with Big
                    </a>
                  </h3>

                  <div class="rating-wrapper">
                    <div class="rating">
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>
                  </div>

                  <div class="card-footer">
                    <div class="card-price">
                      <span class="span">$59.00</span>

                      <del class="del">$69.00</del>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon
                        name="people-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">42 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="course-card">
                <figure class="card-banner">
                  <img
                    src="course-4.jpg"
                    width="370"
                    height="270"
                    loading="lazy"
                    alt="Education Makes A Person A Responsible Citizen"
                    class="img-cover"
                  />
                </figure>

                <div class="card-actions">
                  <span class="badge">Intermediate</span>

                  <button
                    class="whishlist-btn"
                    aria-label="Add to whishlist"
                    data-whish-btn=""
                  >
                    <ion-icon
                      name="heart"
                      role="img"
                      class="md hydrated"
                      aria-label="heart"
                    ></ion-icon>
                  </button>
                </div>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <ion-icon
                        name="reader-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">31 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">
                        18h 15m 44s
                      </time>
                    </li>
                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">
                      Education Makes A Person A Responsible Citizen
                    </a>
                  </h3>

                  <div class="rating-wrapper">
                    <div class="rating">
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>
                  </div>

                  <div class="card-footer">
                    <div class="card-price">
                      <span class="span">$49.00</span>

                      <del class="del">$59.00</del>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon
                        name="people-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">46 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="course-card">
                <figure class="card-banner">
                  <img
                    src="course-5.jpg"
                    width="370"
                    height="270"
                    loading="lazy"
                    alt="Building A Better World One Student At A Time"
                    class="img-cover"
                  />
                </figure>

                <div class="card-actions">
                  <span class="badge">Advanced</span>

                  <button
                    class="whishlist-btn"
                    aria-label="Add to whishlist"
                    data-whish-btn=""
                  >
                    <ion-icon
                      name="heart"
                      role="img"
                      class="md hydrated"
                      aria-label="heart"
                    ></ion-icon>
                  </button>
                </div>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <ion-icon
                        name="reader-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">36 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">
                        18h 15m 44s
                      </time>
                    </li>
                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">
                      Building A Better World One Student At A Time
                    </a>
                  </h3>

                  <div class="rating-wrapper">
                    <div class="rating">
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>
                  </div>

                  <div class="card-footer">
                    <div class="card-price">
                      <span class="span">$29.00</span>

                      <del class="del">$39.00</del>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon
                        name="people-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">91 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="course-card">
                <figure class="card-banner">
                  <img
                    src="course-6.jpg"
                    width="370"
                    height="270"
                    loading="lazy"
                    alt="Education is About Forming Faithful Disciples"
                    class="img-cover"
                  />
                </figure>

                <div class="card-actions">
                  <span class="badge">Basic</span>

                  <button
                    class="whishlist-btn"
                    aria-label="Add to whishlist"
                    data-whish-btn=""
                  >
                    <ion-icon
                      name="heart"
                      role="img"
                      class="md hydrated"
                      aria-label="heart"
                    ></ion-icon>
                  </button>
                </div>

                <div class="card-content">
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                      <ion-icon
                        name="reader-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">21 Lessons</span>
                    </li>

                    <li class="card-meta-item">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <time datetime="PT18H15M44S" class="card-meta-text">
                        18h 15m 44s
                      </time>
                    </li>
                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">
                      Education is About Forming Faithful Disciples
                    </a>
                  </h3>

                  <div class="rating-wrapper">
                    <div class="rating">
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                      <ion-icon
                        name="star"
                        role="img"
                        class="md hydrated"
                        aria-label="star"
                      ></ion-icon>
                    </div>

                    <span class="rating-text">(18 Review)</span>
                  </div>

                  <div class="card-footer">
                    <div class="card-price">
                      <span class="span">$79.00</span>

                      <del class="del">$89.00</del>
                    </div>

                    <div class="card-meta-item">
                      <ion-icon
                        name="people-outline"
                        aria-hidden="true"
                        role="img"
                        class="md hydrated"
                      ></ion-icon>

                      <span class="card-meta-text">22 Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" class="btn btn-primary course-btn">
          <span class="span">View All Courses</span>

          <ion-icon
            name="arrow-forward-outline"
            aria-hidden="true"
            role="img"
            class="md hydrated"
          ></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default PopularCourses;
