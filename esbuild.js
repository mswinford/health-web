const copyStaticFiles = require("esbuild-copy-static-files");

require("esbuild")
  .build({
    entryPoints: ["src/index.tsx"],
    outdir: "dist",
    bundle: true,
    minify: process.env.NODE_ENV === 'production',
    loader: {
      ".png": "file",
    },
    watch: process.env.NODE_ENV === undefined,
    plugins: [
      copyStaticFiles({
        src: "./src/public",
        dest: "./dist",
      }),
    ],
  })
  .catch(() => process.exit(1));
