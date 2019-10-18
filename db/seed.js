module.exports = (db) => {
  db.User.create({
    firstName: 'Bill',
    lastName: 'Bones',
    email: 'b@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  });
  db.User.create({
    firstName: 'Marge',
    lastName: 'Meddler',
    email: '123',
    password: process.env.USER_PWD,
    isAdmin: false
  });
  // db.Moods.create({
  //   id: 0,
  //   alert: 4,
  //   happy: 7,
  //   relaxed: 3,
  //   eaten: 1,
  //   slept: 0,
  //   showered: 1,
  //   worked: 1,
  //   exercised: 0,
  //   createdAt: NOW(),
  //   updatedAt: NOW(),
  //   UserId: 4
  // });
  // db.Moods.create({
  //   id: 1,
  //   alert: 8,
  //   happy: 6,
  //   relaxed: 6,
  //   eaten: 1,
  //   slept: 1,
  //   showered: 0,
  //   worked: 0,
  //   exercised: 0,
  //   createdAt: NOW(),
  //   updatedAt: NOW(),
  //   UserId: 4
  // });
  // db.Moods.create({
  //   id: 1,
  //   alert: 3,
  //   happy: 6,
  //   relaxed: 4,
  //   eaten: 0,
  //   slept: 0,
  //   showered: 0,
  //   worked: 1,
  //   exercised: 0,
  //   createdAt: NOW(),
  //   updatedAt: NOW(),
  //   UserId: 4
  // });
};
