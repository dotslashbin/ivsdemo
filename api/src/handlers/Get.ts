import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function GetAll(
	request: Request,
	response: Response
): Promise<void> {
	const page = request.query.page
	const limit = request.query.limit

	response.status(200)
	response.json(response.locals)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GetOne = async (request: Request, response: Response) => {
	console.log(request.params)

	response.status(200)
	response.json({ sulod: 'return only one' })
}
