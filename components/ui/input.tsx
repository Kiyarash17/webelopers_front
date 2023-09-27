type Props = {
  label?: any;
  inputClassName?: string;
  containerClassName?: string;
  type?: string;
  placeholder?: string;
  id: string;
  onChange?: any;
  defaultValue?: string;
  value?: string | number;
  disable?: boolean;
  fullWidth?: boolean;
};

export default function Input(props: Props) {
  const type = props.type || "text";
  const disable = props.disable || false;

  return (
    <div
      className={`${props.containerClassName} ${
        props.fullWidth && "w-full"
      } space-y-2`}
    >
      {props.label ? (
        <label htmlFor={props.id} className="text-gray-600 font-semibold block">
          {props.label}
        </label>
      ) : null}
      <input
        type={type}
        placeholder={props.placeholder}
        className={`${
          props.inputClassName
        } py-1.5 bg-sGray border border-gray-300 text-gray-500 focus:outline-none rounded-lg px-2 w-full focus:border-primary ${
          props.disable ? " cursor-not-allowed" : "cursor-pointer"
        }`}
        id={props.id}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        disabled={disable}
        value={props.value}
        min={0}
      />
    </div>
  );
}
