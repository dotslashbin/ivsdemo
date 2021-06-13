import { Response } from 'express'

export const Unauthorized = (
	message: string,
	response: Response
): Express.Response =>
	response.status(401).json({
		ok: false,
		status: 401,
		message: message,
	})
