import { type ReactNode, useEffect } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-slate-700 bg-slate-900 p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="ml-auto block rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-200 hover:bg-slate-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  )
}
