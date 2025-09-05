import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

// Define a list of phrases for the /dough command.
// You can easily add more phrases to this array without changing the rest of the code.
const DOUGH_PHRASES = [
  "fuh yeah❤️‍🩹",
  "fuh no 💔",
  "based asf",
  "zeqa is hot",
  "i am doughbot",
  "@everyone hello chat",
  "wanderlust likes kids",
  "im horny",
  "the person above me is dumb asl",
  "hi",
  "mommy 🥺",
  "yuri is the worst doki fight me",
  "monika is the worst doki fight me",
  "sayori is the worst doki fight me",
  "natsuki is the worst doki fight me",
  "i gently open the door HHAHAHAHAHAHAHAHAHAHAHAH",
  "next person to type /dough gets free nitro",
  "doki doki literary convergence makes good videos that are funny and high quality :)",
  "fortnite",
  "https://www.youtube.com/watch?v=G2AjIRBzmeQ",
  "poo",
  "im a bitch",
  "i am doughbot beep boop",
  "did you know sayori likes ice cream",
  "kys",
  "fuck you",
  "https://www.youtube.com/watch?v=RtLirPXfLtk",
  "guys did you know that nexus verified ton 618",
  "ugh let me sleep",
  "https://www.xvideos.com/video.ihcauhob4b2/free_gay_extreme_porn_videos_up",
  "i want cuddles",
  "yuri has some FAT TITS bro",
  "nigga",
  "http://youtuberkids.com/",
  "i like watching videos of black men shaking their booty cheeks i dont know why but when i see a video of a black men my mouth starts to drool and i start dancing with the black man sometimes i hallucinate and see black men dancing on my couch it brings a smile to my face",
  "i have a micropenis",
  "https://cdn.discordapp.com/attachments/1331116943503134773/1407811556091367584/togif.gif?ex=68a9706e&is=68a81eee&hm=4e80d06138b579558e66c9885070ee348d633b884fb02b80ec0db4c0cf5def01",
  "https://www.youtube.com/watch?v=sVEuybvqY6Y",
  "https://www.tiktok.com/@iloveddlc217",
  "https://cdn.discordapp.com/attachments/1337509210656735264/1337573047993106522/caption.gif?ex=68a9acb9&is=68a85b39&hm=47e231ed52d282ff77a25e418771f3734c3bb8bb35b469104b61a68096344a47&",
  "https://media.discordapp.net/attachments/917542610908876973/1154517200233832458/caption-13.gif?ex=68aa26ee&is=68a8d56e&hm=36a1c3ecff2ee0e4f04b6260a6296fc433f0561af58859b13a02146f1ee5d770&",

];

// The main /dough command.
const DOUGH_COMMAND = {
  name: 'dough',
  description: 'Generates a random dough-themed phrase.',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const ALL_COMMANDS = [DOUGH_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);

// Function to get a random phrase for /dough command.
export function getDoughPhrase() {
  const randomIndex = Math.floor(Math.random() * DOUGH_PHRASES.length);
  return DOUGH_PHRASES[randomIndex];
}