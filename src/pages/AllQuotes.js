import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  {
    id: 'q1',
    text: 'I must not fear. Fear is the mind - killer. Fear is the little - death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.And when it has gone past I will turn the inner eye to see its path.Where the fear has gone there will be nothing.Only I will remain.',
    author: '-Frank Herbert',
    score: 4.5,
  },
  {
    id: 'q2',
    text: 'I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do.',
    author: '-Robert A. Heinlein',
    score: 4.55,
  },
  {
    id: 'q3',
    text: "I don't have Talent. I have Tenacity. I have Discipline. I have Focus. And I know, without any illusion, where I come from and where I can go back to.",
    author: '-Henry Rollins',
    score: 4.9,
  },
  {
    id: 'q4',
    text: ' Knowledge will forever govern ignorance: And a people who mean to be their own Governors, must arm themselves with the power which knowledge gives.',
    author: '-James Madison, 4th President of The U.S.A',
    score: 4.65,
  },
  {
    id: 'q5',
    text: 'As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.',
    author: '-Herman Melville',
    score: 4.4,
  },
  {
    id: 'q6',
    text: 'The Edge; there is no honest way to explain it, because, the only people who really know where it is are the ones who have gone over.',
    author: '-Hunter S. Thompson',
    score: 5,
  },
  {
    id: 'q7',
    text: 'Live a good life. For, if there are gods and they are just, then they will not care how devout you have been, but will welcome you based on the virtues you have lived by. If there are gods, but unjust, then you should not want to worship them. If there are no gods, then you will be gone, but...will have lived a noble life that will live on in the memories of your loved ones.',
    author: '-Marcus Aurelius',
    score: 4.95,
  },
  {
    id: 'q8',
    text: 'Everybody is a Genius. But, if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid',
    author: '-Albert Einstein',
    score: 4.35,
  },
  {
    id: 'q9',
    text: "The problem, often not discovered until late in life, is that when you look for things in life like love, meaning, motivation, it implies they are sitting behind a tree or under a rock. The most successful people in life recognize, that in life they create their own love, they manufacture their own meaning, they generate their own motivation. For me, I am driven by two main philosophies, know more today about the world than I knew yesterday. And lessen the suffering of others. You'd be surprised how far that gets you.",
    author: '-Neil Degrasse Tyson',
    score: 4.45,
  },
  {
    id: 'q10',
    text: 'When a child gives you a gift, even if it is a rock they just picked up, exude gratitude. It may be the only thing they have to give, and they have chosen to give it to you',
    author: '-Dean Jackson',
    score: 3.25,
  },
  {
    id: 'q11',
    text: "If you run into an asshole in the morning, you ran into an asshole. If you run into assholes all day, you're the asshole.",
    author: '-Raylan Givens',
    score: 3.95,
  },
  {
    id: 'q12',
    text: 'There is no spoon.',
    author: '-Morpheus',
    score: 2.5,
  },
  {
    id: 'q13',
    text: 'The best time to plant a tree was twenty years ago. The second best time is now.',
    author: '-Chinese Proverb',
    score: 4.6,
  },
  {
    id: 'q14',
    text: 'Everything you want is on the other side of Fear.',
    author: '-Jake Canfield',
    score: 4.85,
  },
  {
    id: 'q15',
    text: 'Desire is the starting point of all achievement, not hope, not a wish, but a keen pulsating desire which transcends everything.',
    author: '-Napoleon Hill',
    score: 4.75,
  },
  {
    id: 'q16',
    text: 'Knowing is not enough; We must Apply.  Willing is not enough; We must Do.',
    author: '-Bruce Lee',
    score: 4.8,
  },
  {
    id: 'q17',
    text: 'The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently',
    author: '-Friedrich Nietzsche',
    score: 4.25,
  },
  {
    id: 'q18',
    text: "Unless someone like you cares a whole awful lot, nothings is going to get better. It's not.",
    author: "-Dr. Seuss, 'The Lorax'",
    score: 4.7,
  },
];
const AllQuotes = () => {
  console.log();
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
