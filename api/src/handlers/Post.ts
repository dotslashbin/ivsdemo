import { Request, Response } from 'express'
import { MongoWriter } from '../db/MongoWriter'
import MemberWriter from '../services/members/MemberWriter'

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

	response.status(200)
	response.json(newMember)
}
