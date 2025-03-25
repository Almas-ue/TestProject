import clsx from 'clsx';
import { FC } from 'react';
import style from './line.module.scss';

interface Props {
	className?: string;
	tag: string;
	rating: number;
}

const Line: FC<Props> = ({ className, rating, tag }) => {
	return (
		<div className={clsx(className, style.line)}>
			<div className={style.line__star}>
				<p className={style.star}>★</p>
				<p className={style.rating}>{rating}</p>
			</div>
			<div className={style.line__tag}>
				<p className={style.name}>{tag}</p>
			</div>
		</div>
	);
};

export default Line;
