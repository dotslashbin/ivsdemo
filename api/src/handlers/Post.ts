import { Request, Response } from 'express'
import AuthGenerator from '../services/auth/AuthGenerator'

export async function SignUp(
	request: Request,
	response: Response
): Promise<void> {
	const { email, password } = request.body

	const authGenerator = new AuthGenerator()

	const token = authGenerator.GenerateToken(email, password)

	response.status(200)
	response.json(token)
}
