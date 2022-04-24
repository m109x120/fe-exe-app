const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  dev: {
    baseApi: '',
    mockApi: 'https://www.fastmock.site/mock/afd47a7eb2075681f415902d8882827a/api/'
  },
  test: {
    baseApi: ''
  },
  prod: {
    baseApi: ''
  }
}

export default {
  env,
  mock: true,
  ...EnvConfig[env]
}