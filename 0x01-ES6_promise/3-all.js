import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([body, fullname]) => {
      console.log(`${body.body} ${fullname.firstName} ${fullname.lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
