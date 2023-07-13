import type { Component, JSX } from "solid-js";

export type ComponentWithChildren<T = {}> = Component<T & { children: JSX.Element }>