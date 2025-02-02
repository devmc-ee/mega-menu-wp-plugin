import { FC } from 'react';
import { SubMenuItem as SubMenuItemType } from '../app.types';
import { Button } from './buttons/Button';
import './SubMenuItem.scss';
import { ArrowUpButton } from './buttons/ArrowUpButton';
import { ArrowDownButton } from './buttons/ArrowDownButton';

type SubMenuItemProps = SubMenuItemType & {
	activeSubItemFormUuid?: SubMenuItemType['uuid'] | null;
	columnIndex: number;
	orderModeEnabled: boolean;
	isMoveUpAllowed: boolean;
	isMoveDownAllowed: boolean;
	setFormActive: (uuid: SubMenuItemType['uuid']) => void;
	moveUp: (uuid: SubMenuItemType['uuid']) => void;
	moveDown: (uuid: SubMenuItemType['uuid']) => void;
};

export const SubMenuItem: FC<SubMenuItemProps> = ({
	uuid,
	title,
	activeSubItemFormUuid,
	orderModeEnabled,
	isMoveUpAllowed,
	isMoveDownAllowed,
	setFormActive,
	moveUp,
	moveDown,
}: SubMenuItemProps) => {
	return (
		<div className="devmcee-mega-menu-builder-content__sub-menu-item">
			<span className="devmcee-mega-menu-builder-content__sub-menu-item-title">
				{title}
			</span>
			{orderModeEnabled ? (
				<div className="devmcee-mega-menu-builder-menu-item__re-order-buttons-container">
					{isMoveUpAllowed && (
						<ArrowUpButton
							disabled={!isMoveUpAllowed}
							onClick={() => moveUp(uuid)}
						/>
					)}
					{isMoveDownAllowed && (
						<ArrowDownButton
							disabled={!isMoveDownAllowed}
							onClick={() => moveDown(uuid)}
						/>
					)}
				</div>
			) : (
				<Button
					title="Edit"
					onClick={() => setFormActive(uuid)}
					disabled={
						!!activeSubItemFormUuid
						&& activeSubItemFormUuid !== uuid
					}
					testId={`sub-menu-item-form-${title}__edit-button`}
				/>
			)}
		</div>
	);
};
