/** Mobile navigation: toggle, Escape to close, closes when a link is chosen. */
export function siteNav() {
  return {
    open: false,

    get expanded() {
      return this.open ? 'true' : 'false';
    },

    toggle() {
      this.open = !this.open;
    },

    close() {
      if (!this.open) return;
      this.open = false;
      this.$refs.toggle?.focus();
    }
  };
}
