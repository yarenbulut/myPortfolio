// vite.config.ts
import { defineConfig } from "file:///Users/yarenbulut/Desktop/myPortfolio/node_modules/vite/dist/node/index.js";
import react from "file:///Users/yarenbulut/Desktop/myPortfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/yarenbulut/Desktop/myPortfolio/node_modules/@svgr/rollup/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      "/icons": "/public/icons"
    }
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "index.html"
      },
      output: {
        manualChunks: void 0,
        assetFileNames: "assets/[name].[ext]"
      }
    }
  },
  assetsInclude: ["**/*.PNG", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
  publicDir: "public"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWFyZW5idWx1dC9EZXNrdG9wL215UG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWFyZW5idWx1dC9EZXNrdG9wL215UG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95YXJlbmJ1bHV0L0Rlc2t0b3AvbXlQb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHN2Z3IgZnJvbSAnQHN2Z3Ivcm9sbHVwJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgc3ZncigpXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJy9pY29ucyc6ICcvcHVibGljL2ljb25zJ1xuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46ICdpbmRleC5odG1sJ1xuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHVuZGVmaW5lZCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltleHRdJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLlBORycsICcqKi8qLnBuZycsICcqKi8qLmpwZycsICcqKi8qLmpwZWcnLCAnKiovKi5naWYnLCAnKiovKi5zdmcnXSxcbiAgcHVibGljRGlyOiAncHVibGljJ1xufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxvQkFBb0I7QUFDOVQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxVQUFVO0FBQUEsRUFDdkYsV0FBVztBQUNiLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
