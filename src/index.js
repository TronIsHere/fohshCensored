
/**
* gets a text and decides if it has a swear word in it or not
* @param {String} text input
*/
function fohshCensored(text) {
  let swearWords = [
    "کیر",
    "کص",
    "بیشعور ",
    "کثافت",
    "اشغال",
    "پدر سگ",
    "مادر سگ",
    "سگ پدر",
    "توله سگ",
    "عقده ای",
    "مادر قحبه",
    "مادر جند",
    "کس",
    "آشغال",
    "بی پدر",
    "کصد",
    "جند",
    "جنده",
    "کصکش",
    "کصه",
    "کون",
  ];
  //at the last step we check if swearItem is false or true and return it based on that
  let swearItem = false;
  for (item of swearWords) {
    if (text.search(item) >= 0) {
      swearItem = true;
    }
  }
  if (swearItem) {
    return true;
  } else {
    return false;
  }
}
module.exports = fohshCensored;
