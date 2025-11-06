// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Audrey Docs",
			logo: {
				src: './src/assets/audrey.png',
				alt: 'Audrey'
			},
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/audrey-gg",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/Ym3emzEQdN",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          // items: [
          // 	// Each item here is one entry in the navigation menu.
          // 	{ label: 'Example Guide', slug: 'guides/example' },
          // ],
        },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
