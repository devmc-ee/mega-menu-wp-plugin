import { FC, FormEvent } from "react";

type Props = {
  title: string;
  onClick: (() => void) | ((event: FormEvent<HTMLButtonElement | HTMLFormElement>) => Promise<void>);
  disabled?: boolean;
  testId?: string;
  classes?: string;
  type?: 'button' | 'submit';
}

export const Button: FC<Props> = ({
  onClick,
  title,
  testId,
  disabled = false,
  classes = '',
  type = 'button'
}: Props) => {

  const args = Object.assign(
    {
      'data-TestId': testId,
      disabled,
      className: `devmcee-mega-menu-builder-content-action-button ${classes}`.trim(),
      type
    },
    type === 'submit'
      ? { onSubmit: onClick }
      : { onClick }
  );

  return (
    <button {...args}>
      {title}
    </button>
  )
}