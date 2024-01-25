
import { z, defineCollection } from 'astro:content';

const serviceCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
        image: image(),
        alt: z.string(),
        gallery: z.array(image()),
        gallery_descriptions: z.array(z.string()),
    })
});

export const collections = {
    'services': serviceCollection,
};