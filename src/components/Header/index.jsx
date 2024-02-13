import styles from './Header.module.scss'
import moon from '../../assets/moon.svg'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../store/themeSlice'

const Header = ({handleClick}) => {


  return (
    <header className={styles['header']}>
        <h2 className={styles['header__title']}>TODO LIST</h2>
        <div className={styles['header__block']}>
          <input className={styles['header__input']} type="text" placeholder='Поиск задачи'/>
          <img onClick={handleClick} className={styles['header__img']} src={moon} alt="" />
        </div>
    </header>
  )
}

export default Header