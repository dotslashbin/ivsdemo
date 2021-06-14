import { DBReader } from 'src/interfaces'
import DBCore from './DBCore'
import { getModelForClass } from '@typegoose/typegoose'
import { Member } from '../models/MemberModel'

export class MongoReader extends DBCore implements DBReader {
	Fetch(params: any): any {
		const memberModel = getModelForClass(Member)

		const { page, limit } = params
		// eslint-disable-next-line no-console
		console.log('USE ', page, limit)

		try {
			return memberModel.find()
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}
	}

	FetchOne() {
		console.log(' fetch one here')
	}
}
