import { add } from '../../utils/add'
import styles from './input.module.css'

// lib/components/Input/index.tsx
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props
  console.log(add(3, 5))
  return <input className={`${className} ${styles.input}`} {...restProps} />
}
