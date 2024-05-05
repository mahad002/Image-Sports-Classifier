import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header class="header">
        <div class="brand-box">
          <span class="brand">Mahad Sheikh & Omer Hashmi</span>
        </div>

        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Sports Image Detector</span>
            <span class="heading-primary-sub">Select and Image and Check its Class</span>
          </h1>
          <a href="predict" class="btn btn-white btn-animated">Predict</a>
        </div>
      </header>
    </div>
  );
}
