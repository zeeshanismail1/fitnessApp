const userSchema = require('../models/user')
const { StatusCodes } = require('http-status-codes');
const { token } = require('morgan');
const Login = async (req, res) => {
  const { email, password } = req.body;  
  if (!email || !password) {
   return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Please enter email and password' });
  }
  const user = await userSchema.findOne({ email: email });
  //console.log(user)
  if (!user) {
   return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }
  const isCorrect = await user.checkPassword(password);
  

  if (isCorrect) {
    const token = user.generateAuthToken();
   return res.status(StatusCodes.OK).json({ token, user });
  } else {
   return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Incorrect password' });
  }
};

const SignUp = async (req, res) => {
  const {FirstName, LastName, email,password,gender,DateOfBirth,height,weight } = req.body;
    const user = userSchema.create({
      FirstName,
      LastName,
      email,
      password,
      gender,
      DateOfBirth,
      height,
      weight,
    });
  return  res.status(200).json({ user:user });
};

module.exports = { Login, SignUp };
// const SignUp = async (req, res) => {
//   const { role, user } = req.body;
//   console.log(req.body);
//   let currModel;
//   if (role === 'Admin') {
//     currModel = Admin;
//   } else if (role === 'Doctor') {
//     currModel = Doctor;
//     res.status(201).json(role)
//   } else if (role === 'Patient') {
//     currModel = Patient;
//     res.status(201).json(role)
//   } else if (role === 'LabManager') {
//     currModel = Laboratory;
//     res.status(201).json(role)
//   } else {
//     currModel = Laboratory;
//   }
//   const savedUser = await currModel.create({ ...user });

//   if (savedUser) {
//     const token = savedUser.generateAuthToken();
//     res.status(StatusCodes.OK).json({ token });
//   } else {
//     res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not saved' });
//   }
// };

// module.exports = { Login, SignUp };
