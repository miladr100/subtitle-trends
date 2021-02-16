import { VContainer } from "vuetify/lib/components"

import { CPill } from "../CPill"

export default {
  name: "Home",
  data: () => ({
    groupedWords: [
      { name: "you", amount: 900 },
      { name: "i", amount: 900 },
      { name: "she", amount: 900 },
      { name: "it", amount: 900 }
    ]
  }),
  render(h) {
    return (
      <div>
        <VContainer fluid>
          <div class="pills"></div>
        </VContainer>
      </div>
    )
  }
}
