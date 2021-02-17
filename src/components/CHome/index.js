import { VContainer, VForm, VFileInput } from "vuetify/lib/components"

import CPill from "../CPill"

import { ipcRenderer } from "electron"

import "./styles.scss"

export default {
  name: "Home",
  data: () => ({
    files: [],
    groupedWords: [
      { name: "you", amount: 900 },
      { name: "i", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "she", amount: 900 },
      { name: "it", amount: 900 }
    ]
  }),
  methods: {
    processSubtitles() {
      console.log(this.files)

      ipcRenderer.send("milad", "ping")
      ipcRenderer.on("milad", (event, resp) => {
        console.log(resp)
      })
    }
  },
  render(h) {
    return (
      <div>
        <VContainer fluid>
          <VForm>
            <VFileInput
              label="Selecione as Legendas"
              prepend-icon="mdi-message-text"
              append-outer-icon="mdi-send"
              outlined
              multiple
              chips
              vModel={this.files}
              onClick={this.processSubtitles}
            />
          </VForm>
          <div class="c-pills">
            {this.groupedWords.map(word => (
              <CPill name={word.name} amount={word.amount} />
            ))}
          </div>
        </VContainer>
      </div>
    )
  }
}
