import type { APIRoute } from 'astro';
import { app } from '../../firebase/server';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const db = getFirestore(app);
const newsletterCollection = collection(db, 'newsletter_subscriptions');

export const POST: APIRoute = async ({ request }) => {
  let data;
  try {
    // Try to parse the JSON from the request body
    data = await request.json();
  } catch (error) {
    // If parsing fails, it's a bad request (e.g., empty body)
    return new Response('Invalid request body. Expected JSON.', { status: 400 });
  }

  const { email } = data;

  if (!email) {
    return new Response('Email is required', { status: 400 });
  }

  try {
    await addDoc(newsletterCollection, {
      email,
      subscribedAt: new Date(),
    });
    return new Response('Successfully subscribed!', { status: 200 });
  } catch (error) {
    console.error('Error adding document to Firestore: ', error);
    return new Response('Something went wrong on the server.', { status: 500 });
  }
};
