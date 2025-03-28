import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

import Container from '@/components/container';
import Line from '@/components/line/line';

import sparkles from './emoji/sparkles.png';
import rocket from './emoji/rocket.png';
import phone from './emoji/mobilePhone.png';

import style from './advantage.module.scss';

interface Props {
	className?: string;
}

const Advantage: FC<Props> = ({ className }) => {
	return (
		<section className={clsx(style.advantage, className)}>
			<Container>
				<h2 className={clsx('titleText', style.advantage__title)}>
					Инновационные решения для вашего бизнеса
				</h2>
				<div className={style.advantageBlock}>
					<Link to={ROUTES.test.path} className={style.advantage__item}>
						<div className={style.advantageInner}>
							<div className={style.advantageInner__iconCard}>
								<img className={style.imgEmoji} src={sparkles} alt="sparkles" />
							</div>
							<h3
								className={clsx('titleText', style.advantageInner__itemTitle)}
							>
								Креативный дизайн
							</h3>
							<p className={clsx('descText', style.advantageInner__itemDesc)}>
								Мы создаем уникальные дизайны, которые отражают индивидуальность
								вашего бренда и привлекают внимание целевой аудитории.
							</p>
							<Line rating={4.9} tag="Дизайн" />
						</div>
					</Link>
					<Link to={ROUTES.test.path} className={style.advantage__item}>
						<div className={style.advantageInner}>
							<div className={style.advantageInner__iconCard}>
								<img className={style.imgEmoji} src={rocket} alt="sparkles" />
							</div>
							<h3
								className={clsx('titleText', style.advantageInner__itemTitle)}
							>
								Быстрая разработка
							</h3>
							<p className={clsx('descText', style.advantageInner__itemDesc)}>
								Оптимизированный процесс разработки позволяет нам создавать
								высококачественные продукты в сжатые сроки.
							</p>
							<Line rating={4.8} tag="Разработка" />
						</div>
					</Link>
					<Link to={ROUTES.test.path} className={style.advantage__item}>
						<div className={style.advantageInner}>
							<div className={style.advantageInner__iconCard}>
								<img className={style.imgEmoji} src={phone} alt="sparkles" />
							</div>
							<h3
								className={clsx('titleText', style.advantageInner__itemTitle)}
							>
								Мобильная оптимизация
							</h3>
							<p className={clsx('descText', style.advantageInner__itemDesc)}>
								Все наши проекты адаптированы для любых устройств, обеспечивая
								идеальный пользовательский опыт на любом экране.
							</p>
							<Line rating={4.7} tag="Оптимизация" />
						</div>
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Advantage;
