const defaultCallback = (match, data) => {
  return { text: JSON.stringify(data) }
}

export const mockConfig = (config) => {
  return Object.assign({
    callback: defaultCallback
  }, config)
}