// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.audrey.gg',
  integrations: [
    starlight({
      title: 'Audrey Docs',
			description: 'The documentation site for Audrey, the voice moderation Discord bot.',
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
        { label: 'Getting Started', slug: 'getting-started' },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Legal",
          items: [
            { label: 'Privacy Policy', link: 'https://audrey.gg/privacy' },
            { label: 'Terms of Service', link: 'https://audrey.gg/terms' },
          ],
        },
        {
          label: "Other",
          items: [
            { label: 'Credits', slug: 'credits' },
            { label: 'Frequently Asked Questions', link: 'https://audrey.gg/faq' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/audrey-gg/docs/edit/main/',
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
