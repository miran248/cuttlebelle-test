export const activeClass = (a, b, className = "active") => a && b && a.startsWith(b) ? className : undefined;
