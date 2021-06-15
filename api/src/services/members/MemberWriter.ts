import { DBWriter } from '../../interfaces'
import AuthGenerator from '../../services/auth/AuthGenerator'

export default class MemberWriter {
	static async InsertNew(
		params: {
			email: string
			name: string
		},
		db: DBWriter
	): Promise<any> {
		try {
			const result = await db.Save(params)
			const authGenerator = new AuthGenerator()
			const authentication = authGenerator.GenerateToken(
				result.id,
				result.email,
				result.name
			)

			return {
				id: result.id,
				email: result.email,
				name: result.name,
				authentication,
			}
		} catch (error) {
			return error
		}
	}
}
