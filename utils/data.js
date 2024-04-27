const usernames = [
    'alexander_wilson',
    'courtney_nguyen',
    'gillian_hughes',
    'farish_jones',
    'sarah_parker',
    'nathaniel_gonzalez',
    'parker_carter',
    'xander_smith',
    'jared_rodriguez',
    'grace_martinez',
    'kelsey_ramirez',
    'tamar_murphy',
    'clark_russell',
    'jared_jackson',
    'zechariah_washington',
    'courtney_morris',
    'gillian_hall',
    'farish_brooks',
    'sarah_nelson',
    'nathaniel_gomez',
    'parker_anderson',
    'xander_evans',
    'jared_williams',
    'grace_johnson',
    'kelsey_sanchez',
    'tamar_mitchell',
    'clark_cook',
    'jared_baker',
    'zechariah_hill',
    'courtney_campbell',
    'gillian_fisher',
    'farish_patterson',
    'sarah_king',
    'nathaniel_morgan',
    'parker_walker',
    'xander_thompson',
    'jared_morris',
    'grace_rivera',
    'kelsey_lee',
    'tamar_bell',
    'clark_gutierrez',
    'jared_ramirez',
    'zechariah_jenkins',
    'courtney_collins',
    'gillian_green',
    'farish_rivera',
    'sarah_hernandez',
    'nathaniel_ross',
    'parker_stewart',
    'xander_ellis',
    'jared_hernandez',
    'grace_perez',
    'kelsey_diaz',
    'tamar_patterson',
    'clark_martin',
    'jared_brown',
    'zechariah_ortiz',
    'courtney_long',
    'gillian_wilson',
    'farish_perez',
    'sarah_gonzalez',
    'nathaniel_johnson',
    'parker_bell',
  ];
  
const possibleThoughts = [
    "Just had an interesting conversation on how to respectfully disagree with someone. Thoughts?",
    "Finally got my hands on the new iPhone! Here are my thoughts and review.",
    "Created a new how-to video tutorial. Check it out and let me know what you think!",
    "Just finished a video essay on the fascinating history of video games. It's a bit long but worth the watch!",
    "Sharing my tips on how to make money on the App Store. Check it out if you're interested in app development.",
    "Created a quick tutorial on learning NextJS in just five minutes. Check it out, it's not clickbait!",
    "Just watched an incredible movie trailer. Can\'t wait for it to come out!",
    "Just wanted to say hello to everyone in this amazing community!",
    "Came up with another possible solution to the algorithm problem we've been discussing. What do you think?",
    "Posted an apology video addressing recent misunderstandings. I appreciate your understanding.",
    "Submitted my startup pitch. Fingers crossed for some positive feedback!",
  ];
  
  const possibleReactions = [
    "I completely agree!",
    "Interesting perspective!",
    "Thanks for sharing!",
    "I hadn't thought of it that way before.",
    "Great review, really helpful!",
    "Can't wait to try out your tutorial!",
    "Looking forward to watching your video essay!",
    "That's a really creative solution!",
    "Apology accepted, we all make mistakes.",
    "Good luck with your startup pitch!",
    "This sparked a great discussion in the comments!",
    "I appreciate your honesty.",
    "I disagree, but I respect your opinion.",
    "I'm inspired to try out your suggestions!",
    "You explained that really clearly.",
    "Keep up the good work!",
    "Looking forward to more content from you!",
    "I found this really informative.",
    "Thanks for the recommendation!",
    "I'll definitely be sharing this!",
  ];
  
//   const users = [];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`;
  
  // Function to generate random videos that we can add to the database. Includes video responses.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(possibleThoughts),
        username: getRandomUsername(),
        reactions: [...getReactions(3)],
      });
    }
    return results;
  };
  
  // Create the responses that will be added to each video
  const getReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomUsername(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts, getReactions };