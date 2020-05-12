export default function({ params, redirect }) {
  params.pathMatch === '' && redirect('301', '/fr')
}
