import { rollup } from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');
const external = !!pkg.dependencies ? Object.keys(pkg.dependencies) : [];

rollup({
  entry: 'src/vanilla-tilt.js',
  plugins: [
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      extensions: ['.js', '.json'],
      preferBuiltins: false
    })
  ]
}).then(bundle => bundle.write({
  dest: pkg.module,
  format: 'es'
}));



rollup({
  entry: 'src/vanilla-tilt.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    babel(babelrc()),
    commonjs()
  ]
}).then(bundle => bundle.write({
  dest: pkg.main,
  format: 'cjs'
})).catch(err => console.log(err.stack));



rollup({
  entry: 'src/vanilla-tilt.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    babel(babelrc()),
    commonjs()
  ],
  external: external
}).then(bundle => bundle.write({
  dest: pkg.dist,
  moduleName: 'VanillaTilt',
  format: 'iife'
})).catch(err => console.log(err.stack));





// import babel from 'rollup-plugin-babel';
// import babelrc from 'babelrc-rollup';
// // import istanbul from 'rollup-plugin-istanbul';

// let pkg = require('./package.json');
// let external = !!pkg.dependencies ? Object.keys(pkg.dependencies) : [];

// export default {
//   entry: 'src/vanilla-tilt.js',
//   plugins: [
//     // babel(babelrc()),
//     // istanbul({
//     //   exclude: ['test/**/*', 'node_modules/**/*']
//     // })
//   ],
//   external: external,
//   // external: external,
//   targets: [
//     {
//       dest: pkg.dist,
//       format: 'iife',
//       moduleName: 'VanillaTilt',
//       sourceMap: false
//     },
//     {
//       dest: pkg.module,
//       format: 'es',
//       sourceMap: false
//     }
//   ]
// };
