import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ButtonX } from '../ButtonX';

import style from './cardProject.module.scss';

interface Props {
	className?: string;
	img?: string;
	name?: string;
	category?: string;
	url: string;
}

const CardProject: FC<Props> = ({ className, img, name, category, url }) => {
	return (
		<Link to={url} className={clsx(style.card, className)}>
			<div className={style.card__cardInner}>
				<div className={style.projectName}>
					{img ? (
						<img className={style.img} src={img} alt="img" />
					) : (
						<p className={style.nameProject}>{name}</p>
					)}
				</div>

				<div className={style.hover}>
					<p className={style.nameProject}>{name}</p>
					<p className={style.hover__categoryText}>{category}</p>
					<ButtonX className={style.hover__btnInfo}>Подробрнее</ButtonX>
				</div>
			</div>
		</Link>
	);
};

export default CardProject;
