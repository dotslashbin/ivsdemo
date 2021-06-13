import { Response } from 'express'

/**
 * Wrapper for unathorized response
 * @param message
 * @param response
 * @returns
 */
export const Unauthorized = (
	message: string,
	response: Response
): Express.Response =>
	response.status(401).json({
		ok: false,
		status: 401,
		message: message,
	})

/**
 * Wrapper for successful response
 * @param status
 * @param response
 * @param data
 */
export const ReturnSuccess = (
	status: number,
	response: Response,
	data: any
): void => {
	response.status(status)
	response.json(data)
}

/**
 * Wrapper for Error response
 * @param status
 * @param response
 * @param data
 */
export const ReturnError = (
	status: number,
	response: Response,
	data: any
): void => {
	response.status(status)
	response.json({ error: data.message })
}
