import 'solid-js';
import type { ComponentWithChildren } from 'ts-utils';

const CTA: ComponentWithChildren<{ className?: string }> = (props) => {
  return (
    <button
      class={`min-w-[217px] rounded-[70px] bg-[#203DE2] py-3 text-center text-sm font-semibold leading-6  ${
        props.className || ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default CTA;
