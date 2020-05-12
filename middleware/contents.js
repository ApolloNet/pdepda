import contents from '~/contents/contents.json'

export default function({ store }) {
  store.commit('addContents', contents)
}
