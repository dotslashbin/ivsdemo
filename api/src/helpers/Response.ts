import { response } from 'express'

export const Unauthorized = (message: string): Express.Response =>
	response.status(401).json({
		ok: false,
		status: 401,
		message: message,
	})
