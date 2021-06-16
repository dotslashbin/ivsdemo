import { encode, TAlgorithm } from 'jwt-simple'
import { APP_SECRET } from '../../config'
import {
	EncodeResult,
	PartialSession,
	Session,
} from '../../interfaces/Authentication'

/**
 * This defines the service to generate the authentication session
 */
export default class AuthGenerator {
	private secret: string
	constructor() {
		this.secret = APP_SECRET
	}

	/**
	 * Generates a JWT token from the provided information
	 * @param id
	 * @param email
	 * @param name
	 * @returns
	 */
	GenerateToken(id: string, email: string, name: string): EncodeResult {
		return this.getEncodedToken({ id, email, name })
	}

	/**
	 * Retrieves an encoded token
	 * @param partialSession
	 * @returns
	 */
	private getEncodedToken(partialSession: PartialSession): EncodeResult {
		const algorithm: TAlgorithm = 'HS512'

		// Determine when the token should expire
		const issued = Date.now()
		const fifteenMinutesInMs = 15 * 60 * 1000
		const expires = issued + fifteenMinutesInMs

		const session: Session = {
			...partialSession,
			issued: issued,
			expires,
		}

		return {
			token: encode(session, this.secret, algorithm),
			issued: issued,
			expires: expires,
		}
	}
}
