
import fs from 'fs';
import path from 'path';

// Helper function to create a URL-friendly slug from a title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters
    .replace(/\s+/g, '-')       // Replace spaces with hyphens
    .replace(/--+/g, '-')      // Replace multiple hyphens with a single one
    .trim();                   // Trim leading/trailing hyphens
}

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const author = formData.get('author');
    const description = formData.get('description');
    let heroImage = formData.get('heroImage');
    const heroImageAlt = formData.get('heroImageAlt');
    const content = formData.get('content');

    // Basic validation
    if (!title || !content || !description || !author || !heroImageAlt) {
      return new Response(JSON.stringify({ message: 'Title, Author, Description, Hero Image Alt Text, and Content are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Use a default image if heroImage is not provided
    if (!heroImage) {
        heroImage = '/blog-placeholder-1.jpg'; // Default image path
    }

    const slug = createSlug(title);
    const pubDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD

    // Construct the Markdown frontmatter and content
    const markdownContent = `---
title: '${title}'
author: '${author}'
description: '${description}'
pubDate: '${pubDate}'
heroImage: '${heroImage}'
heroImageAlt: '${heroImageAlt}'
---

${content}
`;

    // Define the path where the new blog post will be saved
    const blogPostDir = path.resolve(process.cwd(), 'src/content/blog');
    const filePath = path.join(blogPostDir, `${slug}.md`);

    // Check if the directory exists, if not create it
    if (!fs.existsSync(blogPostDir)) {
        fs.mkdirSync(blogPostDir, { recursive: true });
    }

    // Write the Markdown file to the filesystem
    fs.writeFileSync(filePath, markdownContent);

    // Return a success response
    return new Response(JSON.stringify({ message: 'Post created successfully!', slug: slug }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error creating post:', error);
    return new Response(JSON.stringify({ message: 'Error creating post: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
