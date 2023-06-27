import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  const { email } = req.body;
  let objRes = { msg: "Login userPediatra:..." };
  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const newUser = new User({ ...req.body });
      newUser.save();
      if (newUser) {
        objRes = {
          ...objRes,
          dataUser:newUser,
          createdUser: true
        };
      }
    }
    if(findUser){
        objRes = {
            ...objRes,
            dataUser:findUser,
            userExist: true
          };
    }
    await addToLoggerFile(JSON.stringify(objRes))
    return res.status(200).json(objRes);
  } catch (error) {
    console.log(error);
    objRes = {
      ...objRes,
      error,
    };
    await addToLoggerFile(JSON.stringify(objRes))
    return res.status(500).json(objRes);
  }
};
