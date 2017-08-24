export class ServerAddr {
  private static serverAddr = 'http://api.bluelab.me:3200';
  // private static serverAddr = 'http://localhost:3200';

  public static getServerAddr() {
    return this.serverAddr;
  }
}