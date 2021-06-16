import { DBWriter } from 'src/interfaces'
import DBCore from './DBCore'
import { getModelForClass } from '@typegoose/typegoose'
import { Member } from '../models/MemberModel'

/**
 * A class that is responsible for writing data into
 * the database.
 *
 * NOTE: Other database classes should be patterned from this.
 * This is missing a few functions for "update" feature, but
 * this should only be responsible for writing data into the
 * database.
 */
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
