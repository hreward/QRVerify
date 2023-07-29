import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hqrverify.app',
  appName: 'HallwardQRVerify',
  webDir: 'dist/hallward-qrverify',
  server: {
    androidScheme: 'https'
  }
};

export default config;
