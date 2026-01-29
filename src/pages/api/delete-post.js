
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');

    if (!slug) {
      return new Response(JSON.stringify({ message: 'Slug is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const blogPostDir = path.resolve(process.cwd(), 'src/content/blog');
    const filePath = path.join(blogPostDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ message: 'Post not found.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    fs.unlinkSync(filePath);

    return new Response(JSON.stringify({ message: 'Post deleted successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error deleting post:', error);
    return new Response(JSON.stringify({ message: 'Error deleting post: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
