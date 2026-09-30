/** Generic disclosure (accordion item / FAQ). Button controls a region via aria-expanded. */
export function disclosure() {
  return {
    open: false,

    get expanded() {
      return this.open ? 'true' : 'false';
    },

    toggle() {
      this.open = !this.open;
    }
  };
}
