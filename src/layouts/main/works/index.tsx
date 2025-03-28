import { FC, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Container from '@/components/container';
import CardProject from '@/components/cardProject/cardProject';
import { menuList } from '@/layouts/menuList';

import { projectsList } from '@/layouts/projectList';

import style from './works.module.scss';

interface Props {
	className?: string;
}

const Works: FC<Props> = ({ className }) => {
	const [active, setActive] = useState(0);

	return (
		<section className={clsx(style.works, className)}>
			<Container>
				<div className={style.works__header}>
					<h2 className={clsx('h1_text', style.works__title)}>Наши работы</h2>
					<p className={clsx('standartText', style.works__desc)}>
						Ознакомьтесь с нашими лучшими проектами в различных категориях
					</p>
				</div>
				<nav className={style.works__nav}>
					<ul className={style.works__nav_list}>
						{menuList.map(({ name, path }, index) => (
							<li key={index} className={style.works__nav_item}>
								<Link
									onClick={() => setActive(index)}
									to={path}
									className={clsx(
										style.works__nav_link,
										active === index && style.active,
									)}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={style.works__projects}>
					{projectsList.map(({ name, category, url, img }, index) => (
						<CardProject key={index} {...{ name, category, url, img }} />
					))}
				</div>
			</Container>
		</section>
	);
};

export default Works;
