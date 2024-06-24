import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3003,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3003",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "footer";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "footer",
          exposes: {
            "./footer": "./src/footer.tsx",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
