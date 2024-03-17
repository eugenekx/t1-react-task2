import eatlyLogo from "./assets/logo.svg";

export default function Menu() {
  return (
    <header className="border-b w-[1248px]">
      <div>
        <img src={eatlyLogo} alt="" />
        eatly
      </div>

      <nav>
        <ul>
          <li>
            <a href="/recipes">Recipes</a>
            <a href="/faq">FAQ</a>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
