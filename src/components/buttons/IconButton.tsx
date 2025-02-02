import { FC, FormEvent } from 'react';

type Props = {
	onClick:
	| (() => void)
	| ((
		event: FormEvent<HTMLButtonElement | HTMLFormElement>
	) => Promise<void>);
	children?: React.ReactNode;
	disabled?: boolean;
	testId?: string;
	classes?: string;
	type?: 'button' | 'submit';
};

export const IconButton: FC<Props> = ({
	onClick,
	children,
	testId,
	disabled = false,
	classes = '',
	type = 'button',
}: Props) => {
	const args = Object.assign(
		{
			'data-TestId': testId,
			disabled,
			className:
				`devmcee-mega-menu-builder-content-action-button ${classes}`.trim(),
			type,
		},
		type === 'submit' ? { onSubmit: onClick } : { onClick }
	);

	return <button {...args}>{children}</button>;
};
