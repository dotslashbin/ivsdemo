export interface User {
	id: string
	name: string
	email: string
	password: string
}

export interface Session {
	id: string
	email: string
	name: string
	issued: number
	expires: number
}

export type PartialSession = Omit<Session, 'issued' | 'expires' | 'password'>

export interface EncodeResult {
	token: string
	expires: number
	issued: number
}

export type DecoreResult =
	| { type: 'valid'; session: Session }
	| { type: 'integrity-error' }
	| { type: 'invalid-token' }

export type ExpirationStatus = 'expired' | 'active' | 'grace'
