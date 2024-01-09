
import { z, defineCollection } from 'astro:content';

const serviceCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        alt: z.string(),
        gallery: z.array(z.string()),
        gallery_descriptions: z.array(z.string()),
    })
});

export const collections = {
    'services': serviceCollection,
};