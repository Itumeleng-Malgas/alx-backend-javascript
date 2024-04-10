import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
