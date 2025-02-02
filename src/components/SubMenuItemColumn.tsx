import { SubMenuItemsList } from '../app.types';
import { useSubMenuItemColumn } from '../hooks/useSubMenuItemColumn';
import { Button } from './buttons/Button';
import { SubMenuItemForm } from './forms/SubMenuItemForm';
import { SubMenuItem } from './SubMenuItem';

type Props = {
	columnIndex: number;
	subItemUuidList: SubMenuItemsList;
};

export const SubMenuItemColumn = ({
	subItemUuidList,
	columnIndex,
}: Props) => {
	const {
		subMenuItems,
		subMenuItemForm,
		orderModeEnabled,
		initSubMenuItemForm,
		initSubMenuItemFormForEditing,
		moveSubMenuItemUp,
		moveSubMenuItemDown,
	} = useSubMenuItemColumn({ subItemUuidList });

	return (
		<div className="devmcee-mega-menu-builder-content__sub-menu-column">
			<div className="devmcee-mega-menu-builder-content__sub-menu-column-header">
				<Button
					title="Add sub item"
					onClick={() => initSubMenuItemForm(columnIndex)}
					testId={`sub-items-column-${columnIndex}__add-sub-item-button`}
				/>
			</div>
			<div className="devmcee-mega-menu-builder-content__sub-menu-column-content">
				{!subMenuItemForm && subItemUuidList.length === 0 && (
					<div className="devmcee-mega-menu-builder-content__sub-menu-column-content-placeholder">
						No sub items
					</div>
				)}
				{subMenuItems.map((subMenuItem, i) =>
					!subMenuItemForm
						|| (subMenuItemForm && subMenuItemForm?.uuid !== subMenuItem.uuid)
						? (
							<SubMenuItem
								activeSubItemFormUuid={subMenuItemForm?.uuid}
								key={subMenuItem.uuid}
								orderModeEnabled={orderModeEnabled}
								isMoveUpAllowed={i > 0}
								isMoveDownAllowed={i < subMenuItems.length - 1}
								moveUp={moveSubMenuItemUp}
								moveDown={moveSubMenuItemDown}
								{...subMenuItem}
								setFormActive={initSubMenuItemFormForEditing}
							/>
						) : (
							<SubMenuItemForm />
						)
				)}
				{subMenuItemForm &&
					!subMenuItemForm?.uuid &&
					subMenuItemForm?.columnIndex === columnIndex && (
						<div className="devmcee-mega-menu-builder-content__sub-menu-item-container">
							<SubMenuItemForm />
						</div>
					)}
			</div>
		</div>
	);
};
