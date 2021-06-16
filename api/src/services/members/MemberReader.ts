import { DBReader } from '../../interfaces'

/**
 * This contains all the functions that pertains to reading a member(s) data
 */
export default class MemberReader {
	/**
	 * Fetch a collection of record
	 * @param params
	 * @param db
	 * @returns
	 */
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

	/**
	 * Fetches one record
	 * @param memberId
	 * @param db
	 * @returns
	 */
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
