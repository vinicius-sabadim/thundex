module.exports = {
  name: 'thundex',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Create React components')
    print.info('Usage: thundex generate <componentName>')
  }
}
