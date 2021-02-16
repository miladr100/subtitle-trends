import { VApp, VAppBar, VMain, VBtn, VSpacer } from "vuetify/lib/components"

import CHelloWorld from "./components/CHelloWorld"

export default {
  name: "App",

  components: {
    CHelloWorld
  },

  data: () => ({
    //
  }),
  render(h) {
    return (
      <VApp>
        <VAppBar app color="primary" dark>
          <VSpacer></VSpacer>
          <VBtn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <span class="mr-2">Latest Release</span>
          </VBtn>
        </VAppBar>

        <VMain>
          <CHelloWorld />
        </VMain>
      </VApp>
    )
  }
}
