import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run blogs-web:serve',
        production: 'nx run blogs-web:preview',
      },
      ciWebServerCommand: 'nx run blogs-web:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
