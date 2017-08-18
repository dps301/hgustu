export class ServerAddr {
  private static serverAddr = 'http://localhost:3000';

  public static getServerAddr() {
    return this.serverAddr;
  }
}