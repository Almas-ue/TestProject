import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import Header from '../header/Header';
import Main from '../main/main';
import Footer from '../footer/footer';

import s from './MainLayout.module.scss';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	classNames,
}) => {
	const location = useLocation();

	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<Header className={clsx(classNames?.footer)} />
			{location.pathname === '/' ? (
				<Main className={clsx(s.wrap__body, classNames?.body)} />
			) : (
				<div className={s.wrap__body}>{children}</div>
			)}
			<Footer className={clsx(s.wrap__footer, classNames?.footer)} />
		</div>
	);
};
