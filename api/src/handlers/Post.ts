import { Request, Response } from 'express'

export const SignUp = async (request: Request, response: Response) => {
	const { email, password } = request.body

	// eslint-disable-next-line no-console
	console.log(`EMAIL: ${email}`, email, `PWD: ${password}`, password)

	response.status(200)
	response.json(request.body)
}
