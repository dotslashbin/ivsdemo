import { Request, Response } from 'express'
import { ReturnError, ReturnSuccess } from '../helpers/Response'
import { MongoWriter } from '../db/MongoWriter'
import MemberWriter from '../services/members/MemberWriter'
import { RESPONSE_MESSAGES } from '../config'

/**
 * Handler function for the "sign-up" endpoint.
 *
 * This should not contain or implement the entire process, but rather act as a
 * middleman for it. It Utilizes services to execute the process, and calls to
 * other functions for data manipulation and sending responses back to the
 * endpoint.
 * @param request
 * @param response
 */
export async function SignUp(
	request: Request,
	response: Response
): Promise<void> {
	const { email, name } = request.body

	const dbInUse = new MongoWriter()
	const newMember = await MemberWriter.InsertNew({ email, name }, dbInUse)

	if (newMember.errors) {
		ReturnError(422, response, newMember, RESPONSE_MESSAGES.SIGNUP_FAIL)
	} else {
		ReturnSuccess(
			200,
			response,
			'sign-up',
			newMember,
			RESPONSE_MESSAGES.SIGNUP_SUCCESS
		)
	}
}
