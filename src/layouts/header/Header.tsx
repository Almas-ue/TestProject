import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes.tsx';
import { ButtonX } from '@components/ButtonX';
import style from './header.module.scss';
import clsx from 'clsx';
import Container from '@/components/container';
import { FC } from 'react';

interface Props {
	className?: string;
}

const Header: FC<Props> = ({ className }) => {
	return (
		<header className={clsx(style.header, className)}>
			<Container>
				<div className={style.headerInner}>
					<h2 className={style.wrap__headerLogo}>CompanyName</h2>
					<nav className={style.wrap__headerNav}>
						<ul className={style.wrap__headerNavList}>
							<li className={style.header__itemLink}>
								<Link to={ROUTES.home.path}>Главная</Link>
							</li>
							<li className={style.itemLink}>
								<Link to={ROUTES.test.path}>О нас</Link>
							</li>
							<li className={style.itemLink}>
								<Link to={ROUTES.test.path}>Услуги</Link>
							</li>
							<li className={style.itemLink}>
								<Link to={ROUTES.test.path}>Портфолио</Link>
							</li>
							<li className={style.itemLink}>
								<Link to={ROUTES.test.path}>Контакты</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;
