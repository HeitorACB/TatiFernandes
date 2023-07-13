import 'solid-js';
import type { ComponentWithChildren } from 'ts-utils';

const Button: ComponentWithChildren = (props) => {
  return (
    <button
      type="button"
      class="text-white bg-gradient-to-r from-primaryAltDark to-primaryAlt focus:ring-4 hover:from-primaryAlt hover:to-primaryAltDark focus:ring-black font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none text-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
