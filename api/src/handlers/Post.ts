import { Request, Response } from 'express'
import { ReturnError, ReturnSuccess } from '../helpers/Response'
import { MongoWriter } from '../db/MongoWriter'
import MemberWriter from '../services/members/MemberWriter'
import { RESPONSE_MESSAGES } from '../config'

export async function SignUp(
	request: Request,
	response: Response
): Promise<void> {
	const { email, name, password } = request.body

	const dbInUse = new MongoWriter()
	const newMember = await MemberWriter.InsertNew(
		{ email, name, password },
		dbInUse
	)

	if (newMember.errors) {
		ReturnError(422, response, newMember, RESPONSE_MESSAGES.SIGNUP_FAIL)
	} else {
		ReturnSuccess(200, response, newMember, RESPONSE_MESSAGES.SIGNUP_SUCCESS)
	}
}
