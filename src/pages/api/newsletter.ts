import type { APIRoute } from 'astro';
import { app } from '../../firebase/server';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const db = getFirestore(app);
const newsletterCollection = collection(db, 'newsletter_subscriptions');

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();

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
    console.error('Error adding document: ', error);
    return new Response('Something went wrong', { status: 500 });
  }
};
