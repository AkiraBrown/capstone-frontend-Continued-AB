import {
  TbZodiacAquarius,
  TbZodiacPisces,
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
} from "react-icons/tb";

function calculateZodiacSign(dobInMili) {
  let dobDate = new Date(dobInMili);
  const days = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const signs = [
    {
      zodiacName: "Aquarius",
      zodiacSign: <TbZodiacAquarius />,
      zodiacInfo: [
        "Innovative and Unique",
        "Humanitarian and Social Causes",
        "Intellectual Stimulation",
      ],
    },
    {
      zodiacName: "Pisces",
      zodiacSign: <TbZodiacPisces />,
      zodiacInfo: [
        "Creative and Imaginative",
        "Compassionate and Spiritual",
        "Sensitive and Emotional",
      ],
    },
    {
      zodiacName: "Aries",
      zodiacSign: <TbZodiacAries />,
      zodiacInfo: [
        "Adventure-Oriented",
        "Fitness and Activity",
        "Bold and Trendy Items",
      ],
    },
    {
      zodiacName: "Taurus",
      zodiacSign: <TbZodiacTaurus />,
      zodiacInfo: [
        "Luxurious and Comfortable",
        "Practical and Long-lasting",
        "Sensory Pleasures",
      ],
    },
    {
      zodiacName: "Gemini",
      zodiacSign: <TbZodiacGemini />,
      zodiacInfo: [
        "Intellectually Stimulating",
        "Communication and Tech Gadgets",
        "Versatile and Multi-interest Items",
      ],
    },
    {
      zodiacName: "Cancer",
      zodiacSign: <TbZodiacCancer />,
      zodiacInfo: [
        "Sentimental and Personalized",
        " Home and Family-Oriented",
        "Nurturing and Relaxation Gifts",
      ],
    },
    {
      zodiacName: "Leo",
      zodiacSign: <TbZodiacLeo />,
      zodiacInfo: [
        "Regal and Glamorous",
        "Celebration and Entertainment",
        "Personalized and Grand Gestures",
      ],
    },
    {
      zodiacName: "Virgo",
      zodiacSign: <TbZodiacVirgo />,
      zodiacInfo: [
        "Practical and Organized",
        "Health and Wellness",
        "Quality and Attention to Detail",
      ],
    },
    {
      zodiacName: "Libra",
      zodiacSign: <TbZodiacLibra />,
      zodiacInfo: [
        "Harmony and Aesthetics",
        "Social and Relationship-Oriented",
        "Balanced Decision-Making",
      ],
    },
    {
      zodiacName: "Scorpio",
      zodiacSign: <TbZodiacScorpio />,
      zodiacInfo: [
        "Intense and Passionate",
        "Deep Emotional Connections",
        "Mystery and Exploration",
      ],
    },
    {
      zodiacName: "Sagittarius",
      zodiacSign: <TbZodiacSagittarius />,
      zodiacInfo: [
        "Adventure and Exploration",
        "Optimism and Learning",
        "Freedom and Flexibility",
      ],
    },
    {
      zodiacName: "Capricorn",
      zodiacSign: <TbZodiacCapricorn />,
      zodiacInfo: [
        "Ambitious and Practical",
        "Quality and Longevity",
        "Organized and Responsible",
      ],
    },
  ];
  let month = dobDate.getMonth();
  let day = dobDate.getDate();
  // January is 0, December is 11, the smallest start date is the 19th.
  if (month === 0 && day <= 19) {
    month = 11;
  } else if (day < days[month]) {
    month--;
  }
  // signs[month].zodiacSign = { ...signs[month].zodiacSign, key: id };
  return signs[month];
}
function upcomingDateCalc(dob) {
  let currentDate = new Date(Date.now());
  currentDate.setTime(
    currentDate.getTime() + currentDate.getTimezoneOffset() * 60 * 1000
  );
  //changes dob into a date format
  let date = new Date(dob);
  //using the date we just got, calculate the eastside offset
  let upcomingDateESTTimeZoneOffset = date.getTimezoneOffset() * 60 * 1000;
  let upcomingDateWithCurrentYear = new Date(
    date.setFullYear(currentDate.getFullYear())
  );
  let oneMiliBeforeTwentyFourHrs = 86399999; // The amount of millisconds in a day -1

  //calculates the difference between the dob in milliseconds to the currentdate
  let upcomingDateDiff =
    upcomingDateWithCurrentYear.setTime(
      upcomingDateWithCurrentYear.getTime() +
        oneMiliBeforeTwentyFourHrs +
        upcomingDateESTTimeZoneOffset
    ) - currentDate;

  //runs a check if the difference between the current date and dob is greater than 0
  if (upcomingDateDiff > 0) {
    return upcomingDateWithCurrentYear;
  } else {
    let upcomingDateWithNextYear = new Date(
      date.setFullYear(currentDate.getFullYear() + 1)
    );
    upcomingDateWithNextYear.setTime(
      upcomingDateWithNextYear.getTime() +
        oneMiliBeforeTwentyFourHrs +
        upcomingDateESTTimeZoneOffset
    );
    return upcomingDateWithNextYear;
  }
}

export { calculateZodiacSign, upcomingDateCalc };
