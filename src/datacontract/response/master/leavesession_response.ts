class SessionResponse {
  sessionId: number;
  Name: string;

  constructor(sessionId: number, Name: string) {
    this.sessionId = sessionId;
    this.Name = Name;
  }
}

export default SessionResponse;