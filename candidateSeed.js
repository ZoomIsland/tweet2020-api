const db = require('./models/index');

const candidates = [
  {
    twitter_id: "25073877",
    username: "realDonaldTrump",
    full_name: "Donald J. Trump",
    user_img: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"
  },
  {
    twitter_id: "939091",
    username: "JoeBiden",
    full_name: "Joe Biden",
    user_img: "https://pbs.twimg.com/profile_images/1276548577058344960/hHLf-P8l_normal.jpg"
  },
  {
    twitter_id: "1176367702543413248",
    username: "Jorgensen4POTUS",
    full_name: "Jo Jorgensen",
    user_img: "https://pbs.twimg.com/profile_images/1264409958910656514/XLuBskd5_normal.jpg"
  },
  {
    twitter_id: "142234626",
    username: "HowieHawkins",
    full_name: "Howie Hawkins",
    user_img: "https://pbs.twimg.com/profile_images/1257558597308780544/wuEwH3f-_normal.jpg"
  }
]

for(candidate of candidates) {
  db.Candidate.create(candidate, (err, newCandidate) => {
    if (err) console.log("Candidate Creation Error: ", err);
    console.log(newCandidate);
  })
}