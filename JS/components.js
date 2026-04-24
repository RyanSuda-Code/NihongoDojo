class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Nihongo Dojo</h1>

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#hiragana-katakana">Hiragana and Katakana</a></li>
            <li><a href="#vocabulary">Vocabulary</a></li>
            <li><a href="#kanji">Kanji</a></li>
            <li><a href="#everyday-conversation">Everyday Conversation</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("site-header", siteHeader);


class siteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="socials">
          <a href="#" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
        <p>&copy; 2024 Nihongo Dojo. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("site-footer", siteFooter);