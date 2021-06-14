import { DBWriter } from '../../interfaces'
import AuthGenerator from '../../services/auth/AuthGenerator'

export default class MemberWriter {
	static async InsertNew(
		params: {
			email: string
			name: string
			password: string
		},
		db: DBWriter
	): Promise<any> {
		try {
			const result = await db.Save(params)
			const authGenerator = new AuthGenerator()
			const token = authGenerator.GenerateToken(
				result.id,
				result.email,
				result.name
			)

			return {
				id: result.id,
				email: result.email,
				name: result.name,
				password: result.password,
				token,
			}
		} catch (error) {
			return error
		}
	}
}
