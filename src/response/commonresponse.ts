export class CommonResponse<T = any> {
  code: number;
  message: string;
  data: T | null;
  errors: any | null;

  constructor(code = 200, message = 'Success', data: T | null = null, errors: any | null = null) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.errors = errors;
  }

  static success<T = any>(data: T, message = 'Success', code = 200): CommonResponse<T> {
    return new CommonResponse<T>(code, message, data, null);
  }

  static error(message = 'Error', code = 500, errors: any = null): CommonResponse<null> {
    return new CommonResponse<null>(code, message, null, errors);
  }
}