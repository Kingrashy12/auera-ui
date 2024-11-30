import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import { readFileSync } from "fs";
import { visualizer } from "rollup-plugin-visualizer";
import postcss from "rollup-plugin-postcss";
import esbuild from "rollup-plugin-esbuild";
const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: false,
      // dir: "dist",
      // preserveModules: true,
      // preserveModulesRoot: "src",
      // entryFileNames: "[name].cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: false,
      // dir: "dist",
      // preserveModules: true,
      // preserveModulesRoot: "src",
      exports: "named",
    },
  ],
  cache: false,
  plugins: [
    del({ targets: "dist/*" }),
    resolve(),
    PeerDepsExternalPlugin(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      outputToFilesystem: true,
      sourceMap: false,
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    esbuild({
      minify: true,
    }),
    visualizer({ open: true, filename: "bundle-analysis.html" }),
    postcss({
      extract: "auera.css",
      modules: false,
      plugins: [],
      minimize: true,
    }),
  ],
  external: ["react", "react-dom", "stywind", "react-icons", "inquirer"],
};
