import { Request } from 'express'

/**
 * Mehtod to return the token portion of the authentcation
 * @param req
 * @returns
 */
export const ExtractToken = (req: Request): any => {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(' ')[0] === 'Bearer'
	) {
		return req.headers.authorization.split(' ')[1]
	} else if (req.query && req.query.token) {
		return req.query.token
	}
	return null
}
