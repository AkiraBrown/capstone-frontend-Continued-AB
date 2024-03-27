import { Link } from "react-router-dom";
import profile_img from "../../../../Assets/profile-img-yellow.png";
import {
  calculateZodiacSign,
  upcomingDateCalc,
} from "../../../common/Zodiac/ZodiacFunctionLib";
function DashboardCard({ indivDate, ind }) {
  const zodiacObj = calculateZodiacSign(indivDate.dobInMili);
  return (
    <div
      className="dashboard__friend"
      key={`${!indivDate.id ? ind : indivDate.id}`}
    >
      <Link className="dashboard__friend__link">
        <div className="dashboard__friend__link__content">
          <div className="dashboard__friend__link__content__left">
            <img
              className="dashboard__friend__link__content__left__image"
              src={profile_img}
              alt="#"
            />
            <span className="dashboard__friend__link__content__left__name">
              {indivDate.user_name}
            </span>
          </div>
          <span className="dashboard__friend__link__content__bDate">
            {upcomingDateCalc(indivDate.dob)}
          </span>
          <p className="dashboard__friend__link__content__bDate__zodiac">
            Zodiac
            {zodiacObj.zodiacSign}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default DashboardCard;
