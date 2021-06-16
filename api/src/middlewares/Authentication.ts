import { Request, Response, NextFunction } from 'express'
import { ExtractToken } from '../helpers/Requests'
import AuthValidator from '../services/auth/AuthValidator'
import { DecodeResult } from '../interfaces/Authentication'
import { Unauthorized } from '../helpers/Response'

/**
 * Authentication middleware.
 *
 * NOTE: This is missing an implementation to check for the expiry, and
 * it mnay be added as needed. The structure is ready for it
 * @param request
 * @param response
 * @param next
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const RunAuthentication = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const token = ExtractToken(request)

	const validator = new AuthValidator()
	const decodedSession: DecodeResult = validator.decodeSession(token)

	// TODO: check for token expiry

	if (
		decodedSession.type === 'integrity-error' ||
		decodedSession.type === 'invalid-token'
	) {
		Unauthorized(`Token validaton failed: ${decodedSession.type}`, response)
	}

	response.locals = {
		...response.locals,
		session: decodedSession,
	}

	next()
}
