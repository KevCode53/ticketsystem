import styles from './styles.module.css'

type Props = {
  children: JSX.Element
}

const index = ({children}:Props) => {

  return (
    <div className="card">
      {children}
    </div>
  )
}

export default index