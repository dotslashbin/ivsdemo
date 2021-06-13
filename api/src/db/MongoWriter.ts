import { DBWriter } from 'src/interfaces'
import DBCore from './DBCore'
import { getModelForClass } from '@typegoose/typegoose'
import { Member } from '../models/MemberModel'

export class MongoWriter extends DBCore implements DBWriter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Save(params: any): any {
		const memberModel = getModelForClass(Member)

		try {
			return memberModel.create(params)
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		}

		return null
	}
}
