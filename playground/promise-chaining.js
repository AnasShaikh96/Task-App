require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

// User.findByIdAndUpdate("60feb755dfd21d203c372d11", { age: 21 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 21 });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Task.findByIdAndDelete("6100f76921923321605ea29b")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("60feb755dfd21d203c372d11")
  .then((count) => {
    // console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("60f58f8c3c19bd30509ce46a")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
