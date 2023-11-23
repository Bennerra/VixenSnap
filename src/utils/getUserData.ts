export const getUserData = (url: string) => {
  const pattern = /(?:#|&)([^&=]+)=([^&]+)/g;
  let match;
  const userData = { access_token: "", user_id: "", email: "" };
  // eslint-disable-next-line no-cond-assign
  while ((match = pattern.exec(url)) !== null) {
    if (match[1] === "access_token") {
      // eslint-disable-next-line prefer-destructuring
      userData.access_token = match[2];
    } else if (match[1] === "user_id") {
      // eslint-disable-next-line prefer-destructuring
      userData.user_id = match[2];
    } else if (match[1] === "email") {
      // eslint-disable-next-line prefer-destructuring
      userData.email = match[2];
    }
    console.log(match);
  }
  return userData;
};
