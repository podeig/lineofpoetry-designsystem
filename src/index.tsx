import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

interface LopButtonProps {
  title: string
}

export const LopButton = ({ title }: LopButtonProps) => {
  return <button>{title}</button>
}
