import { ArrowUpIcon } from '../../icons';
import { IconButton } from './IconButton';

type Props = {
	onClick: () => void;
	disabled?: boolean;
};

export const ArrowUpButton = ({ onClick, disabled }: Props) => {
	return (
		<IconButton disabled={disabled} onClick={onClick}>
			<ArrowUpIcon />
		</IconButton>
	);
};
