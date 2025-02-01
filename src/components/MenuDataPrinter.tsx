import { FC } from "react"
import { useMenuState } from "../hooks/useMenuState";
import { useMenuMetaState } from "../hooks/useMenuMetaState";

export const MenuDataPrinter: FC = () => {
  const { state: initData } = useMenuState()
  const { state: metaState } = useMenuMetaState();

  return (
    <>
      <details>
        <summary>Data</summary>
        <pre>
          {JSON.stringify(
            initData,
            null,
            2
          )}

        </pre>
      </details>
      <details>
        <summary>Meta</summary>
        <pre>
          {JSON.stringify(
            metaState,
            null,
            2
          )}

        </pre>
      </details>
    </>
  )
}