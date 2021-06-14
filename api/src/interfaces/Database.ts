export interface DBConnector {
	Connect(): void
}

export interface DBWriter extends DBConnector {
	Save(params: any): any
}

export interface DBReader {
	FetchOne(params: any): any
	Fetch(params: any): any
}
