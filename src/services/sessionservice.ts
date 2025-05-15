import { prisma } from '../prisma/client';
import  SessionResponse  from '../datacontract/response/master/leavesession_response';

export class SessionService {
  async getAllSessions(): Promise<SessionResponse[]> {
    const sessions = await prisma.session.findMany();

    return sessions.map(
      (session) => new SessionResponse(Number(session.SessionId), session.Name)
    );
  }
}