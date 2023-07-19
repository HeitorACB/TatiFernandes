import 'solid-js';
import type { JSX } from 'solid-js';
import type { ComponentWithChildren } from 'ts-utils';

type CTAProps = JSX.HTMLAttributes<HTMLButtonElement> &
  JSX.HTMLAttributes<HTMLAnchorElement>;

const CTA: ComponentWithChildren<CTAProps> = (props) => {
  return (
    <>
      {'href' in props ? (
        <a
          {...(props as JSX.HTMLAttributes<HTMLAnchorElement>)}
          class={`min-w-[217px] rounded-[70px] bg-[#203DE2] py-3 text-center text-sm font-semibold leading-6  ${
            props.class || ''
          }`}
        >
          {props.children}
        </a>
      ) : (
        <button
          {...props}
          class={`${
            props.class || ''
          } min-w-[217px] rounded-[70px] bg-[#203DE2]  py-3
            text-center text-sm font-semibold
          leading-6`}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default CTA;
