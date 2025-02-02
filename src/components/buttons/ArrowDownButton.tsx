import { ArrowDownIcon } from '../../icons';
import { IconButton } from './IconButton';

type Props = {
	onClick: () => void;
	disabled?: boolean;
};

export const ArrowDownButton = ({ onClick, disabled }: Props) => {
	return (
		<IconButton disabled={disabled} onClick={onClick}>
			<ArrowDownIcon />
		</IconButton>
	);
};
