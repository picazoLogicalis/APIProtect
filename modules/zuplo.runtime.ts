import {
  environment,
  AkamaiApiSecurityPlugin,
  RuntimeExtensions,
  ZuploContext,
  ZuploRequest,
} from "@zuplo/runtime";

export function runtimeInit(runtime: RuntimeExtensions) {
  runtime.addPlugin(
    new AkamaiApiSecurityPlugin({
      hostname: "att-mexico.nonamesec.com",
      // index, provided by Akamai API Security
      index: 2,
      // Key provided by Akamai API Security
      key: "db3a1942-3df5-4994-9543-9f3196f885b1",
      // Enable the active prevention/protection feature
      enableProtection: true,
    }),
  );
}