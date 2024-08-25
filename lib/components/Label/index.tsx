import styles from './label.module.css'

// lib/components/Label/index.tsx
export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props
  return <label className={`${className} ${styles.label}`} {...restProps} />
}
