import clsx from 'clsx';
import { FC } from 'react';
import style from './cardProject.module.scss';
import { Link } from 'react-router-dom';

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
				{img ? (
					<div className={style.projectName}>
						<p className={style.nameProject}>{name}</p>
						<img className={style.img} src={img} alt="img" />
					</div>
				) : (
					<p className={style.nameProject}>{name}</p>
				)}
			</div>
		</Link>
	);
};

export default CardProject;
