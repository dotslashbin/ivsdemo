/**
 * Definition of a session structure
 */
export interface Session {
	id: string
	email: string
	name: string
	issued: number
	expires: number
}

export type PartialSession = Omit<Session, 'issued' | 'expires'>

/**
 * Definition of an encoded result
 */
export interface EncodeResult {
	token: string
	expires: number
	issued: number
}

/**
 * Definition of the types a decoded result
 */
export type DecodeResult =
	| { type: 'valid'; session: Session }
	| { type: 'integrity-error' }
	| { type: 'invalid-token' }

export type ExpirationStatus = 'expired' | 'active' | 'grace'
