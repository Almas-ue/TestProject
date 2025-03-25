import clsx from 'clsx';
import { FC } from 'react';

import Advantage from './advantage';

import style from './main.module.scss';
import Works from './works';

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
