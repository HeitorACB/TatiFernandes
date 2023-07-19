import 'solid-js';
import type { ComponentWithChildren } from 'ts-utils';

const CTA: ComponentWithChildren<{ className?: string }> = (props) => {
  return (
    <button
      class={`rounded-[70px] bg-[#203DE2] px-7 py-3 text-sm font-semibold leading-6  ${
        props.className || ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default CTA;
