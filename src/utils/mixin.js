export default {
  methods: {
    calc() {
      const minWidth = 320;
      const minHeight = 240;
      let width = 1024;
      let height = 768;
      let fontSize = 62.5;

      if (window.innerHeight > window.innerWidth || navigator.userAgent.match(/iPad/i) != null) {
        if (window.innerWidth <= minWidth) return fontSize + "%";
        if (!(window.innerWidth > width)) width = window.innerWidth;
        return (width * fontSize) / minWidth + "%";
      } else {
        if (window.innerHeight <= minHeight) return fontSize + "%";
        if (!(window.innerHeight > height)) height = window.innerHeight;
        return (height * fontSize) / minHeight + "%";
      }
    },

    magic() {
      const html = document.querySelector("html");
      html.style.fontSize = this.calc();
      window.onresize = e => {
        html.style.fontSize = this.calc();
      };
    }
  }
};
