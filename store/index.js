export const state = () => ({
  contents: null,
  lang: 'fr'
})

export const mutations = {
  addContents(state, contents) {
    state.contents = contents
  },
  setLang(state, lang) {
    state.lang = lang
  }
}

export const getters = {
  sections: (state) => {
    const entries = Object.entries(state.contents)
    const sections = entries.filter(
      ([key, value]) =>
        value.dir.includes('section') && value.dir.includes(state.lang + '/')
    ).map(([key, value]) => value)
    sections.sort((a, b) => {
      return a.weight > b.weight;
    })
    return sections
  }
}
