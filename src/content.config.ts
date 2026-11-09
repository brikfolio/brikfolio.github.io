import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts are written by non-developers in Pages CMS (see .pages.yml).
// Keep these fields in step with the fields in .pages.yml.
// Pages CMS can save an empty optional field as "" or null, so those are allowed.
const optionalText = z.string().nullish().transform((v) => (v ? v.trim() : '') || undefined);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: optionalText,
    cover: optionalText,
    cover_alt: optionalText,
    draft: z.boolean().nullish().transform((v) => v ?? false),
  }),
});

export const collections = { blog };
