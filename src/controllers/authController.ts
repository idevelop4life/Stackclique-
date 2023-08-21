import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../../prisma";
import { SuccessResponse } from "../types";
import {
	emailSchema,
	emailSignupInputSchema,
	loginEmailSchema,
} from "../zodSchema/inputSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "./../../env";
import { sendEmail } from "./mailcontroller";
import AppError from "./AppError";
import {
	ACCEPTED,
	BAD_REQUEST,
	CONFLICT,
	CREATED,
	INTERNAL_SERVER_ERROR,
	NOT_ACCEPTED,
	OK,
	UNAUTHORIZED,
} from "./errorController";

export const sendOTPSMS = async (req: Request, res: Response) => {
	/* {
	const safe = z
		.object({ phone_number: phoneNumberSchema })
		.safeParse(req.params);
	if (!safe.success)
		return res.status(401).json(<ErrorResponse<typeof safe.error>>{
			ok: false,
			error: {
				message: safe.error.issues.map((d) => d.message).join(", "),
				details: safe.error,
			},
		});

	const { phone_number } = safe.data;
	const existingUser = await prisma.user.findFirst({
		where: { phone_number },
	});

	if (existingUser)
		return res.status(202).json(<ErrorResponse<any>>{
			ok: false,
			error: { message: "Your phone number is already verified" },
		});

	try {
		const twilioRes = await twilioClient.verify.v2
			.services(env.TWILIO_VERIFY_SID)
			.verifications.create({ to: phone_number, channel: "sms" });

		// return res.json(twilioRes);
		if (!twilioRes.dateCreated)
			return res.status(500).json(<ErrorResponse<any>>{
				ok: false,
				error: { message: "An error occored", details: twilioRes },
			});
	} catch (error) {
		console.log(error);
		return res.status(500).json(<ErrorResponse<any>>{
			ok: false,
			error: { message: "An error occored", details: error },
		});
	}

	return res.status(200).json(<SuccessResponse<any>>{
		ok: true,
		message: `OTP was sent to ${phone_number}`,
		data: {},
	});
} */
};

export const sendOTPEmail = async (req: Request, res: Response) => {
	const safe = z.object({ email: emailSchema }).safeParse(req.params);
	if (!safe.success)
		throw new AppError(
			safe.error.issues.map((d) => d.message).join(", "),
			BAD_REQUEST.code,
			safe.error
		);

	const { email } = safe.data;

	const emailIsExisting = await prisma.user.findFirst({
		where: { email },
	});

	if (emailIsExisting)
		throw new AppError("Your email is already verified", CONFLICT.code);

	const OTP = (() => Math.floor(Math.random() * 900000) + 100000)();

	try {
		const generatedUserOTP = await prisma.userEmailVerificationToken.upsert({
			where: { email },
			update: {
				otp: OTP,
				expiredAt: new Date(new Date().getTime() + 60 * 60 * 1000),
			},
			create: {
				email,
				otp: OTP,
				expiredAt: new Date(new Date().getTime() + 60 * 60 * 1000),
			},
			// select: { email: true, otp: true, expiredAt: true },
		});
	} catch (error) {
		throw new AppError(
			"An error occored please try after few minutes",
			INTERNAL_SERVER_ERROR.code,
			error
		);
	}

	// send email with OTP---------------------------------------
	const EMAIL_MESSAGE = `<p>Your Stack Clique verification code is <b>${OTP}</b></p><p>This code will expire after <i>10 minutes</i></p>`;
	// if email sent
	const emailResponse = await sendEmail(
		email,
		EMAIL_MESSAGE,
		"STACK CLIQUE EMAIL VERIFICATION"
	);

	if (!emailResponse.success)
		throw new AppError(
			"An error occored and email was not sent",
			INTERNAL_SERVER_ERROR.code,
			emailResponse.details
		);

	return res.status(OK.code).json(<SuccessResponse<any>>{
		ok: true,
		data: {},
		message: emailResponse.message,
	});
};

export const handleSignupByPhone = async (req: Request, res: Response) => {
	/* {
	// const isByPhone = req.query.phone;
	// if (!isByPhone) return next();

	const safeInput = phoneSignupInputSchema.safeParse(req.body);
	if (!safeInput.success)
		return res.status(400).json(<ErrorResponse<typeof safeInput.error>>{
			ok: false,
			error: {
				message: safeInput.error.issues.map((d) => d.message).join(", "),
				details: safeInput.error,
			},
		});
	const { phone_number, otp, password, username } = safeInput.data;

	// check if user already exists-------------------------
	const existingUser = await prisma.user.findFirst({ where: { phone_number } });
	if (existingUser)
		return res.status(401).json(<ErrorResponse<any>>{
			ok: false,
			error: {
				message: `User with phone number '${phone_number}' already exists`,
			},
		});

	// verify phone number-------------
	try {
		const twilioRes = await twilioClient.verify.v2
			.services(env.TWILIO_VERIFY_SID)
			.verificationChecks.create({ to: phone_number, code: `${otp}` });

		// console.log(twilioRes.toJSON());
		// return res.json({ r: twilioRes.status });

		if (twilioRes == undefined)
			return res.status(500).json(<ErrorResponse<any>>{
				ok: false,
				error: {
					message: "Phone number erification failed",
					details: twilioRes,
				},
			});

		if (!twilioRes.valid)
			return res.status(400).json(<ErrorResponse<any>>{
				ok: false,
				error: {
					message: "Invalid OTP",
					details: twilioRes,
				},
			});
		// return res.json(twilioRes);
	} catch (error) {
		// console.log(error);
		return res.status(500).json(<ErrorResponse<any>>{
			ok: false,
			error: {
				message:
					"Phone number verification failed. Please retry after few minutes",
				details: error,
			},
		});
	}

	// next----

	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = await bcrypt.hashSync(password, salt);

	// create the user
	try {
		const newUser = await prisma.user.create({
			data: { phone_number, password: hashedPassword, username },
			select: { phone_number: true, username: true, id: true },
		});

		return res.status(201).json(<SuccessResponse<any>>{
			ok: true,
			message: "Registreation successful",
			data: newUser,
		});
	} catch (error) {
		return res.status(500).json(<ErrorResponse<any>>{
			ok: false,
			error: { details: error, message: "An error occoured please try again" },
		});
	}

	// res.json({ msg: "success", result: verificationReseponse });
} */
};

export const handleSignupByEmail = async (req: Request, res: Response) => {
	// validate user input
	const safe = emailSignupInputSchema.safeParse(req.body);
	if (!safe.success)
		throw new AppError(
			safe.error.issues.map((d) => d.message).join(", "),
			BAD_REQUEST.code,
			safe.error
		);

	const { email, otp, password, username } = safe.data;

	// check if user already exists-------------------------
	const existingEmail = await prisma.user.findFirst({ where: { email } });
	if (existingEmail)
		throw new AppError(
			`User with email '${email}' already exists`,
			CONFLICT.code
		);

	const existingUsername = await prisma.user.findFirst({ where: { username } });
	if (existingUsername)
		throw new AppError(
			`User with user name '${username}' already exists`,
			CONFLICT.code
		);

	// verify email using OTP
	const foundOTP = await prisma.userEmailVerificationToken.findUnique({
		where: { email, otp },
	});

	if (!foundOTP)
		throw new AppError("Incorrect OTP or email", UNAUTHORIZED.code);

	if (foundOTP.verified)
		throw new AppError("Your email is already verified", CONFLICT.code);

	if (foundOTP.expiredAt < new Date())
		throw new AppError("OTP has expired", NOT_ACCEPTED.code);

	// user verified
	await prisma.userEmailVerificationToken.update({
		data: { verified: true },
		where: { email, otp },
	});

	// hash user password here -------------------------------------
	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = await bcrypt.hashSync(password, salt);

	// create the user
	try {
		const newUser = await prisma.user.create({
			data: { email, password: hashedPassword, username },
			select: { email: true, username: true, id: true },
		});
		return res.status(CREATED.code).json(<SuccessResponse<any>>{
			ok: true,
			message: "Registreation successful",
			data: newUser,
		});
	} catch (error) {
		throw new AppError("An error occoured please try again", 500, error);
	}
};

export const handleLogin = async (req: Request, res: Response) => {
	const safeInput = loginEmailSchema.safeParse(req.body);

	if (!safeInput.success)
		throw new AppError(
			safeInput.error.issues.map((d) => d.message).join(", "),
			BAD_REQUEST.code,
			safeInput.error
		);

	// login with email
	const { email, password } = safeInput.data;

	const user = await prisma.user.findFirst({
		where: { email },
		select: { id: true, username: true, email: true, password: true },
	});

	if (!user) throw new AppError("Incorrect email", UNAUTHORIZED.code);

	const authorised = await bcrypt.compareSync(password, user.password);

	if (!authorised) throw new AppError("Incorrect password", 401);

	const token = jwt.sign(
		{ id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
		env.HASH_SECRET + ""
	);
	const { password: pass, ...userData } = user;
	return res.status(ACCEPTED.code).json(<SuccessResponse<typeof userData>>{
		ok: true,
		message: "Login successful",
		data: {
			...userData,
			UserAccessToken: token,
		},
	});
	// }

	// const safeInput = loginPhoneSchema.safeParse(req.body);

	// if (!safeInput.success)
	// 	return res.status(400).json(<ErrorResponse<typeof safeInput.error>>{
	// 		ok: false,
	// 		error: {
	// 			message: safeInput.error.issues.map((d) => d.message).join(", "),
	// 			details: safeInput.error,
	// 		},
	// 	});

	// // login with phone number
	// const { phone_number, password } = safeInput.data;

	// const user = await prisma.user.findFirst({
	// 	where: { phone_number },
	// 	select: { id: true, username: true, phone_number: true, password: true },
	// });

	// if (!user)
	// 	return res.status(401).json(<ErrorResponse<any>>{
	// 		ok: false,
	// 		error: { message: "Incorrect phone_number" },
	// 	});

	// const authorised = await bcrypt.compareSync(password, user.password);

	// if (!authorised)
	// 	return res.status(401).json(<ErrorResponse<any>>{
	// 		ok: false,
	// 		error: { message: "Incorrect password" },
	// 	});

	// const token = jwt.sign({ id: user.id }, env.HASH_SECRET + "");
	// const { password: pass, ...userData } = user;
	// return res.status(200).json(<SuccessResponse<typeof userData>>{
	// 	ok: true,
	// 	message: "Login successful",
	// 	data: {
	// 		...userData,
	// 		UserAccessToken: token,
	// 	},
	// });
};

// (async () => {
// 	const email = "testing";
// 	const exisitngEmail = await prisma.userEmailVerificationToken.findUnique({
// 		where: { email },
// 	});

// 	const OTP = (() => Math.floor(Math.random() * 9000) + 1000)();

// 	let generatedUserOTP;

// 	if (!exisitngEmail) {
// 		generatedUserOTP = await prisma.userEmailVerificationToken.create({
// 			data: {
// 				email,
// 				otp: OTP,
// 				expiredAt: new Date(new Date().getTime() + 60 * 60 * 1000),
// 			},
// 		});
// 	} else {
// 		generatedUserOTP = await prisma.userEmailVerificationToken.update({
// 			where: { email },
// 			data: {
// 				email,
// 				otp: OTP,
// 				expiredAt: new Date(new Date().getTime() + 60 * 60 * 1000),
// 			},
// 		});
// 	}

// 	console.log(generatedUserOTP, exisitngEmail);
// })();

// (async () => {
// 	// twilioClient.verify.v2
// 	// 	.services(env.TWILIO_VERIFY_SID)
// 	// 	.verificationChecks.create({ to: "+2348107721911", code: "569132" })
// 	twilioClient.verify.v2
// 		.services(env.TWILIO_VERIFY_SID)
// 		.verificationChecks.create({ to: "+2348107721911", code: `569132` })
// 		.then((res) => console.log(res));
// })();
