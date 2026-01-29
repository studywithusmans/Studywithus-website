import fs from "fs/promises";
import path from "path";

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const title = formData.get("title");
        const slug = formData.get("slug");
        const image = formData.get("imageUrl");
        const imageAlt = formData.get("imageAlt");
        const metaDescription = formData.get("metaDescription");
        const content = formData.get("content");
        const category = formData.get("category");
        const tags = formData.get("tags");
        const createdAt = new Date().toISOString();

        if (!title || !slug || !image || !imageAlt || !metaDescription || !content || !category) {
            return new Response("Missing required fields", { status: 400 });
        }

        // Save the image
        const imageName = `${slug}-${Date.now()}.${image.name.split('.').pop()}`;
        const imagePath = path.join(process.cwd(), "public/uploads", imageName);
        await fs.writeFile(imagePath, Buffer.from(await image.arrayBuffer()));

        // Create the markdown content
        const markdownContent = `
---        
title: "${title}"
slug: "${slug}"
description: "${metaDescription}"
pubDate: "${createdAt}"
heroImage: "/uploads/${imageName}"
imageAlt: "${imageAlt}"
category: "${category}"
tags: [${tags.split(',').map(t => `"${t.trim()}"`).join(', ')}]
---

${content}
        `.trim();

        const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);
        await fs.writeFile(filePath, markdownContent);

        return new Response("Post created successfully", { status: 200 });

    } catch (error) {
        console.error("Error creating post:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
