import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];

  try {
    const userPromise = signUpUser(firstName, lastName);
    const user = await userPromise;
    res.push({ status: 'fulfilled', value: user });
  } catch (err) {
    res.push({ status: 'rejected', value: err.toString() });
  }

  try {
    const photoPromise = uploadPhoto(fileName);
    const photo = await photoPromise;
    res.push({ status: 'fulfilled', value: photo });
  } catch (err) {
    res.push({ status: 'rejected', value: err.toString() });
  }

  return res;
}
