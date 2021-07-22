export function getGithubUser({ queryKey: [, username] }) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export function getRandomUnsplashPhoto({ queryKey: [, keywords] }) {
  const { height, width } = window.screen;

  return fetch(
    `https://source.unsplash.com/${width}x${height}/?${keywords.join(",")}`
  ).then((res) => res.url);
}
