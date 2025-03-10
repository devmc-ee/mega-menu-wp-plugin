import { FC, FormEvent } from 'react';
import './Button.scss';

type Props = {
	title: string;
	onClick:
	| (() => void)
	| ((
		event: FormEvent<HTMLButtonElement | HTMLFormElement>
	) => Promise<void>);
	disabled?: boolean;
	testId?: string;
	classes?: string;
	type?: 'button' | 'submit';
	theme?: 'primary' | 'secondary' | 'danger';
};

export const Button: FC<Props> = ({
	onClick,
	title,
	testId,
	disabled = false,
	classes = '',
	type = 'button',
	theme = 'primary',
}: Props) => {
	const args = Object.assign(
		{
			'data-TestId': testId,
			disabled,
			className:
				`devmcee-mega-menu__action-button devmcee-mega-menu__action-button--${theme} ${classes}`.trim(),
			type,
		},
		type === 'submit' ? { onSubmit: onClick } : { onClick }
	);

	return <button {...args}>{title}</button>;
};
