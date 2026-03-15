document.addEventListener("DOMContentLoaded", () => {
  const isTouchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (!isTouchLike) {
    return;
  }

  document.querySelectorAll("[data-tz-control]").forEach((control) => {
    const button = control.querySelector("[data-tz-button]");
    const bubble = control.querySelector("[data-tz-bubble]");

    if (!button || !bubble) {
      return;
    }

    let hideTimer;

    const hideBubble = () => {
      control.classList.remove("is-visible");
      bubble.setAttribute("aria-hidden", "true");
    };

    const showBubble = () => {
      window.clearTimeout(hideTimer);
      control.classList.add("is-visible");
      bubble.setAttribute("aria-hidden", "false");
      hideTimer = window.setTimeout(hideBubble, 3000);
    };

    button.addEventListener("click", showBubble);
  });
});
