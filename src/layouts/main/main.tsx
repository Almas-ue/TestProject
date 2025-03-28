import { FC } from 'react';
import clsx from 'clsx';

import Advantage from './advantage';
import Works from './works';

import style from './main.module.scss';

interface Props {
	className?: string;
	children?: React.ReactNode;
}

const Main: FC<Props> = ({ className, children }) => {
	return (
		<main className={clsx(style.main, className)}>
			<Advantage />
			<Works />
			{children}
		</main>
	);
};

export default Main;
