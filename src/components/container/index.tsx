import { FC, ReactNode } from 'react';
import style from './container.module.scss';
import clsx from 'clsx';

interface Props {
	children: ReactNode;
	className?: string;
}

const Container: FC<Props> = ({ className, children }) => {
	return <div className={clsx(style.container, className)}>{children}</div>;
};

export default Container;
