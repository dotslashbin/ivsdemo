import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GetAll = async (request: Request, response: Response) => {
	console.log(request.params)

	response.status(200)
	response.json({ sulod: 'all the data here ' })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GetOne = async (request: Request, response: Response) => {
	console.log(request.params)

	response.status(200)
	response.json({ sulod: 'return only one' })
}
