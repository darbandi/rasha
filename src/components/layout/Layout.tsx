import { Main_comp } from './main/Main'

type Props = {
  children: JSX.Element
}

export function Layout_comp(props: Props): JSX.Element {
  return <Main_comp>{props.children}</Main_comp>
}
