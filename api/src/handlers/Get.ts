import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GetAll = async (request: Request, response: Response) => {
	// eslint-disable-next-line no-console
	const page = request.query.page
	const limit = request.query.limit

	// eslint-disable-next-line no-console
	console.log(page, limit, request.query)

	response.status(200)
	response.json(response.locals)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GetOne = async (request: Request, response: Response) => {
	console.log(request.params)

	response.status(200)
	response.json({ sulod: 'return only one' })
}
