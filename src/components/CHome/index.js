import { VContainer, VForm, VFileInput, VBtn } from "vuetify/lib/components"

import CPill from "../CPill"

import { ipcRenderer } from "electron"

import "./styles.scss"

export default {
  name: "Home",
  data: () => ({
    files: [],
    groupedWords: []
  }),
  methods: {
    processSubtitles() {
      const paths = this.files.map(file => file.path)
      ipcRenderer.send("process-subtitles", paths)
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp
      })
    },
    resetVariables() {
      this.files = []
      this.groupedWords = []
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
            />
          </VForm>
          <VBtn
            onClick={() =>
              this.files.length == 0
                ? console.log("Please choose a file at least")
                : this.processSubtitles()
            }
          >
            Submit
          </VBtn>
          <VBtn onClick={this.resetVariables}>Reset</VBtn>
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
