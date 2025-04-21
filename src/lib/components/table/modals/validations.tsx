'use client'
import { useId, forwardRef } from 'react';
import type { ReactNode, ForwardedRef } from 'react';
import { createPortal } from 'react-dom'

type TypeValidstionsProps = {
  children: ReactNode,
  okey: () => void,
  cancel: () => void
}

function _Validations({ children, okey, cancel }: TypeValidstionsProps, ref: ForwardedRef<HTMLDialogElement>) {
  const identity = useId();

  return (
    createPortal(
      <dialog
        area-modal='true'
        area-labelledby='modal-title'
        id={`Modal-${identity}`}
        ref={ref}
        className="modal">
        {children}
        <footer>
          <button onClick={() => cancel()}>
            Cancelar
          </button>
          <button onClick={() => okey()}>
            Okey
          </button>
        </footer>
      </dialog>
      , document.body)
  );
}

const Validations = forwardRef<HTMLDialogElement, TypeValidstionsProps>(_Validations);
export default Validations;