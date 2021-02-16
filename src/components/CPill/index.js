import { VApp } from "vuetify/lib/components"

export default {
  name: "App",
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
      <VApp>
        <span>{this.name}</span>
        <span>{this.amount}</span>
      </VApp>
    )
  }
}
