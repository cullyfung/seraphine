import { FC } from 'react'
import { Footer, IFooterProps } from '../footer/index'
import { INavbarProps, Navbar } from '../navbar/index'
import styles from './styles.module.scss'

export interface ILayoutProps {
  navbarData: INavbarProps
  footerData: IFooterProps
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children
}) => {
  return (
    <div className={styles.layout}>
      <Navbar {...navbarData} />
      <main className={styles.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  )
}
