import eatlyLogo from "./assets/logo.svg";

export default function Menu() {
  return (
    <header className="max-w-[1280px] mx-auto border-b w-[1248px] flex items-center gap-12 pb-[34px] pt-[59px]">
      <a href="/">
        <div className="flex gap-2 items-center">
          <img src={eatlyLogo} alt="" className="w-12" />
          <span className="font-semibold text-[#6C5FBC] text-[22px]">
            eatly
          </span>
        </div>
      </a>

      <nav>
        <ul className="flex gap-12 text-[#606060] text-lg">
          <li>
            <a href="/recipes">Recipes</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
