import { Request, Response } from 'express'
import { MongoReader } from '../db/MongoReader'
import { ReturnError, ReturnSuccess } from '../helpers/Response'
import { RESPONSE_MESSAGES } from '../config'
import MemberReader from '../services/members/MemberReader'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function GetAll(
	request: Request,
	response: Response
): Promise<void> {
	const page = request.query.page
	const limit = request.query.limit

	// eslint-disable-next-line no-console
	console.log(`PAGE: ${page} - Limit: ${limit}`)

	const dbInUse = new MongoReader()
	const members = await MemberReader.GetMany({ page, limit }, dbInUse)

	if (members.errors) {
		ReturnError(422, response, members.errors, RESPONSE_MESSAGES.RETRIEVE_FAIL)
	}

	ReturnSuccess(200, response, members, RESPONSE_MESSAGES.RETRIEVE_SUCCESS)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function GetOne(
	request: Request,
	response: Response
): Promise<void> {
	// eslint-disable-next-line no-console
	const memberId = request.params.memberId

	const dbInUse = new MongoReader()
	const member = await dbInUse.FetchOne({ memberId }).catch((error: any) => {
		ReturnError(422, response, error, RESPONSE_MESSAGES.RETRIEVE_FAIL)
	})

	ReturnSuccess(200, response, member, RESPONSE_MESSAGES.RETRIEVE_SUCCESS)
}
