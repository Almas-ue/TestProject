import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './MainLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Header from '../header/Header';
import Main from '../main/main';

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
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<Header className={clsx(s.wrap__header, classNames?.footer)} />
			<Main className={clsx(s.wrap__body, classNames?.body)} />
			<footer className={clsx(s.wrap__footer, classNames?.footer)}>
				<p className={s.wrap__footerText}>© 2025 All rights reserved</p>
			</footer>
		</div>
	);
};
