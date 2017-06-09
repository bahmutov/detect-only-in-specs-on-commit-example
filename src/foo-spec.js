describe.only('foo', () => {
  it.only('disabled test', () => {})
  it('normal test', () => {})

  context.only('context.only on purpose', () => {})
})
