const a = 1

const f = (a: number) => a + 1
const g = (a: number) => a * 2

type Compose = <A, B, C>(f: (a: A) => B, g: (a: B) => C) => (a: A) => C
const compose: Compose = (f, g) => a => g(f(a))

const fg = compose(
  f,
  g,
)

const r = fg(a)

type ComposeU = <A, B>(f: (a: A) => B) => <C>(g: (a: B) => C) => (a: A) => C
const composeU: ComposeU = f => g => a => g(f(a))

const fgU = composeU(f)(g)

const rU = fgU(a)
