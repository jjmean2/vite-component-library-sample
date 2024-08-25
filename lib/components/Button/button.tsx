// lib/components/Button/index.tsx
import { add } from '../../utils/add'
import styles from './index.module.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...restProps } = props
  console.log(add(13, 105))
  return (
    <button className={`${className} ${styles.button}`} {...restProps}>
      TEST{children}
    </button>
  )
}
