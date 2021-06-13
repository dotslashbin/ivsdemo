import { encode, TAlgorithm } from 'jwt-simple'
import { APP_SECRET } from '../../config'
import {
	EncodeResult,
	PartialSession,
	Session,
} from '../../interfaces/Authentication'

export default class AuthGenerator {
	private secret: string
	constructor() {
		this.secret = APP_SECRET
	}

	GenerateToken(id: string, email: string, name: string): EncodeResult {
		return this.getEncodedToken({ id, email, name })
	}

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
