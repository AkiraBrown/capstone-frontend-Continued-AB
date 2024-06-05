import couch from "../../../assets/couch.png";
import calendar from "../../../assets/calender.png";
import giftPhone from "../../../assets/gift-phone.png";

function HomePage() {
  return (
    <main>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={giftPhone}
              width={700}
              height={500}
              alt="couch"
              className="d-block mx-lg-auto img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Where heartfelt gifting meets perfect harmony.
            </h1>
            <p className="lead">
              An app designed to keep you on top of your loved ones upcoming
              birthdays, where you can effortlessly select the perfect gift.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button className="btn btn-primary btn-lg px-4 me-md-2">
                Sign Me Up!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={calendar}
              width={700}
              height={500}
              alt="calendar"
              className="d-block mx-lg-auto img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <p className="lead">
              {
                "Never miss your loved one's special day. Easily keep track of upcoming birthdays and pick out the perfect gift hassle-free."
              }
            </p>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={couch}
              width={700}
              height={500}
              alt="calendar"
              className="d-block mx-lg-auto img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <p className="lead">
              {
                "No more unwanted gifts that keep piling up. Giftune relieves the tension within families and relationships."
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
