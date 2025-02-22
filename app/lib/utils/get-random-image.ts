const images = [
  '/images/random/bookworm.jpg',
  '/images/random/dark-and-moody.jpg',
  '/images/random/dreaming-city.jpg',
  '/images/random/falling.jpg',
  '/images/random/fish-traped.jpg',
  '/images/random/highschool-life.jpg',
  '/images/random/ideal-place.jpg',
  '/images/random/music.jpg',
  '/images/random/quitness.jpg',
  '/images/random/school-days.jpg',
  '/images/random/shadeofevening.jpg',
  '/images/random/stars.jpg',
  '/images/random/summer-vibes.jpg',
  '/images/random/traveling-mood.jpg',
  '/images/random/vastness-of-space.jpg',
  '/images/random/working-working.jpg',
];

// I want to keep track of which index I'm at. Once `n` reaches
// `images.length`, I know it's time to shuffle the array again:
let n = 0;

const shuffleImages = (images: string[]) => {
  for (let i = images.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }
  return images;
};

// Start out shuffling the array so it's in random order:
shuffleImages(images);

export const getRandomImage = () => {
  // Here is where I shuffle -- the counter goes back to zero at this point.
  if (n === images.length) {
    shuffleImages(images);
    n = 0;
  }
  // And I just spit out whatever is at index `n` in the shuffled array:
  const imagepath = images[n];

  // Then move to the next index:
  n++;

  return imagepath;
};
