export declare interface QueryMock {
  request: {
    query?: object,
    variables?: object,
  },
  result?: {
    data?: object | undefined,
    errors?: any,
  }
}