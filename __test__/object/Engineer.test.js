const Engineer = require('../../lib/object/Engineer');

test('creates an Engineer role object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const github = 'brianckwang';
  const role = new Engineer(name, id, email, github);

  // act

  // assert
  expect(role.name).toBe(name);
  expect(role.id).toBe(id);
  expect(role.email).toBe(email);
  expect(role.github).toBe(github);
});

test('get engineer full github address', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const github = 'brianckwang';
  const role = new Engineer(name, id, email, github);

  // act

  // assert
  expect(role.getGithub()).toBe('https://github.com/' + github);
});

test('getRole() from Engineer object', () => {
  // arrange
  const name = 'Brian';
  const id = 'a0001';
  const email = 'brian.ck.wang@gmail.com';
  const office = 'A113';
  const role = new Engineer(name, id, email, office);

  // act

  // assert
  expect(role.getRole()).toBe('Engineer');
});