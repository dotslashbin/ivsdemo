import { DBReader } from '../../interfaces'

export default class MemberReader {
	static async GetMany(
		params: { page: any; limit: any },
		db: DBReader
	): Promise<any> {
		try {
			const results = await db.Fetch(params)
			return results.map((record: any) => {
				return { name: record.name, id: record._id }
			})
		} catch (error) {
			return { ...error, errors: true }
		}
	}

	static async GetOne(memberId: string, db: DBReader): Promise<any> {
		try {
			const member = await db.FetchOne({ memberId })
			if (member) {
				return { name: member.name, email: member.email }
			}
		} catch (error) {
			return { ...error, errors: true }
		}
	}
}
