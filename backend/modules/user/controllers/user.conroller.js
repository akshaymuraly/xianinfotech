const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userDetails = require("../models/user.model");
const CustomError = require("../../../middlewares/CustomError");
const AsyncHandler = require("../../../middlewares/AsyncHandler");

const userSignin = AsyncHandler(async (req, res, next) => {
  const { Password, UserName, Role } = req.body;
  if (!Password || !UserName || Password === "" || UserName === "") {
    throw new CustomError("Allfields are required", 400);
  }
  const user = await userDetails.findOne({ UserName });
  if (!user) {
    throw new CustomError("No account found!", 401);
  }
  const comparePassword = await bcrypt.compare(Password, user.Password);
  if (!comparePassword) {
    throw new CustomError("Invalid email or password !", 401);
  }
  if (user.Role !== Role) {
    throw new CustomError("Unauthorized access!", 401);
  }
  const token = await jwt.sign(
    { id: user._id, role: user.Role },
    process.env.JWT_TOKEN_KEY,
    {
      expiresIn: "1d",
    }
  );
  await res.cookie("authtoken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60), //60 mins
    sameSite: isProduction ? "strict" : "lax",
    httpOnly: isProduction,
    secure: isProduction,
  });
  return res.json({ message: "Logged in successfully", status: true });
});

module.exports = { userSignin };
