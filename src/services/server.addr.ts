export class ServerAddr {
  private static serverAddr = 'http://52.78.230.42:3200';
  // private static serverAddr = 'http://localhost:3200';

  public static getServerAddr() {
    return this.serverAddr;
  }
}