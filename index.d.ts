declare module "@tiwariav/postcss-config" {
  type getConfig = (
    env: string,
    options?: {
      globalDataOptions?: { files: string[] };
      mixinOptions?: { mixinsDir: string };
      presetEnvOptions?: object;
    }
  ) => {
    plugins: AcceptedPlugin;
    sourceMap: boolean;
  };
}
