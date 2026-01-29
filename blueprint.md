# Blueprint

## Overview

This project is a personal blog and online portfolio for a student, designed to showcase their skills, projects, and thoughts. The website is built with Astro.js and features a clean, modern design that is both visually appealing and highly performant. The site is designed to be a central hub for the student's online presence, providing a place to share their work, connect with others, and document their journey.

## Implemented Features

### Core

- **Astro.js Framework**: The website is built on the Astro.js framework, which is known for its performance and content-focused approach.
- **Tailwind CSS**: The styling is handled by Tailwind CSS, which provides a utility-first approach to design, resulting in a clean and consistent look and feel.
- **File-based Routing**: The website uses Astro's file-based routing to create new pages and blog posts.
- **Content Collections**: The blog posts are managed using Astro's Content Collections, which allows for a clean and organized way to manage content. There are currently four blog posts, each with its own markdown file in the `src/content/blog` directory.

### Pages

- **Home Page**: The home page features a hero section with a brief introduction to the student, a summary of their skills, and a call to action to learn more about them.
- **About Page**: The about page provides a more detailed overview of the student's background, skills, and experience.
- **Admin Page**: The admin page provides a central hub for managing the blog, allowing the student to create, edit, and delete posts.
- **Blog Post Pages**: Each blog post has its own dedicated page, which is dynamically generated from the markdown files in the `src/content/blog` directory.

### Blog

- **Blog Post Creation**: The student can create new blog posts using a simple form on the admin page.
- **Blog Post Editing**: The student can edit existing blog posts using a similar form on the admin page.
- **Blog Post Deletion**: The student can delete blog posts from the admin page.
- **SEO-Friendly Slugs**: The blog posts have SEO-friendly slugs that are generated from the post title.

### API

- **`create-post`**: This API endpoint handles the creation of new blog posts.
- **`edit-post`**: This API endpoint handles the editing of existing blog posts.
- **`delete-post`**: This API endpoint handles the deletion of blog posts.

### Security

- **Admin Login Page**: A dedicated login page at `/admin/login` to restrict access to the admin panel.
- **Password Protection**: The login page uses a password stored in an environment variable (`ADMIN_PASSWORD`) for authentication.
- **Secure Session Management**: Upon successful login, a secure, HTTP-only cookie is created to maintain the session.
- **Middleware Protection**: A middleware file (`src/middleware.js`) intercepts all requests to `/admin` routes and redirects unauthorized users to the login page.
- **Secure Firebase Integration**: Firebase API keys and other secrets have been moved from client-side JavaScript to a secure `.env` file to prevent exposure. Client-side code now safely accesses these variables through Astro's environment variable management.

### Deployment

- **Firebase App Hosting**: The website is deployed and hosted on Firebase App Hosting, a solution designed for modern, server-rendered web applications. This provides a fast, secure, and scalable environment for the site. The live site can be accessed at [https://studywithus-website-c2872.web.app](https://studywithus-website-c2872.web.app).

## Current Task: Deployment to Firebase

I have successfully deployed the application to Firebase App Hosting. The website is now live and accessible. I have also updated the `blueprint.md` file to reflect all the changes made during this process, including the security enhancements and the deployment method.

