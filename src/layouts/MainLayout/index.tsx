import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
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
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<Header className={clsx(classNames?.footer)} />
			<Main className={clsx(s.wrap__body, classNames?.body)} />
			<Footer className={clsx(s.wrap__footer, classNames?.footer)} />
		</div>
	);
};
