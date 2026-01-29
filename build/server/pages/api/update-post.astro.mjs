import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    const formData = await request.formData();
    const title = formData.get('title');
    const author = formData.get('author');
    const description = formData.get('description');
    let heroImage = formData.get('heroImage');
    const content = formData.get('content');

    if (!slug) {
      return new Response(JSON.stringify({ message: 'Slug is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!title || !author || !description || !content) {
      return new Response(JSON.stringify({ message: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!heroImage) {
        heroImage = '/blog-placeholder-1.jpg'; 
    }

    const blogPostDir = path.resolve(process.cwd(), 'src/content/blog');
    const filePath = path.join(blogPostDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return new Response(JSON.stringify({ message: 'Post not found.' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const frontmatterRegex = /^---[\s\S]*?---/;
    const match = fileContent.match(frontmatterRegex);

    if (!match) {
        return new Response(JSON.stringify({ message: 'Invalid post format.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const frontmatter = match[0];
    const pubDateLine = frontmatter.split('\n').find(line => line.startsWith('pubDate:'));
    const pubDate = pubDateLine ? pubDateLine.split('pubDate: ')[1] : new Date().toISOString().split('T')[0];

    const newMarkdownContent = `---
title: '${title}'
author: '${author}'
description: '${description}'
pubDate: '${pubDate}'
heroImage: '${heroImage}'
---

${content}
`;

    fs.writeFileSync(filePath, newMarkdownContent);

    return new Response(JSON.stringify({ message: 'Post updated successfully!', slug: slug }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error updating post:', error);
    return new Response(JSON.stringify({ message: 'Error updating post: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
