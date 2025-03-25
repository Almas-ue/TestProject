import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes.tsx';

import Container from '@/components/container';

import style from './header.module.scss';
import { menuList } from '../menuList';

interface Props {
	className?: string;
}

const Header: FC<Props> = ({ className }) => {
	return (
		<header className={clsx(style.header, className)}>
			<Container>
				<div className={style.headerInner}>
					<Link
						to={ROUTES.home.path}
						className={clsx('iconText', style.header__headerLogo)}
					>
						CompanyName
					</Link>
					<nav className={style.header__headerNav}>
						<ul className={style.nav__headerNavList}>
							{menuList.map(({ name, path }, index) => (
								<li
									key={index}
									className={clsx('standartText', style.nav__itemLink)}
								>
									<Link to={path}>{name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;
