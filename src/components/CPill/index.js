import "./styles.scss"

export default {
  name: "CPill",
  props: {
    name: {
      type: String,
      default: "Teste"
    },
    amount: {
      type: Number,
      default: 20
    }
  },
  data: () => ({
    //
  }),
  render(h) {
    return (
      <div class="c-pill">
        <span class="c-pill__name">{this.name}</span>
        <span class="c-pill__amount">{this.amount}</span>
      </div>
    )
  }
}
