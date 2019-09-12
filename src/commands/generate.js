module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first
    const componentName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`

    const { options } = parameters
    const isTypescript = !!options.typescript
    const path = options.path || 'src/components/'

    // UI
    await generate({
      template: isTypescript ? 'typescript-ui.js.ejs' : 'javascript-ui.js.ejs',
      target: `${path}/${componentName}/${componentName}${
        isTypescript ? '.ts' : '.js'
      }`,
      props: { componentName }
    })

    // CSS
    await generate({
      template: 'css.js.ejs',
      target: `${path}/${componentName}/${componentName}.css`,
      props: { componentName: componentName.toLowerCase() }
    })

    // Index
    await generate({
      template: 'index.js.ejs',
      target: `${path}/${componentName}/index${isTypescript ? '.ts' : '.js'}`,
      props: { componentName }
    })

    info(`Generated at ${path}/${componentName}`)
  }
}
