import { prisma } from '../prisma/client';

export class SessionService {
  async getAllSessions() {
    return await prisma.session.findMany();
  }
}