import { Controller, Get, Route, Tags, Response, SuccessResponse } from 'tsoa';
import { SessionService } from '../services/sessionservice';
import { CommonResponse } from '../response/commonresponse';

@Route('leavesessions')
@Tags('Leave Session')
export class SessionController {
  private service = new SessionService();

  @Get('/')
  @SuccessResponse('200', 'Success')
  public async getAll(): Promise<CommonResponse> {
    const sessions = await this.service.getAllSessions();
     return CommonResponse.success(sessions, 'Fetched all sessions');
  }
}