import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

const isProduction = process.env.NODE_ENV === 'production';

export const serveCommand = new Command()
  .command('serve [filename]') // [] optional vale
  .description('Open a file for editing') // used in node file.js --help
  .option('-p, --port <number>', 'port to run server on', '4005') // <> required value '4005' = default value
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(
        parseInt(options.port),
        path.basename(filename),
        dir,
        !isProduction
      );
      console.log(
        `Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file`
      );
    } catch (error) {
      if (error.code === 'EADDRINUSE') {
        console.error('Port is in use. Try running on a different port.');
      } else {
        console.log('Heres the problem', error.message);
      }
      process.exit(1);
    }
  });
