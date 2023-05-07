import "./styles.css";
import "./Button";

export default function App() {
  return (
    <div className="App">
      <h1>All About Cats</h1>
      <h2>Everyones favorite pet!</h2>
      <img id="CatPic" src="/Pics/cat.webp" alt="catPic" />
      <br />
      <ul>
        <h4>5 facts about cats:</h4>

        <li>Cats can jump 5 times their height</li>
        <li>Each cats nose is unique, like fingerprints on humans</li>
        <li>Cat whiskers are the same width as their body</li>
        <li>Cats can dream</li>
        <li>A house cat is genetically 95.6% tiger</li>
      </ul>
      <ul>
        <h4>Top 5 cat names:</h4>
        <li>Charlie</li>
        <li>Oscar</li>
        <li>Milo</li>
        <li>George</li>
        <li>Tigger</li>
      </ul>
      <ul>
        <h4>5 popular cat breeds:</h4>
        <li>Siamese</li>
        <li>Persian</li>
        <li>Maine Coon</li>
        <li>Ragdoll</li>
        <li>Bengal</li>
      </ul>
      <img src="/Pics/cat2.jpg" id="cat2" alt="cat laying down" /> <br />
      <button />
    </div>
  );
}
