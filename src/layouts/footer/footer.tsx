import clsx from 'clsx';
import { FC } from 'react';

import style from './footer.module.scss';

interface Props {
	className?: string;
	chidren?: React.ReactNode;
}
const Footer: FC<Props> = ({ className, chidren }) => {
	return (
		<footer className={clsx(style.footer, className)}>
			<p className={style.footer__text}>© 2025 All rights reserved</p>
			{chidren}
		</footer>
	);
};

export default Footer;
