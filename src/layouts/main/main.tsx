import clsx from 'clsx';
import { FC } from 'react';
import style from './main.module.scss';
import Container from '@/components/container';

interface Props {
	className?: string;
	children?: React.ReactNode;
}

const Main: FC<Props> = ({ className, children }) => {
	return (
		<main className={clsx(style.main, className)}>
			<Container>
				<h2>main</h2>
				{children}
			</Container>
		</main>
	);
};

export default Main;
