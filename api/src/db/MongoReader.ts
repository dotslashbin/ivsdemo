import { DBReader } from 'src/interfaces'
import DBCore from './DBCore'
import { getModelForClass } from '@typegoose/typegoose'
import { Member } from '../models/MemberModel'
import { DEFAULT_PAGE, DEFAULT_LIMIT } from '../config'

/**
 * A class with the purpose of writing into a mongo db database.
 *
 * Note:
 * Other databases to be handled in the future are to be patterned from this one.
 */
export class MongoReader extends DBCore implements DBReader {
	private page: number
	private limit: number

	constructor() {
		super()
		this.page = DEFAULT_PAGE
		this.limit = DEFAULT_LIMIT
	}

	/**
	 * Method to fetch a collection of records
	 *
	 * @param params
	 * @returns
	 */
	Fetch(params: { page: any; limit: any }): any {
		const memberModel = getModelForClass(Member)

		const { page, limit } = params

		try {
			return memberModel
				.find()
				.skip(this.getSkipFromPage(page ? page : this.page))
				.limit(limit ? limit : this.limit)
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}
	}

	/**
	 * A method to fetch one record
	 * @param params
	 * @returns
	 */
	FetchOne(params: any): any {
		const memberModel = getModelForClass(Member)
		const { memberId } = params

		try {
			// eslint-disable-next-line no-console
			return memberModel.findById(memberId)
		} catch (error) {
			// eslint-disable-next-line no-console
			return null
		}
	}

	/**
	 * This generates the "skip" value for the pagination feature.
	 * @param page
	 * @returns
	 */
	private getSkipFromPage(page: number): number {
		// $this->skip = ($page > 0)? ($page - 1) * $this->limit: config('app.DEFAULT_SKIP');
		return page > 0 ? (this.page - 1) * this.limit : 0
	}
}
