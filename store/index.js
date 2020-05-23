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
    const sectionsEntries = entries.filter(
      ([key, value]) =>
        value.dir.includes('section') && value.dir.includes(state.lang + '/')
    )
    return Object.fromEntries(sectionsEntries)
  }
}
