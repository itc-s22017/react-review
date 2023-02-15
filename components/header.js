import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'
import Container from 'components/container'
const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
