import { Request, Response } from 'express'
import { MongoReader } from '../db/MongoReader'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function GetAll(
	request: Request,
	response: Response
): Promise<void> {
	const page = request.query.page
	const limit = request.query.limit

	// eslint-disable-next-line no-console
	console.log(`PAGE: ${page} - Limit: ${limit}`)

	const dbInUse = new MongoReader()
	const members = await dbInUse.Fetch({ page, limit })

	response.status(200)
	response.json(members)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GetOne = async (request: Request, response: Response) => {
	console.log(request.params)

	response.status(200)
	response.json({ sulod: 'return only one' })
}
