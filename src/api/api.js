export function getGithubUser({queryKey: [,username]}) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export function getRandomUnsplashPhoto({queryKey: [,keywords]}) {
  return fetch(`https://source.unsplash.com/1600x900/?${keywords.join(",")}`).then((res) => res.url);
}
