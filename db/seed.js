module.exports = (db) => {
  db.User.create({
    firstName: 'Bill',
    lastName: 'Bones',
    email: 'bb@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  });
  db.User.create({
    firstName: 'Marge',
    lastName: 'Meddler',
    email: 'mm@g.co',
    password: process.env.USER_PWD,
    isAdmin: false
  });
  db.Mood.create({
    id: 0,
    alert: 4,
    happy: 7,
    relaxed: 3,
    eaten: 1,
    slept: 0,
    showered: 1,
    worked: 1,
    exercised: 0,
    createdAt: '2019-10-18 16:48:21',
    updatedAt: '2019-10-18 16:48:21',
    UserId: 10
  });
  db.Mood.create({
    alert: 3,
    happy: 2,
    relaxed: 4,
    eaten: 0,
    slept: 0,
    showered: 0,
    worked: 1,
    exercised: 0,
    createdAt: '2019-10-14 18:00:00',
    updatedAt: '2019-10-14 18:00:00',
    UserId: 11
  });
  db.Mood.create({
    alert: 7,
    happy: 9,
    relaxed: 7,
    eaten: 1,
    slept: 1,
    showered: 0,
    worked: 1,
    exercised: 1,
    createdAt: '2019-10-13 13:00:00',
    updatedAt: '2019-10-13 13:00:00',
    UserId: 12
  });
  db.Mood.create({
    alert: 7,
    happy: 9,
    relaxed: 7,
    eaten: 1,
    slept: 1,
    showered: 0,
    worked: 1,
    exercised: 1,
    createdAt: '2019-10-13 13:00:00',
    updatedAt: '2019-10-13 13:00:00',
    UserId: 12
  });
};
