import { ReactNode } from "react";
import { Dialog } from "@headlessui/react";
type Props = {
  title?: string;
  children: ReactNode;
  open: boolean;
  setOpen: (data: boolean) => void;
  className?: string;
};
export default function Modal(props: Props) {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4 my-10">
        <Dialog.Panel
          className={`mx-auto w-4/5 rounded-xl bg-white p-5 ${props.className} max-h-full overflow-y-auto`}
        >
          {props.title && (
            <Dialog.Title className="mb-4">{props.title}</Dialog.Title>
          )}
          {props.children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
