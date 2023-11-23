export const getUserData = (url: string) => {
  const pattern = /(?:#|&)([^&=]+)=([^&]+)/g;
  let match;
  const userData = { access_token: "", user_id: "", email: "" };
  while ((match = pattern.exec(url)) !== null) {
    if (match[1] === "access_token") {
      userData.access_token = match[2];
    } else if (match[1] === "user_id") {
      userData.user_id = match[2];
    } else if (match[1] === "email") {
      userData.email = match[2];
    }
  }
  return userData;
};
