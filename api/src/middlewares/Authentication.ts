import { Request, Response, NextFunction } from 'express'
import { ExtractToken } from '../helpers/Requests'
import AuthValidator from '../services/auth/Validator'
import { DecodeResult } from '../interfaces'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const RunAuthentication = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const token = ExtractToken(request)

	const validator = new AuthValidator()
	const decodedSession: DecodeResult = validator.decodeSession(token)

	response.locals = {
		...response.locals,
		session: decodedSession,
	}

	// eslint-disable-next-line no-console
	console.log(response)

	next()
}
