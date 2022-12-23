// import jwt from "jsonwebtoken";
// import user from "../models/users.js";
// const secretKey = "qwertyuiopasdfghjklzxcvbnmqwerty";

// export const Auth = async (req, res, next) => {
//   try {
//     let token = req.headers.authorization;
//     const verifiedUser = jwt.verify(token, secretKey);
//     const rootUser = await user.findOne({ _id: verifiedUser.id });
//     if (!rootUser) res.status(200).json({ message: "invalid user" });
//     req.token = token;
//     req.rootUser = rootUser;
//     req.rootUserId = rootUser._id;
//   } catch (error) {
//     console.log("error in middleware");
//   }
// };
