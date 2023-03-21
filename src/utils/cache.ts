class Cache {
  getCache(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export default new Cache()
