import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

export const serveCommand = new Command()
  .command('serve [filename]') // [] optional vale
  .description('Open a file for editing') // used in node file.js --help
  .option('-p, --port <number>', 'port to run server on', '4005') // <> required value '4005' = default value
  .action((filename = 'notebook.js', options: { port: string }) => {
    const dir = path.join(process.cwd(), path.dirname(filename));
    serve(parseInt(options.port), path.basename(filename), dir);
  });
