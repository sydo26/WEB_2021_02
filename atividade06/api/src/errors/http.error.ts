export class HttpException extends Error {
  public statusCode: number;

  constructor(message: string, status: number) {
    super(message);
    this.statusCode = status;
    this.name = "HttpException";
  }
}
