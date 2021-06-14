import { DBReader } from 'src/interfaces'
import DBCore from './DBCore'
import { getModelForClass } from '@typegoose/typegoose'
import { Member } from '../models/MemberModel'
import { DEFAULT_PAGE, DEFAULT_LIMIT } from '../config'

export class MongoReader extends DBCore implements DBReader {
	private page: number
	private limit: number

	constructor() {
		super()
		this.page = DEFAULT_PAGE
		this.limit = DEFAULT_LIMIT
	}

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

	private getSkipFromPage(page: number): number {
		// $this->skip = ($page > 0)? ($page - 1) * $this->limit: config('app.DEFAULT_SKIP');
		return page > 0 ? (this.page - 1) * this.limit : 0
	}
}
