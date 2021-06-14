import { DBReader } from '../../interfaces'

export default class MemberReader {
	static async GetMany(
		params: { page: any; limit: any },
		db: DBReader
	): Promise<any> {
		try {
			const results = await db.Fetch(params)
			return results.map((record: any) => record.name)
		} catch (error) {
			const errorObj = { ...error, errors: true }
			return errorObj
		}
	}
}
