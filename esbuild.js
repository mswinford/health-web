const copyStaticFiles = require("esbuild-copy-static-files");

require("esbuild")
  .build({
    entryPoints: ["src/index.tsx"],
    outdir: "dist",
    bundle: true,
    // minify: true,
    loader: {
      ".png": "file",
    },
    watch: true,
    plugins: [
      copyStaticFiles({
        src: "./src/public",
        dest: "./dist",
      }),
    ],
  })
  .catch(() => process.exit(1));
