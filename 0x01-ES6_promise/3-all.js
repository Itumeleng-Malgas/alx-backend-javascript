import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([, userResponse]) => {
      console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
