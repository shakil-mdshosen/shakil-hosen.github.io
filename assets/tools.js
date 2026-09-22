/* Shared behaviour for tools on shakil.engineer: theme toggle and toasts.
   Theme is stored under the same "theme" key the home page uses. Include
   the inline pre-paint snippet in <head> to avoid a flash:
   <script>(function(){var s;try{s=localStorage.getItem("theme")}catch(e){}var l=window.matchMedia&&matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.setAttribute("data-theme",s==="light"||s==="dark"?s:(l?"light":"dark"))})();</script>
*/
(function () {
  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable */ }
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("[data-theme-toggle]");
    if (btn) setTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
  });

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: light)");
    var onChange = function (e) {
      var chosen = null;
      try { chosen = localStorage.getItem("theme"); } catch (err) {}
      if (!chosen) root.setAttribute("data-theme", e.matches ? "light" : "dark");
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
  }

  var host;
  /** Show a short message. type: "ok" | "error" | undefined */
  window.showToast = function (message, type, ms) {
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      host.setAttribute("role", "status");
      host.setAttribute("aria-live", "polite");
      document.body.appendChild(host);
    }
    var t = document.createElement("div");
    t.className = "toast" + (type === "ok" ? " is-ok" : type === "error" ? " is-error" : "");
    t.textContent = message;
    host.appendChild(t);
    setTimeout(function () {
      t.classList.add("is-leaving");
      setTimeout(function () { t.remove(); }, 220);
    }, ms || 2600);
  };
})();
