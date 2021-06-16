import { APP_SECRET } from '../../config'
import { decode, TAlgorithm } from 'jwt-simple'
import { DecodeResult, Session } from '../../interfaces/Authentication'

/**
 * This class represents the service to validate a token
 */
export default class AuthValidator {
	private secret: string

	constructor() {
		this.secret = APP_SECRET
	}

	/**
	 * Decodes a session from token
	 * @param tokenString
	 * @returns
	 */
	decodeSession(tokenString: string): DecodeResult {
		// Always use HS512 to decode the token
		const algorithm: TAlgorithm = 'HS512'

		let result: Session

		try {
			result = decode(tokenString, this.secret, false, algorithm)
		} catch (_e) {
			const e: Error = _e

			if (
				e.message === 'No token supplied' ||
				e.message === 'Not enough or too many segments'
			) {
				return {
					type: 'invalid-token',
				}
			}

			if (
				e.message === 'Signature verification failed' ||
				e.message === 'Algorithm not supported'
			) {
				return {
					type: 'integrity-error',
				}
			}

			// Handle json parse errors, thrown when the payload is nonsense
			if (e.message.indexOf('Unexpected token') === 0) {
				return {
					type: 'invalid-token',
				}
			}

			throw e
		}

		return {
			type: 'valid',
			session: result,
		}
	}
}
