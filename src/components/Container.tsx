import type { HTMLAttributes, JSX, ReactNode } from 'react';

type ContainerProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  children: ReactNode;
};

/**
 * Horizontal layout container with the standard max-width and gutter
 * scale used by every section in the page. Consumers stay free to attach
 * extra ids / aria attributes via `...rest`.
 */
export function Container({ children, ...rest }: ContainerProps): JSX.Element {
  return (
    <div
      className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12"
      {...rest}
    >
      {children}
    </div>
  );
}