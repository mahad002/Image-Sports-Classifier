import PredictForm from '../components/predictForm';

export default function PredictPage() {
  return (
    <div>

      <PredictForm />
      <div class="footer">
        <p class="note">NOTE: This Model only works if Sports images based on its 7 classes are uploaded. If an image of not a sport is uploaded, the model will give an incorrect answer</p>
        <p class="note-cr">Copyright © 2024 Mahad Sheikh & Omer Hashmi</p>
      </div>
    </div>
  );
}
