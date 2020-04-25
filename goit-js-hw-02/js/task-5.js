const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();
  const spamWord = ["spam", "sale"];

  for (let i = 0; i < spamWord.length; i += 1) {
    if ((message = normalizedMessage.includes(spamWord[i]))) {
      return true;
    }
  }
  return false;
};

/* console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true */
