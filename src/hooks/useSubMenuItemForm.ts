import { ChangeEvent, FormEvent, useMemo } from 'react';
import { useMenuState } from './useMenuState';
import { SubMenuItemForm } from '../reducers/menuState.types';

export const useSubMenuItemForm = () => {
  const {
    state: {
      subMenuItemForm,
    },
    dispatchers: {
      saveSubMenuItem,
      changeSubMenuItemFieldValue,
      removeSubMenuItem,
      removeSubMenuItemForm
    }
  } = useMenuState();

  const canSubmit = useMemo(
    () => subMenuItemForm && subMenuItemForm.title && subMenuItemForm.url,
    [subMenuItemForm?.title, subMenuItemForm?.url]
  );

  const headerTitle = useMemo(
    () => {
      if (!subMenuItemForm) {
        return '';
      }

      return subMenuItemForm.uuid ? subMenuItemForm.title : `${subMenuItemForm.title || 'New sub item'}`
    },
    [subMenuItemForm?.uuid, subMenuItemForm?.title]
  );

  const save = async (
    event: FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !subMenuItemForm?.title
      || !subMenuItemForm?.url
    ) {
      return;
    }

    saveSubMenuItem();
  };

  const changeField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    changeSubMenuItemFieldValue(name as keyof SubMenuItemForm, value);
  };

  const deleteItem = () => {
    if (!subMenuItemForm?.uuid) {
      return removeSubMenuItemForm();
    }

    return removeSubMenuItem()
  };

  const closeForm = () => {
    removeSubMenuItemForm();
  };

  return {
    form: subMenuItemForm,
    headerTitle,
    canSubmit,
    save,
    changeField,
    deleteItem,
    closeForm
  };
};
