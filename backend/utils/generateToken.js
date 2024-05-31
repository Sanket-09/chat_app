import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { //key and token 
		expiresIn: "30d",
	});

	res.cookie("jwt", token, {
		maxAge: 1 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // users cant access it using javascript , prevent cross site scripting attack
		sameSite: "strict",
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;
