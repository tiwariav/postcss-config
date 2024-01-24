declare module "@tiwariav/postcss-config" {
  const getConfig: (
    env: string,
    options?: {
      globalDataOptions?: { files: string[] };
      mixinOptions?: { mixinsDir: string };
      presetEnvOptions?: { preserveMediaQueries: boolean };
    }
  ) => {
    plugins: AcceptedPlugin[];
    sourceMap: boolean;
  };
}
