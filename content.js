function addBookmarkButton() {
  const interval = setInterval(() => {
    const subscribeBtn = document.querySelector('#subscribe-button');

    if (!subscribeBtn) return;

    // Avoid adding multiple times
    if (document.querySelector('#smriti-bookmark-btn')) {
      clearInterval(interval);
      return;
    }

    // Create button
    const bookmarkBtn = document.createElement('button');
    bookmarkBtn.id = 'smriti-bookmark-btn';
    bookmarkBtn.textContent = 'Bookmark';

    // Styling similar to YouTube's Subscribe button
    bookmarkBtn.style.backgroundColor = '#cc0000';  //#cc000
    bookmarkBtn.style.color = '#fff';
    bookmarkBtn.style.border = 'green 3px solid';///modefy
    bookmarkBtn.style.borderRadius = '18px';
    bookmarkBtn.style.padding = '0 16px';
    bookmarkBtn.style.marginLeft = '8px';
    bookmarkBtn.style.height = '36px';
    bookmarkBtn.style.fontSize = '14px';
    bookmarkBtn.style.fontWeight = '500';
    bookmarkBtn.style.cursor = 'pointer';
    bookmarkBtn.style.display = 'inline-flex';
    bookmarkBtn.style.alignItems = 'center';
    bookmarkBtn.style.justifyContent = 'center';

    bookmarkBtn.addEventListener('click', () => {
      const url = window.location.href;
      console.log('🔖 Bookmarked URL:', url);
    });

    // Insert next to Subscribe button
    subscribeBtn.parentNode.insertBefore(bookmarkBtn, subscribeBtn.nextSibling);
    clearInterval(interval);
  }, 1000);
}

addBookmarkButton();
