import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Object Detection App</h1>
      <p>Upload an image and predict its class.</p>
      <Link href="/predict">
        <h1>Predict</h1>
      </Link>
    </div>
  );
}
