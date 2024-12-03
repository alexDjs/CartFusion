import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    reporters: [
      'default',
      'junit', // Репортер для XML-формата
    ],
    outputFile: 'reports/test-report.xml', // Путь к XML-отчету
  },
});
