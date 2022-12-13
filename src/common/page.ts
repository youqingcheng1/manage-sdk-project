import Config from '@/config'
const redirectToHomePage = () => {
  location.href = `${Config.system.authUrl}/home`
}

export default {
  redirectToHomePage
}
