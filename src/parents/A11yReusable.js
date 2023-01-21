import React, { forwardRef } from "react"


const A11yReusable = forwardRef(({
  children,
  style,
  id,
  className,
  ariaRole,
  ariaLabel,
  ariaModal,
  onKeyDown,
  onClick,
  tabIndex
}, ref) => (
    <div
      ref={ref}
      style={style}
      id={id}
      className={className}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      onClick={onClick}
      role={ariaRole}
      aria-label={ariaLabel}
      aria-modal={ariaModal}
    >
      {children}
    </div>
  )
)

export default A11yReusable