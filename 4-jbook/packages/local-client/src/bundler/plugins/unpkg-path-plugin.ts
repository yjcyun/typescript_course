import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // override built-in behaviour of onResolve and onLoad because esbuild will look for filesystem when it seems 'import' statements

      // handle root entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: 'index.js', namespace: 'a' };
      });

      // handle relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace: 'a',
          path: new URL(args.path, 'https://unpkg.com' + args.resolveDir + '/')
            .href,
        };
      });

      // handle main file of a module
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });

      // build.onResolve({ filter: /.*/ }, async (args: any) => {
      //   console.log('onResolve', args);
      //   if (args.path === 'index.js') {
      //     return { path: args.path, namespace: 'a' };
      //   }

      //   if (args.path.includes('./') || args.path.includes('../')) {
      //     return {
      //       namespace: 'a',
      //       path: new URL(
      //         args.path,
      //         'https://unpkg.com' + args.resolveDir + '/'
      //       ).href,
      //     };
      //   }

      //   return {
      //     namespace: 'a',
      //     path: `https://unpkg.com/${args.path}`,
      //   };
      // });
    },
  };
};
