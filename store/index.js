export const state = () => ({
  contents: null
})

export const mutations = {
  add(state, contents) {
    state.contents = contents
  }
}

export const getters = {
  sections: (state) => {
    const entries = Object.entries(state.contents)
    const sectionsEntries = entries.filter(([key, value]) =>
      value.dir.includes('section')
    )
    return Object.fromEntries(sectionsEntries)
  }
}
