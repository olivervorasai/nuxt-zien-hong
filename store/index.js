import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export const state = () => ({
  business_info: null,
})

export const mutations = {
  SET_BUSINESS_INFO(state, value) {
    if (Object.prototype.hasOwnProperty.call(value, 'open_hour')) {
      const datetime = new Date('1970-01-01T' + value.open_hour)
      value.open_hour = datetime.toLocaleTimeString([], { hour: '2-digit' })
    }
    if (Object.prototype.hasOwnProperty.call(value, 'close_hour')) {
      const datetime = new Date('1970-01-01T' + value.close_hour)
      value.close_hour = datetime.toLocaleTimeString([], { hour: '2-digit' })
    }
    state.business_info = value
  },
  SET_NOTICES(state, value) {
    value.forEach((notice) => {
      notice.content = md.render(notice.content)
    })
    value.sort((a, b) => b.id - a.id)
    state.notices = value
  },
  SET_CATEGORIES(state, value) {
    value.forEach((category) => {
      if (category.description) {
        category.description = md.render(category.description)
      }
      category.menu_items.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true })
      )
      category.menu_items.forEach((item) => {
        if (item.image) {
          for (const format in item.image.formats) {
            item.image.formats[format].url =
              process.env.strapiBaseUri + item.image.formats[format].url
          }
          item.image.url = process.env.strapiBaseUri + item.image.url
        }
      })
    })
    state.categories = value
  },
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const body = await context.$strapi.find('business-info')
    commit('SET_BUSINESS_INFO', body)

    const notices = await context.$strapi.find('notices')
    commit('SET_NOTICES', notices)

    const categories = await context.$strapi.find('categories')
    commit('SET_CATEGORIES', categories)
  },
}
