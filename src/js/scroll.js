function scroll() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 1000);
}

export default scroll;